/**
 * Component này nằm trong private folder _components của route /login.
 * Ở Bài 2, mình chỉ quan tâm ĐẶT FILE Ở ĐÂU (colocation), chưa xử lý
 * logic submit thật — phần đó sẽ học ở bài Server and Client Components
 * và Mutating Data.
 */
export default function LoginForm() {
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
        <input
          id="password"
          type="password"
          className="mt-1 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-accent py-2 text-sm font-medium text-white"
      >
        Đăng nhập
      </button>
    </form>
  );
}
