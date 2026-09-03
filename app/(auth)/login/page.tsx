import Link from "next/link";
import LoginForm from "./_components/LoginForm";

export const metadata = {
  title: "Đăng nhập",
};

/**
 * Bài 3: đọc searchParams (Server Component prop, dạng Promise) để biết
 * người dùng định vào đâu trước khi bị chuyển sang /login. Ví dụ:
 * /login?redirect=/dashboard/settings
 * Việc TỰ ĐỘNG chuyển hướng sau khi đăng nhập thành công sẽ làm ở bài
 * Mutating Data — ở đây chỉ hiển thị để minh hoạ searchParams.
 */
export default async function LoginPage({
  searchParams,
}: {
  //=? redirect có thể có hoặc không, nếu có thì phải là string.
  searchParams: Promise<{ redirect?: string }>;
}) {
  const { redirect } = await searchParams;

  return (
    <div>
      <h1 className="text-2xl font-medium text-ink">Đăng nhập</h1>
      <p className="mt-2 text-sm text-ink/60">
        Trang này nằm trong route group (auth) — không yêu cầu đăng nhập.
      </p>

      {redirect && (
        <p className="mt-2 text-xs text-ink/50">
          Sau khi đăng nhập sẽ chuyển tới <code>{redirect}</code>.
        </p>
      )}

      <div className="mt-6">
        <LoginForm />
      </div>

      <Link href="/" className="mt-4 inline-block text-sm text-accent">
        ← Về trang chủ
      </Link>
    </div>
  );
}