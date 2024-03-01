import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-green-600 p-2">
      <h1 className="text-4xl bg-green-600 p-2">
        Cookie Stand Admin
      </h1>
      <nav>
        <Link href="/overview" className="px-2 py-1 rounded bg-green-50">
          Overview
        </Link>
      </nav>
    </header>
  );
}
