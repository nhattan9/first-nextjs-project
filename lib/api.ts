/**
 * Thin fetch wrapper around the Laravel API.
 *
 * Set LARAVEL_API_URL in your environment (see .env.local.example).
 * This file is meant to be imported from Server Components / Route
 * Handlers so the real API URL and any secret keys never reach the browser.
 *
 * import "server-only" ở dòng dưới ép Next.js báo lỗi NGAY LÚC BUILD nếu
 * file này lỡ bị import vào một Client Component — thay vì âm thầm chạy
 * sai hoặc lộ logic gọi API ra client bundle.
 */
import "server-only";

const API_URL = process.env.LARAVEL_API_URL ?? "http://localhost:8000/api";

interface ApiOptions extends RequestInit {
    token?: string;
}

export async function apiFetch<T>(path: string, options: ApiOptions = {}): Promise<T> {
    const { token, headers, ...rest } = options;

    const res = await fetch(`${API_URL}${path}`, {
        ...rest,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...headers,
        },
        // Server Components cache by default; opt out when you need
        // always-fresh data (e.g. a dashboard):
        // cache: "no-store",
    });

    if (!res.ok) {
        const body = await res.text().catch(() => "");
        throw new Error(`Laravel API error ${res.status}: ${body}`);
    }

    return res.json() as Promise<T>;
}

// Example typed call — replace with your real Laravel endpoints/shapes.
export interface Post {
    id: number;
    title: string;
    excerpt: string;
}

export function getPosts() {
    return apiFetch<Post[]>("/posts");
}

/**
 * Bài 6: hai endpoint riêng biệt, cố tình tách ra để minh hoạ
 * Parallel Data Fetching — gọi cả hai cùng lúc bằng Promise.all thay vì
 * await lần lượt (sẽ tạo waterfall không cần thiết).
 *
 * TẠM THỜI: Laravel backend chưa có 2 route /stats/posts-count và
 * /stats/users-count, nên đang gọi tạm JSONPlaceholder (API test công
 * khai, không cần đăng ký: https://jsonplaceholder.typicode.com) để có
 * dữ liệu thật mà luyện tập. KHÔNG dùng apiFetch() ở đây vì apiFetch
 * trỏ tới LARAVEL_API_URL — JSONPlaceholder là domain khác hẳn.
 *
 * Khi Laravel đã có 2 route thật, xoá 2 hàm tạm này, bỏ comment 2 hàm
 * "bản thật" ở dưới cùng file.
 */
export async function getPostCount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: unknown[] = await res.json();
    return { count: data.length };
}

export async function getUserCount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: unknown[] = await res.json();
    return { count: data.length };
}

// Bản thật khi Laravel đã sẵn sàng — bỏ comment và xoá 2 hàm tạm ở trên:
// export function getPostCount() {
//   return apiFetch<{ count: number }>("/stats/posts-count");
// }
// export function getUserCount() {
//   return apiFetch<{ count: number }>("/stats/users-count");
// }