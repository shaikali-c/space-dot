import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import ExploreImageElem from "@/components/ui/exp_img";
import Image from "next/image";

export default function Profile() {
  return (
    <section className="relative h-screen w-full flex flex-col">
      <Image
        src="https://cdn.esahubble.org/archives/images/large/heic0607b.jpg"
        fill
        className="object-cover -z-10"
        alt="Hell yeah"
      />
      <div className="flex-[0.4]"></div>
      <div className="bg-black/40 backdrop-blur-xl border-t border-white/20 shadow-lg rounded-t-4xl w-full flex-1">
        <header className="p-10 w-full flex justify-center flex-col items-center gap-3 border-b border-white/20 ">
          <Avatar className={"w-15 h-15"}>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="grayscale"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex justify-center gap-0 text-center flex-col">
            <h2 className="text-2xl font-semibold">Shaik ALi</h2>
            <p className="text-neutral-300 md:max-w-120">
              I follow current space missions, analyze astronomical data, and
              enjoy visualizing deep-space imagery.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center w-full">
            <Badge>Astrophysics</Badge>
            <Badge>Stars</Badge>
            <Badge>Black Holes</Badge>
          </div>
        </header>
        {/* <div className="text-center py-10 text-neutral-300">No posts yet.</div>*/}
        <div className="p-7 w-full max-h-110 overflow-y-auto">
          <section className="grid md:grid-cols-3 gap-7">
            <ExploreImageElem
              hide
              data={{
                img_src:
                  "https://cdn.esahubble.org/archives/images/large/heic2502a.jpg",
                category: "Nebulae",
                author: "Shaik ALi",
              }}
            ></ExploreImageElem>
            <ExploreImageElem
              hide
              data={{
                img_src:
                  "https://cdn.esahubble.org/archives/images/large/heic2502a.jpg",
                category: "Nebulae",
                author: "Shaik ALi",
              }}
            ></ExploreImageElem>
            <ExploreImageElem
              hide
              data={{
                img_src:
                  "https://cdn.esahubble.org/archives/images/large/heic2502a.jpg",
                category: "Nebulae",
                author: "Shaik ALi",
              }}
            ></ExploreImageElem>
          </section>
        </div>
      </div>
    </section>
  );
}
