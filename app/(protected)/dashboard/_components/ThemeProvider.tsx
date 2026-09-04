"use client";

import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";
const ThemeContext = createContext<{
    theme: Theme;
    toggle: () => void;
}>({ theme: "light", toggle: () => { } });

export function useTheme() {
    return useContext(ThemeContext);
}

/**
 * Bài 5: React Context không dùng được trực tiếp trong Server Component,
 * nên phải bọc trong một Client Component riêng như thế này, rồi mới
 * import vào layout (Server Component).
 */
export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState<Theme>("light");
    const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}