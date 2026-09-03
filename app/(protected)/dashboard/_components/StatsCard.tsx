export default function StatsCard({
    label,
    value,
}: {
    label: string;
    value: string | number;
}) {
    return (
        <div className="rounded-lg border border-ink/10 p-4">
            <p className="text-sm text-ink/60">{label}</p>
            <p className="mt-1 text-2xl font-medium text-ink">{value}</p>
        </div>
    );
}