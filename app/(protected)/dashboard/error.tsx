"use client";

// error.tsx bắt buộc phải là Client Component (quy ước của Next.js),
// nên có "use client" ở đây dù nội dung Bài 2 chưa đi sâu vào lý do.
export default function DashboardError() {
    return <p className="text-sm text-red-600">Đã có lỗi xảy ra.</p>;
}