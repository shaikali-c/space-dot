import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
export default function Profile() {
  return (
    <section className="p-12 px-9 flex justify-center w-screen flex-col items-center pb-30">
      <header>
        <Heading className={"text-2xl border-b border-sky-500 pb-1 mb-6"}>
          Profile
        </Heading>
      </header>
      <FieldGroup className={"w-full max-w-xl"}>
        <FieldSet>
          <FieldLegend>Customize your profile</FieldLegend>
          <FieldDescription>
            Every data is secured and encrypted.
          </FieldDescription>
        </FieldSet>
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input id="username" type="text" placeholder="Shaik Ali" />
          <FieldDescription>
            Choose a unique username for your account.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="block-end-textarea">Your Bio</FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              maxLength={280}
              id="block-end-textarea"
              placeholder="I love Black Holes and Nebula"
            />
            <InputGroupAddon align="block-end">
              <InputGroupText>280</InputGroupText>
              <InputGroupButton variant="default" size="sm" className="ml-auto">
                Save
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>
            Footer positioned below the textarea.
          </FieldDescription>
        </Field>
        <FieldSeparator />
        <FieldSet>
          <FieldLegend>Preferences</FieldLegend>
          <FieldDescription>
            This details will help us to recommend you better posts.
          </FieldDescription>
        </FieldSet>
        <Field>
          <FieldLabel>Interested In</FieldLabel>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your interest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="astronomy">Astronomy</SelectItem>
              <SelectItem value="astrophysics">Astrophysics</SelectItem>
              <SelectItem value="cosmology">Cosmology</SelectItem>
              <SelectItem value="rocketry">Rocketry</SelectItem>
              <SelectItem value="space-engineering">
                Space engineering
              </SelectItem>
              <SelectItem value="exo-planets">Exo Planets</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="switch-focus-mode">Advanced Mode</FieldLabel>
            <FieldDescription>
              Enables advanced astrophysics models and special space event data.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-focus-mode" />
        </Field>
        <Field>
          <Button variant="default">Save profile</Button>
        </Field>
      </FieldGroup>
    </section>
  );
}
