import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import Heading from "@/components/ui/heading";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePage() {
  return (
    <section className="p-10">
      <header className="font-semibold my-5">SPACE.</header>
      <Heading>Create a post</Heading>
      <Field>
        <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
        <FieldDescription>Enter your message below.</FieldDescription>
        <Textarea id="textarea-message" placeholder="Type your message here." />
      </Field>
    </section>
  );
}
