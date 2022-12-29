import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Contact {
  icon: LiveImage;
  title: string;
  link: string;
  subtitle: string;
}
export interface Props {
  contacts: Contact[];
}
export default function ProjectsComponent(props: Props) {
  return (
    <section
      id="contact"
      class="grid grid-cols-2 justify-items-center bg-gray-50 pb-10"
    >
      <h1 class="text-gray-900  text-2xl font-extrabold mt-8 text-center col-span-2">
        Contato
      </h1>
      {props.contacts.map((item) => (
        <div class="mt-8">
          <a href={item.link}>
            <img
              class="mr-auto ml-auto w-24"
              src={item.icon}
              alt={item.title}
            />
          </a>
          <h3 class="text-lg text-gray-900 text-center">{item.title}</h3>
        </div>
      ))}
    </section>
  );
}
