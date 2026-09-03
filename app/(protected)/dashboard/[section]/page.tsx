import Link from "next/link";

const SECTION_LABELS: Record<string, string> = {
    settings: "Cài đặt",
    billing: "Thanh toán",
};

/**
 * Bài 4: không có generateStaticParams, route [section] sẽ rơi về
 * dynamic rendering lúc request. Khai báo trước các giá trị đã biết
 * để Next.js prerender sẵn lúc build — Link trỏ tới các route này sẽ
 * được prefetch toàn bộ thay vì chỉ một phần.
 */
export function generateStaticParams() {
    return Object.keys(SECTION_LABELS).map((section) => ({ section }));
}

export default async function DashboardSectionPage({
    params,
}: {
    params: Promise<{ section: string }>;
}) {
    const { section } = await params;
    const label = SECTION_LABELS[section] ?? section;

    return (
        <div>
            <Link href="/dashboard" className="text-sm text-accent">
                ← Quay lại tổng quan
            </Link>
            <h1 className="mt-4 text-2xl font-medium text-ink">{label}</h1>
            <p className="mt-2 text-sm text-ink/60">
                Đây là route động: <code>app/(protected)/dashboard/[section]/page.tsx</code>{" "}
                với <code>section = &quot;{section}&quot;</code>.
            </p>
        </div>
    );
}