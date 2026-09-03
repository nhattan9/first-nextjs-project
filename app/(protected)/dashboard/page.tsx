import Link from "next/link";
import StatsSection from "./_components/StatsSection";

export const metadata = {
    title: "Dashboard",
};

/**
 * Bài 4 — giả lập độ trễ để THẤY ĐƯỢC loading.tsx hoạt động (Streaming).
 * Đây KHÔNG phải cách gọi API thật — chỉ là setTimeout giả để page.tsx
 * "chậm" đủ lâu cho bạn quan sát. Sẽ xoá khi học bài Fetching Data,
 * lúc đó độ trễ thật sự đến từ việc gọi Laravel.
 */
function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function DashboardPage() {
    await delay(5000);

    return (
        <div>
            <h1 className="text-2xl font-medium text-ink">Tổng quan</h1>
            <p className="mt-2 text-sm text-ink/60">
                Trang này nằm trong route group (protected). Dữ liệu bên dưới đang
                là số tĩnh — sẽ nối với Laravel API khi học bài Fetching Data.
            </p>

            <div className="mt-6">
                <StatsSection />
            </div>

            <nav className="mt-8 flex gap-4 text-sm">
                <Link href="/dashboard/settings" className="text-accent">
                    Cài đặt
                </Link>
                <Link href="/dashboard/billing" className="text-accent">
                    Thanh toán
                </Link>
            </nav>

            {/* Khoảng trống để đẩy 2 link trên xuống dưới màn hình đầu tiên —
          chỉ để bạn quan sát prefetch-khi-vào-viewport rõ hơn trong DevTools.
          Không phải nội dung thật, xoá đi khi test xong. */}
            <div style={{ height: "1400px" }} />
            <p className="text-sm text-ink/40">
                Cuộn xuống dưới cùng và quan sát Network tab...
            </p>
        </div>
    );
}