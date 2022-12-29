import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";
export interface Props {
  descricao: string;
  status: string;
  nome: string;
  profile: LiveImage;
}
export default function IntroComponent(props: Props) {
  return (
    <section
      id="intro"
      class="grid grid-cols-1 md:grid-cols-2 justify-items-center bg-blue-900 mt-20 pb-10"
    >        
    <div class="flex flex-col-reverse md:flex-col justify-center">
      <img src={props.profile} class="w-52 h-52 mr-auto ml-auto rounded-full border-white border-4"/>
      <div>
        <h2 class="text-3xl mt-4 text-white font-bold">{props.nome}</h2>
        <h3 class="mb-4 text-white ">{props.status}</h3>
      </div>
    </div>
      <div id="text-area" class="w-3/4">
        <div class="flex flex-row justify-center">
          <h1 class="inline font-bold text-3xl mt-8 text-white">
            Apresentação
          </h1>
        </div>
        <div class="flex flex-row justify-center">
          <p class="inline mt-4 text-white md:text-xl text-justify  font-mono ">
            {props.descricao}
          </p>
        </div>
        <div class="flex flex-row justify-start">
          <h2 class="text-base text-white font-bold mt-4 ">
            Principais Habilidades
          </h2>
        </div>
        <hr></hr>
        <div class="grid grid-cols-2 justify-items-center mt-4 ">
          <span class="text-white text-sm font-bold mb-4">C++</span>
          <span class="text-white text-sm font-bold mb-4">C</span>
          <span class="text-white text-sm font-bold mb-4">Python</span>
          <span class="text-white text-sm font-bold mb-4">Embarcados</span>
        </div>
        <div>
          <div class="flex flex-row justify-start">
            <h2 class="text-base text-white font-bold mt-4">
              Também já utilzei
            </h2>
          </div>
          <hr></hr>
        </div>
        <div class="flex flex-row justify-around mt-4">
          <span class="text-white text-sm font-bold">Html/CSS</span>
          <span class="text-white text-sm font-bold">Java/Kotlin</span>
        </div>
      </div>
    </section>
  );
}
