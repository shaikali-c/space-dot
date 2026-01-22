import Nav from "@/components/ui/nav/nav";
import { Dot } from "lucide-react";

export default function ExploreLayout({ children }) {
  return (
    <main className="grid h-screen md:grid-cols-[25%_50%_25%]">
      <section className="min-h-screen md:border-r border-neutral-800 hidden sticky top-0 left-0 md:flex items-center justify-center flex-col gap-2">
        <Dot size={45} className={"text-neutral-50"} />
      </section>
      <section className="relative overflow-y-auto no-scrollbar overflow-x-hidden">
        {children}
        <Nav />
      </section>
      <section className="min-h-screen md:border-l border-neutral-800 hidden sticky top-0 left-0 md:flex items-center justify-center">
        <Dot size={45} className={"text-neutral-50"} />
      </section>
    </main>
  );
}
