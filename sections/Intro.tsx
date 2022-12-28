export interface Props {
  descricao: string;
}
export default function IntroComponent(props: Props) {
  return (
    <div
      id="intro"
      class="mt-20 w-auto bg-blue-900 flex flex-col md:flex-row justify-center"
    >
      <div class="h-72 w-72">Pìcture</div>
      <div class="w-auto md:w-2/4">
        <div class="flex flex-row justify-center">
          <h1 class="inline font-bold text-3xl mt-4 text-white">
            Apresentação
          </h1>
        </div>
        <div class="flex flex-row justify-center">
          <p class="inline mt-4 w-3/4 md:w-auto text-white md:text-xl text-justify  font-mono ">
            Me chamo Francisco Thiago. Recentemente, conclui o curso de
            Engenharia de Computação na UFC Campus Quixadá, faltando apenas a
            colação de grau. Tenho prática em programação C e C++ voltada a
            ambientes Linux e a Sistemas Embarcados, além de outras linguagens
            como Python. Na graduação, tive prática com programação voltada a
            Sockets utilizando a linguagem C.
          </p>
        </div>
      </div>
    </div>
  );
}
