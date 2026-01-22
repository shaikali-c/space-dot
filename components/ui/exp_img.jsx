import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Badge } from "./badge";

export default function ExploreImageElem({ data, hide = false }) {
  return (
    <div className="w-full bg-transparent rounded-md">
      <div className="relative aspect-square">
        <Image
          src={data.img_src}
          alt="post"
          fill
          className="inset-0 w-full h-full object-cover rounded-md border border-neutral-800"
        />
        <div className="absolute top-5 left-5 z-10">
          <Badge variant="secondary">{data.category}</Badge>
        </div>
      </div>
      <section
        className={`pt-3 items-center gap-3 ${hide ? "hidden" : "flex"}`}
      >
        <Avatar className={"w-6.5 h-6.5"}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="font-semibold">{data.author}</p>
      </section>
    </div>
  );
}
