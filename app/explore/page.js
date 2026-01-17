import { Badge } from "@/components/ui/badge";
import Heading from "@/components/ui/heading";
import Nav from "@/components/ui/nav/nav";
import ExploreImageElem from "@/components/ui/exp_img";
import { Dot, Grip, Star } from "lucide-react";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";

const img_data = [
  {
    img_src: "https://cdn.esahubble.org/archives/images/large/heic1105a.jpg",
    category: "Black hole",
    author: "Shaik ALi",
  },
  {
    img_src: "https://cdn.esahubble.org/archives/images/large/heic2502a.jpg",
    category: "Nebulae",
    author: "Shaik ALi",
  },
  {
    img_src: "https://cdn.esahubble.org/archives/images/large/potw2412a.jpg",
    category: "Super massive",
    author: "Shaik ALi",
  },
  {
    img_src: "https://cdn.esahubble.org/archives/images/large/potw2443a.jpg",
    category: "Black hole",
    author: "Shaik ALi",
  },
];

export default function Page() {
  return (
    <main className="grid h-screen md:grid-cols-[25%_50%_25%]">
      <section className="min-h-screen md:border-r border-neutral-800 hidden sticky top-0 left-0 md:flex items-center justify-center flex-col gap-2">
        <Dot size={45} className={"text-neutral-50"} />
      </section>
      <section className="relative overflow-y-auto no-scrollbar">
        <header className="md:p-20 p-10 font-semibold md:pb-10">
          <h2>SPACE.</h2>
        </header>
        <section className="md:px-20 px-10 border-b pb-10">
          <Heading className={"text-xl md:max-w-100"}>
            Four astronauts will venture around the Moon on Artemis II
          </Heading>
          <div className="w-full bg-neutral-800 h-50 md:h-60 my-5 rounded-md "></div>
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
        <section>
          <header className="px-7 md:px-10 my-10 mb-8">
            <Heading className={"text-2xl"}>The Space Gallery</Heading>
          </header>
          <section className="grid md:grid-cols-3 grid-cols-1 gap-13 md:gap-10 md:p-10 md:pt-0 p-7 pt-0">
            {img_data.map((elem, index) => (
              <ExploreImageElem data={elem} key={index} />
            ))}
          </section>
        </section>
        <Nav />
      </section>
      <section className="min-h-screen md:border-l border-neutral-800 hidden sticky top-0 left-0 md:flex items-center justify-center">
        <Dot size={45} className={"text-neutral-50"} />
      </section>
    </main>
  );
}
