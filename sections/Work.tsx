export interface WorkItem {
  title: string;
  subtitle: string;
  itens: string[];
}
export interface Work {
  title: string;
  itens: WorkItem[];
}

export interface Props {
  Works: Work[];
}

export default function WorkComponent(props: Props) {
  return (
    <section
      id="work"
      class="grid grid-cols-1 md:grid-cols-2 bg-purple-900 justify-items-center pb-20"
    >
      <div class="md:col-span-2 mt-8">
        <h1 class="text-white text-2xl font-extrabold">
          Experiências Profissionais
        </h1>
      </div>
      {props.Works.map((item, i) => (
        <>
          <div class="mt-8">
            <h2 class="text-white text-xl text-2xl font-extrabold">
              {item.title}
            </h2>
          </div>
          <div class="w-3/4 ">
            {item.itens.map((item, j) => {
              return (
                <div class="mt-8" >
                  <h2 class="text-white text-xl md:text-2xl font-extrabold ">
                    {item.title}
                  </h2>
                  <h3 class="text-white text-xs md:text-sm">{item.subtitle}</h3>
                  <details class="text-white group">
                    <ul class="mt-4 list-disc font-mono" id={`work-${i}-${j}`}>
                      {item.itens.map((item) => (
                        <li class="text-white mt-4 text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              );
            })}
          </div>
        </>
      ))}
    </section>
  );
}
