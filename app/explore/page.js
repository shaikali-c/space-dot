import Heading from "@/components/ui/heading";
import Nav from "@/components/ui/nav/nav";

export default function Page() {
  return (
    <main className="grid md:grid-cols-[25%_50%_25%]">
      <section className="min-h-screen md:border-r border-neutral-800 hidden md:block"></section>
      <section className="relative">
        <header className="md:p-20 p-10 font-semibold md:pb-10">
          <h2>SPACE.</h2>
        </header>
        <section className="md:px-20 px-10 border-b pb-10">
          <Heading className={"text-xl md:max-w-100"}>
            Four astronauts will venture around the Moon on Artemis II
          </Heading>
          <div className="w-full bg-neutral-800 h-50 my-5 rounded-md "></div>
          <p className="text-neutral-300 md:line-clamp-none line-clamp-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section className="grid md:grid-cols-3 gap-5 md:gap-10 p-10 pt-5">
          <div className="w-full bg-neutral-800 h-60 my-5 rounded-md "></div>
          <div className="w-full bg-neutral-800 h-60 my-5 rounded-md "></div>
          <div className="w-full bg-neutral-800 h-60 my-5 rounded-md "></div>
        </section>
        <Nav />
      </section>
      <section className="min-h-screen border-l border-neutral-800 hidden md:block"></section>
    </main>
  );
}
