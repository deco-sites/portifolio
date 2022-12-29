export interface Props {
  dummy: string;
}
export default function MenuComponent(props: Props) {
  return (
    <nav
      id="top-menu"
      class="fixed bottom-0 top-0 w-full  bg-gray-900  h-20 font-bold flex justify-end "
    >
      <span class="ml-4 mr-4 text-white h-full flex content-center border-white hover:border-b-4">
        <a href="#intro" class="mt-auto mb-auto text-sm">INICIO</a>
      </span>
      <span class="ml-4 mr-4 text-white h-full flex content-center border-white hover:border-b-4">
        <a href="#work" class="mt-auto mb-auto text-sm">EXPERIÊNCIA</a>
      </span>
      <span class="ml-4 mr-4 text-white h-full flex content-center border-white hover:border-b-4">
        <a href="#projects" class="mt-auto mb-auto text-sm">PROJETOS</a>
      </span>
      <span class="ml-4 mr-4 text-white h-full flex content-center border-white hover:border-b-4">
        <a href="#" class="mt-auto mb-auto text-sm">CONTATO</a>
      </span>
    </nav>
  );
}
