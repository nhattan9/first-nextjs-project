"use client";

import { useSearchParams } from "next/navigation";
import StatsCard from "./StatsCard";

type Card = { label: string; value: number };

/**
 * Bài 4 — Native History API: đổi thứ tự thẻ bằng pushState.
 * Bài 6 — "cards" giờ là dữ liệu THẬT từ Laravel, truyền xuống từ
 * DashboardStats.tsx (Server Component), không còn viết cứng ở đây nữa.
 */
export default function StatsSection({ cards }: { cards: Card[] }) {
    const searchParams = useSearchParams();
    const sort = searchParams.get("sort") ?? "asc";
    const ordered = sort === "desc" ? [...cards].reverse() : cards;

    return (
        <div>
            <div className="flex gap-2 text-xs">
                <button
                    onClick={() => {
                        const params = new URLSearchParams(searchParams.toString());
                        params.set("sort", "asc");
                        window.history.pushState(null, "", `?${params.toString()}`);
                    }}
                    className={sort === "asc" ? "font-medium text-accent" : "text-ink/50"}
                >
                    Mặc định
                </button>
                <button
                    onClick={() => {
                        const params = new URLSearchParams(searchParams.toString());
                        params.set("sort", "desc");
                        window.history.pushState(null, "", `?${params.toString()}`);
                    }}
                    className={sort === "desc" ? "font-medium text-accent" : "text-ink/50"}
                >
                    Đảo ngược
                </button>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-4">
                {ordered.map((card) => (
                    <StatsCard key={card.label} label={card.label} value={card.value} />
                ))}
            </div>
        </div>
    );
}