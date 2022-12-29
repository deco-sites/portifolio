import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";
export interface Props {
  descricao: string;
  status: string;
  nome: string;
  profile: LiveImage;
}
export default function IntroComponent(props: Props) {
  return (
    <div
      id="intro"
      class="mt-20 w-full bg-blue-900 flex flex-col md:flex-row justify-around pb-10">
      <div id="pic-area" class=" flex flex-row mt-5 md:flex-col justify-center">
        <div class="flex flex-col-reverse md:flex-col">
          <img src={props.profile} class="w-52 h-52 mr-auto ml-auto rounded-full border-white border-4"/>
          <div>
            <h2 class="text-3xl mt-4 text-white font-bold">{props.nome}</h2>
            <h3 class="mb-4 text-white ">{props.status}</h3>
          </div>
        </div>
      </div>
      <div id="text-area" class="w-full md:w-2/4">
        <div class="flex flex-row justify-center">
          <h1 class="inline font-bold text-3xl mt-8 text-white">
            Apresentação
          </h1>
        </div>
        <div class="flex flex-row justify-center">
          <p class="inline mt-4 w-3/4 md:w-full text-white md:text-xl text-justify  font-mono ">
            {props.descricao}
          </p>
        </div>
        <div class="flex flex-row  w-3/4 justify-start">
          <h2 class="text-lg text-white font-bold mt-4">Principais Habilidades</h2>
        </div>
        <hr></hr>
        <div class="flex flex-row justify-around mt-4">
            <span class="text-white font-bold">C++</span>
            <span class="text-white font-bold">C</span>
            <span class="text-white font-bold">Python</span>
            <span class="text-white font-bold">Embarcados</span>
        </div>
        <div>
        <div class="flex flex-row justify-start">
          <h2 class="text-lg text-white font-bold mt-4">Também já utilzei</h2>
        </div>
        <hr></hr>
        </div>
        <div class="flex flex-row justify-around mt-4">
            <span class="text-white font-bold">Html/CSS</span>
            <span class="text-white font-bold">Java/Kotlin</span>
        </div>
      </div>
    </div>
  );
}
