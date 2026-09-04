"use client";

import { useState } from "react";
/**
 * Component này nằm trong private folder _components của route /login.
 * Ở Bài 2, mình chỉ quan tâm ĐẶT FILE Ở ĐÂU (colocation), chưa xử lý
 * logic submit thật — phần đó sẽ học ở bài Server and Client Components
 * và Mutating Data.
 */

/**
 * Bài 5: LoginForm giờ là Client Component thật ("use client" ở đầu
 * file), vì cần State (showPassword) và event handler (onClick, onChange).
 *
 * redirectTo là dữ liệu được LoginPage (Server Component) truyền xuống
 * qua props — minh hoạ "Passing data from Server to Client Components".
 * Logic SUBMIT thật (gọi Laravel) vẫn để dành bài Mutating Data.
 */
export default function LoginForm({ redirectTo }: { redirectTo?: string }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm text-ink/70" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm text-ink/70" htmlFor="password">
          Mật khẩu
        </label>
        <div className="mt-1 flex items-center gap-2">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            className="w-full rounded-lg border border-ink/15 px-3 py-2 text-sm"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="whitespace-nowrap text-xs text-ink/50"
          >
            {showPassword ? "Ẩn" : "Hiện"}
          </button>
        </div>
      </div>

      {/* 
        1.redirectTo được giữ lại trong form ẩn — bài Mutating Data sẽ
          dùng giá trị này để biết chuyển hướng tới đâu sau khi đăng nhập.
        2.Trong Bài 5, Phần A có câu: "You can pass data from Server Components to Client Components using props."
          */}
      {redirectTo && <input type="hidden" name="redirectTo" value={redirectTo} />}

      <button
        type="submit"
        className="w-full rounded-lg bg-accent py-2 text-sm font-medium text-white"
      >
        Đăng nhập
      </button>
    </form>
  );
}