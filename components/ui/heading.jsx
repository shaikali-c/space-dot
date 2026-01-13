import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

export default function Heading({ children, className }) {
  return <h2 className={`${lora.className} ${className}`}>{children}</h2>;
}
