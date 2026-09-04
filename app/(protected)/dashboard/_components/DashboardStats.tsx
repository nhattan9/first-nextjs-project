import StatsSection from "./StatsSection";
import { getPostCount, getUserCount } from "@/lib/api";

/**
 * Bài 6 — Parallel Data Fetching: gọi getPostCount() và getUserCount()
 * TRƯỚC (chưa await), rồi mới await cùng lúc bằng Promise.all. Nếu viết
 * "const a = await getPostCount(); const b = await getUserCount();"
 * thì 2 request sẽ chạy TUẦN TỰ (waterfall) dù chúng không phụ thuộc
 * nhau — chậm hơn không cần thiết.
 *
 * Đây cũng là component sẽ THẤY LỖI ngay nếu Laravel chưa chạy hoặc
 * chưa có 2 route /stats/posts-count và /stats/users-count — lúc đó
 * error.tsx (đã tạo từ Bài 2) sẽ tự động bắt lỗi này.
 */
export default async function DashboardStats() {
  const postCountPromise = getPostCount();
  const userCountPromise = getUserCount();

  const [postCount, userCount] = await Promise.all([
    postCountPromise,
    userCountPromise,
  ]);

  return (
    <StatsSection
      cards={[
        { label: "Bài viết", value: postCount.count },
        { label: "Người dùng", value: userCount.count },
      ]}
    />
  );
}