import DashboardFooter from "./dashboard/_components/DashboardFooter";
import DashboardHeader from "./dashboard/_components/DashboardHeader";

export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="mx-auto max-w-4xl px-6 py-10">
            <DashboardHeader />
            {children}
            <DashboardFooter />
        </div>
    );
}