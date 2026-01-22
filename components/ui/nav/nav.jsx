import { Book, Home, Pencil, UserCircle } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-neutral-900 grid grid-cols-4 w-full max-w-80 fixed left-[50%] translate-x-[-50%] bottom-10 md:bottom-15 rounded-md border border-neutral-800 overflow-hidden z-1000000">
      <Link
        href={"/"}
        className="cursor-pointer hover:bg-sky-600 transition-colors h-13 flex items-center justify-center border-r border-neutral-800"
      >
        <Home />
      </Link>
      <Link
        href={"/home/create"}
        className="cursor-pointer hover:bg-sky-600 transition-colors h-13 flex items-center justify-center border-r border-neutral-800"
      >
        <Pencil />
      </Link>
      <Link
        href={"/home/profile"}
        className="cursor-pointer hover:bg-sky-600 transition-colors h-13 flex items-center justify-center border-r border-neutral-800"
      >
        <UserCircle />
      </Link>
      <button className="cursor-pointer hover:bg-sky-600 transition-colors h-13 flex items-center justify-center">
        <Book />
      </button>
    </nav>
  );
}
