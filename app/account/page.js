import Heading from "@/components/ui/heading";

export default function Account() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <section className="py-13 relative h-dvh md:h-150 md:bg-neutral-900 max-w-350 md:rounded-xl flex flex-col md:border md:border-neutral-800">
        <header className="text-center md:max-w-150 flex flex-col gap-3 px-10">
          <Heading className={"text-3xl"}>
            Make an account now for extra benefits and subscribe too
          </Heading>
          {/* <p className="text-neutral-400">
          Research published in Memory & Cognition (2014) found that
          instrumental music often triggers nostalgia.
        </p>*/}
        </header>
        <div className="w-full max-h-60 bg-neutral-300 p-1 flex-1"></div>
        <div className="absolute bottom-0 grid grid-cols-1 grid-rows-2 w-full gap-5 px-8 pb-10">
          <button className="w-full bg-neutral-900 py-3 text-neutral-50 rounded-sm border border-neutral-800">
            Login
          </button>
          <button className="w-full bg-neutral-50 py-3 text-neutral-950 rounded-sm border border-neutral-50">
            Sign In
          </button>
        </div>
      </section>
    </main>
  );
}
