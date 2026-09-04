import { Suspense } from "react";
import Link from "next/link";
import DashboardStats from "./_components/DashboardStats";
import StatsSkeleton from "./_components/StatsSkeleton";

export const metadata = {
    title: "Dashboard",
};

/**
 * Bài 6: DashboardPage KHÔNG còn là async, không tự fetch gì cả —
 * tiêu đề, mô tả, nav hiện ra NGAY LẬP TỨC. Chỉ <DashboardStats />
 * (component con, tự fetch Laravel) bị bọc trong <Suspense>, nên chỉ
 * phần thẻ thống kê chờ, không kéo theo cả trang như loading.tsx làm
 * ở Bài 4 (loading.tsx vẫn còn đó, dùng cho lúc mới điều hướng tới).
 */
export default function DashboardPage() {
    return (
        <div>
            <h1 className="text-2xl font-medium text-ink">Tổng quan</h1>
            <p className="mt-2 text-sm text-ink/60">
                Trang này nằm trong route group (protected). Dữ liệu bên dưới lấy
                thật từ Laravel qua <code>lib/api.ts</code>.
            </p>

            <div className="mt-6">
                <Suspense fallback={<StatsSkeleton />}>
                    <DashboardStats />
                </Suspense>
            </div>

            <nav className="mt-8 flex gap-4 text-sm">
                <Link href="/dashboard/settings" className="text-accent">
                    Cài đặt
                </Link>
                <Link href="/dashboard/billing" className="text-accent">
                    Thanh toán
                </Link>
            </nav>
        </div>
    );
}