import DebugCounter from "./DebugCounter";

export default function DashboardHeader() {
    return (
        <header className="mb-8 flex items-center justify-between border-b border-ink/10 pb-4">
            <span className="text-sm font-medium text-ink">Dashboard</span>
            <DebugCounter />
        </header>
    );
}