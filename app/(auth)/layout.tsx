/**
 * Layout cho route group (auth).
 * Route group không xuất hiện trong URL: file này chỉ áp dụng
 * cho các trang bên trong app/(auth)/, ví dụ /login.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
}