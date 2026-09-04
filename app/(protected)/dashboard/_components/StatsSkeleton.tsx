export default function StatsSkeleton() {
    return (
        <div className="mt-3 grid grid-cols-2 gap-4">
            {[0, 1].map((i) => (
                <div
                    key={i}
                    className="animate-pulse rounded-lg border border-ink/10 p-4"
                >
                    <div className="h-3 w-16 rounded bg-ink/10" />
                    <div className="mt-2 h-6 w-10 rounded bg-ink/10" />
                </div>
            ))}
        </div>
    );
}