export interface Props {
  tmp: string;
}

export default function FooterComponent(props: Props) {
  return (
    <footer
      id="footer"
      class="w-full bg-gray-900 grid grid-cols-1 md:grid-cols-2"
    >
      <div class="mt-4 mb-10">
        <p class="text-white text-[12px] mt-4 font-mono ">
          Icons from flaticon
        </p>
        <ul>
          <li>
            <a
              class="text-white text-[10px] font-mono "
              href="https://www.flaticon.com/br/icones-gratis/enviar"
              title="enviar ícones"
            >
              Enviar ícones criados por Freepik - Flaticon
            </a>
          </li>
          <li class="text-white text-[10px] font-mono ">
            <a
              href="https://www.flaticon.com/free-icons/telegram"
              title="telegram icons"
            >
              Telegram icons created by Pixel perfect - Flaticon
            </a>
          </li>
          <li class="text-white text-[10px] font-mono ">
            <a
              href="https://www.flaticon.com/free-icons/linkedin"
              title="linkedin icons"
            >
              Linkedin icons created by Freepik - Flaticon
            </a>
          </li>
          <li class="text-white text-[10px] font-mono ">
            <a
              href="https://www.flaticon.com/free-icons/github"
              title="github icons"
            >
              Github icons created by pictogramer - Flaticon
            </a>
          </li>
          <li class="text-white text-[10px] font-mono ">
            <a href="https://www.flaticon.com/br/icones-gratis/cv" title="cv ícones">Cv ícones criados por Freepik - Flaticon</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}