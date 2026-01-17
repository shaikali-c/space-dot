import Image from "next/image";

export default function SpcPost({ data }) {
  return (
    <div className="w-full bg-transparent my-5 rounded-md">
      <div className="relative aspect-square">
        <Image
          src={data.imgSrc}
          alt="post"
          fill
          className="inset-0 w-full h-full object-cover rounded-md"
        />
        <div className="absolute top-5 left-5 z-10">
          <Badge variant="secondary">{data.tag}</Badge>
        </div>
      </div>
      <section className="pt-3 flex items-center gap-3">
        <Avatar className={"w-6.5 h-6.5"}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="font-semibold">{data.author}</p>
      </section>
    </div>
  );
}
