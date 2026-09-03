"use client";

import { useState } from "react";

/**
 * Dùng để KIỂM CHỨNG layout không bị render lại khi điều hướng giữa
 * các route con của nó (/dashboard, /dashboard/settings, /dashboard/billing).
 * Nếu layout bị render lại, count sẽ về 0 mỗi lần chuyển trang.
 */
export default function DebugCounter() {
    const [count, setCount] = useState(0);

    return (
        <button
            type="button"
            onClick={() => setCount((c) => c + 1)}
            className="rounded border border-ink/15 px-2 py-1 text-xs text-ink/70"
        >
            Đếm: {count}
        </button>
    );
}