export interface Props {
  Dummy: string;
}

export default function WorkComponent(prop: Props) {
  return (
    <section
      id="work"
      class="grid grid-cols-1 md:grid-cols-2 bg-purple-900 justify-items-center"
    >
      <div class="md:col-span-2 mt-8">
        <h1 class="text-white text-2xl font-extrabold">
          Experiências Profissionais
        </h1>
      </div>
      <div class="mt-8">
        <h2 class="text-white">UFC Campus Quixadá</h2>
      </div>
      <div class="mt-8">
        <h2 class="text-white">
          Descrição
        </h2>
      </div>
    </section>
  );
}
