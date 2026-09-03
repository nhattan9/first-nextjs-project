"use client";

import { useSearchParams } from "next/navigation";
import StatsCard from "./StatsCard";

/**
 * Bài 4 — ví dụ Native History API: đổi thứ tự thẻ bằng pushState,
 * không gọi router.push() nên không có request nào lên server, và
 * lịch sử trình duyệt vẫn ghi nhận để bấm "back" quay lại được.
 *
 * Đây là Client Component đầu tiên đọc URL bằng hook (useSearchParams)
 * thay vì prop searchParams — sẽ giải thích kỹ hơn ở bài Server and
 * Client Components.\
 * 
 * Khi nào dùng pushState

Dùng khi bạn muốn URL phản ánh một thay đổi UI phía client, và muốn người dùng bấm Back quay lại được trạng thái trước đó:

Sắp xếp/lọc dữ liệu đã có sẵn ở client — đúng như ví dụ StatsSection của bạn: đổi thứ tự thẻ mà không cần hỏi lại server.
Tab UI — chuyển tab (ví dụ ?tab=overview → ?tab=billing) khi nội dung các tab đã tải sẵn, chỉ ẩn/hiện bằng CSS/state, không cần gọi lại Laravel.
Ô tìm kiếm gợi ý (autocomplete) — cập nhật ?q=... theo từng ký tự gõ để URL có thể share/reload lại đúng từ khoá, nhưng không kích hoạt điều hướng thật mỗi lần gõ.
Wizard nhiều bước — lưu ?step=2 để reload không mất vị trí, trong khi nội dung từng bước xử lý hoàn toàn ở client.
 */
export default function StatsSection(): import("react").JSX.Element {
    const searchParams = useSearchParams();
    const sort = searchParams.get("sort") ?? "asc";

    function updateSort(order: "asc" | "desc") {
        const params = new URLSearchParams(searchParams.toString());
        params.set("sort", order);
        window.history.pushState(null, "", `?${params.toString()}`);
    }

    const cards = [
        { label: "Bài viết", value: 12 },
        { label: "Người dùng", value: 4 },
    ];
    const ordered = sort === "desc" ? [...cards].reverse() : cards;

    return (
        <div>
            <div className="flex gap-2 text-xs">
                <button
                    onClick={() => updateSort("asc")}
                    className={sort === "asc" ? "font-medium text-accent" : "text-ink/50"}
                >
                    Mặc định
                </button>
                <button
                    onClick={() => updateSort("desc")}
                    className={sort === "desc" ? "font-medium text-accent" : "text-ink/50"}
                >
                    Đảo ngược
                </button>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-4">
                {ordered.map((card) => (
                    <StatsCard key={card.label} label={card.label} value={card.value} />
                ))}
            </div>
        </div>
    );
}