import Image from "next/image";
import HomeImage from "@/public/assets/images/home.jpg"
import { Lora } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BookImage, Github, Search, Sparkles } from "lucide-react";
const lora = Lora({subsets:["latin"]});

export default function Home() {
  return (
    <div className="min-h-screen bg-black grid md:grid-cols-[65%_35%]">
      <section className="h-dvh md:h-screen md:p-25 p-7 relative">
        <header className="flex items-center justify-between">
        <h3 className="font-medium text-lg">SPACE.</h3>
        <div className="flex items-center justify-center w-11 h-11 bg-neutral-900 rounded-full border border-neutral-800">
        <Github size={20}/>
        </div>
        </header>
        <Image src={HomeImage} alt="J" className="md:hidden my-5 rounded-xl"/>
        <section className="md:absolute bottom-20 max-w-120 flex flex-col gap-4"> 
          <h2 className={`text-3xl ${lora.className}`}>
            The space is full of mysteries and dark things.
          </h2>
          <p className="text-neutral-400">Hubble has captured an image of the largest planet-forming disk ever observed, and it’s a chaotic, hamburger shaped cloud of gas and dust spanning 400 billion miles.</p>
          <button className="px-10 w-fit bg-neutral-900 py-3 flex items-center gap-3 rounded-full border border-neutral-800 hover:bg-neutral-800 cursor-pointer">
            <Sparkles size="20" className="text-sky-600"/>
            Explore</button>
        </section>
      </section>
      <Image src={HomeImage} className="object-cover h-full w-full hidden md:block" alt="Space Images"/>
    </div>
  );
}
