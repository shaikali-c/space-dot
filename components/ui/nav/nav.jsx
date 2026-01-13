import { Book, Home, Pencil, UserCircle } from "lucide-react";

export default function Nav() {
  return (
    <nav className="bg-neutral-900 grid grid-cols-4 w-full max-w-80 fixed left-[50%] translate-x-[-50%] bottom-20 rounded-md border border-neutral-800 overflow-hidden">
      <button className="cursor-pointer hover:bg-sky-600 transition-colors h-13 flex items-center justify-center border-r border-neutral-800">
        <Home />
      </button>
      <button className="cursor-pointer hover:bg-sky-600 transition-colors h-13 flex items-center justify-center border-r border-neutral-800">
        <Pencil />
      </button>
      <button className="cursor-pointer hover:bg-sky-600 transition-colors h-13 flex items-center justify-center border-r border-neutral-800">
        <UserCircle />
      </button>
      <button className="cursor-pointer hover:bg-sky-600 transition-colors h-13 flex items-center justify-center">
        <Book />
      </button>
    </nav>
  );
}
