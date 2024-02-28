import Link from "next/link";

export default function Header() {
    return (
      <header>
        <h1 className="font-medium text-2xl bg-green-600 p-2">
          Cookie Stand Admin
        </h1>
        <nav>
          <Link href="/overview" className="text-xl">
            Overview
          </Link>
        </nav>
      </header>
    );
  }