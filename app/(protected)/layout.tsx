import DashboardFooter from "./dashboard/_components/DashboardFooter";
import DashboardHeader from "./dashboard/_components/DashboardHeader";
import ThemeProvider from "./dashboard/_components/ThemeProvider";


/**
 * Layout cho route group (protected).
 * ThemeProvider bọc children — đặt càng sâu càng tốt trong cây component
 * (không bọc luôn <html>/<body> ở root layout) để Next.js tối ưu phần
 * tĩnh của ứng dụng tốt hơn, đúng khuyến nghị trong docs.
 */
export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <div className="mx-auto max-w-4xl px-6 py-10">
                <DashboardHeader />
                {children}
                <DashboardFooter />
            </div>
        </ThemeProvider>
    );
}