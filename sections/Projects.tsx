import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";
export interface Project {
  title: string;
  url: string;
  description: string;
}

export interface Props {
  projects: Project[];
}
export default function ProjectsComponent(props: Props) {
  return (
    <section id="projects" class="w-full pb-20 bg-indigo-900 ">
      <div class="grid grid-cols-1 md:grid-cols-2 w-3/4 mr-auto ml-auto">
        <div class="md:col-span-2">
          <h1 class="text-white text-2xl font-extrabold mt-8 text-center">
            Projetos
          </h1>
        </div>
        {props.projects.map((item, index) => (
          <>
            <div
              class={index % 2 == 0
                ? "md:col-start-2 flex flex-row justify-center mt-4"
                : "md:col-start-1 flex flex-row justify-center mt-4"}
            >
              <div >
                <h1 class="text-white w-full text-lg text-center font-extrabold mt-8 ">
                  <a href={item.url}>{item.title}</a>
                </h1>
                <p class="text-sm text-white text-justify">{item.description}</p>
              </div>
            </div>
            <div></div>
          </>
        ))}
      </div>
    </section>
  );
}
