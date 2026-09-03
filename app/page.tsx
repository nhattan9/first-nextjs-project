import Link from "next/link";

/**
 * Trang chủ — route "/".
 * Bài 3: dùng <Link> để điều hướng sang các route khác thay vì <a>.
 */
export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm tracking-wide text-accent">Next.js + Laravel</p>
      <h1 className="mt-2 text-4xl font-medium leading-tight text-ink">
        Trang chủ
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
        Đây là route "/", nằm ngoài mọi route group.
      </p>

      <nav className="mt-6 flex gap-4 text-sm">
        <Link href="/login" className="text-accent">
          Đăng nhập
        </Link>
        <Link href="/dashboard" className="text-accent">
          Dashboard
        </Link>
      </nav>
    </main>
  );
}