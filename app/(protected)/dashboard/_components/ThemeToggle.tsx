"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
    const { theme, toggle } = useTheme();

    return (
        <button
            onClick={toggle}
            className="rounded border border-ink/15 px-2 py-1 text-xs text-ink/70"
        >
            Theme: {theme}
        </button>
    );
}