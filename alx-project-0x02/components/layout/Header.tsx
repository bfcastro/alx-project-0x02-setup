import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 p-4 text-white shadow-md">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-xl font-bold">ALX Project</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:underline">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}