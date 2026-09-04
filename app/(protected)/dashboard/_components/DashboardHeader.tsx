import DebugCounter from "./DebugCounter";
import ThemeToggle from "./ThemeToggle";

export default function DashboardHeader() {
    return (
        <header className="mb-8 flex items-center justify-between border-b border-ink/10 pb-4">
            <span className="text-sm font-medium text-ink">Dashboard</span>
            <div className="flex gap-2">
                {/**
                 * Nhắc lại nguyên tắc từ Phần A:
                 * "Chỉ đánh dấu 'use client' ở đúng phần cần tương tác, không đánh dấu cả khối lớn."
                 *
                 * Đây là hệ quả trực tiếp của quy tắc "module graph" mình đã nói ở phần đầu Bài 5:
                 * một khi file có "use client", mọi thứ file đó import và render trực tiếp đều bị
                 * gộp vào client bundle — dù bản thân những thứ đó có cần tương tác hay không.
                 * 
                 * Điều gì sẽ xảy ra nếu bạn lỡ thêm "use client" vào chính DashboardHeader.tsx:
                 *
                 * - Toàn bộ file DashboardHeader.tsx giờ thuộc "module graph" phía client.
                 * - Dòng chữ "Dashboard" — vốn chẳng cần tương tác gì — giờ cũng phải đi qua quy
                 *   trình hydrate, dù thực chất chẳng có onClick hay state nào gắn vào nó.
                 * - Nếu sau này bạn thêm nhiều thứ tĩnh khác vào DashboardHeader (logo, menu tĩnh,
                 *   breadcrumb...), tất cả sẽ "bị kéo theo" vào bundle JS một cách không cần thiết
                 *   — dù chúng hoàn toàn có thể là HTML thuần.
                 */}
                <ThemeToggle />
                <DebugCounter />
            </div>
        </header>
    );
}