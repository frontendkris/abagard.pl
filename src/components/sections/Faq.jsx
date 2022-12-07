import { useState } from "react";
import contact from "../../libs/contact.json";
import SearchBar from "../partials/SearchBar.jsx";

export default function Faq(params) {
  const [search, setSearch] = useState("");
  const questions = [
    {
      q: "Gdzie pan pracuje i co pan robi?",
      a: "Przyjmuję zlecenia na terenie Poznania i okolic. Zajmuję się przede wszystkim montażem płytek wielkoformatowych, lecz robię też całe lokale.",
    },
    {
      q: "Jak daleko dojeżdża pan do klienta?",
      a: "Do 25km od Poznania",
    },
    {
      q: "W jakich godzinach odbywa się praca?",
      a: "Od 8:00 do 17:00",
    },
    {
      q: "Jakie są korzyści z montażu płytek wielkoformatowych?",
      a: "Płytki wielkoformatowe stają się coraz bardziej popularne w branży projektowej. Są świetnym sposobem na dodanie artystycznego akcentu do każdej przestrzeni i uczynienie jej bardziej atrakcyjną wizualnie.<br><br>Są opłacalne, można je montować w ułamku czasu, jaki zajęłoby kładzenie zwykłych płytek, zapewniają lepszą izolację i są łatwiejsze w utrzymaniu.",
    },
    {
      q: "Powinienem kupić materiały do pracy, czy zrobi to płytkarz?",
      a: "Kupuję i dostarczam klej, fugę, sylikony oraz inne materiały budowlane potrzebne do remontu. Zleceniodawca kupuje płytki, krany, kabiny, odpływy oraz pozostały sprzęt będący wyposażeniem.",
    },
    {
      q: "Praca jest wykonywana przez pana osobiście, czy zleca ją pan mniej doświadczonym pracownikom?",
      a: "Pracuję osobiście nad zleconą pracą",
    },
    {
      q: "Czy robi pan tylko płytki wielkoformatowe?",
      a: "<strong>Robię całą łazienkę na gotowo.</strong> Robię instalacje wodno-kanalizacyjne, elektrykę, prace budowlane, prace malarskie, biały montaż i montaż drzwi. Wykonuję pracę do każdego wnętrza.",
    },
    {
      q: "Czy wykonuje pan izolacje?",
      a: "Oczywiście! Wykonuję izolacje przeciwwilgociowe i przeciwwodne.",
    },
    {
      q: "Co ze śmieciami?",
      a: "Zleceniodawca powinien wynająć kontener przy remoncie wymagającym kucia i wywozu gruzu.",
    },
    {
      q: "Jaki jest koszt pracy?",
      a: "Wycena jest zawsze indywidualna.",
    },
    {
      q: "Czy zabezpiecza pan powierzchnie?",
      a: "Wszystko zabezpieczam przed zniszczeniem i pyłem.",
    },
    {
      q: "Jak mogę się skontaktować?",
      a: `Preferuję kontakt przede wszystkim WhatsApp, SMS, później email. Państwo piszą o co chodzi, ja oddzwaniam w przerwie lub po wyjściu z pracy. Telefony odbieram wyłącznie w godzinach od 9:00 do 16:00 i jest to dla mnie ostateczność.<br><a href="tel:${contact.phone}">${contact.phone}</a><br><a href="mailto:${contact.email}">${contact.email}</a>`,
    },
    {
      q: "Czy doradza pan odnośnie pracy, materiałów i sprzętu?",
      a: "Doradzam. Pomogę w obliczeniach zapotrzebowania na płytki i inne materiały. Doradzę w sprawie materiałów i sprzętów, aby wybór był najlepszy i aby nie przepłacić.",
    },
    {
      q: "Czy projektujecie wnętrza?",
      a: "Projektujemy. Mam architekta, którego mogę polecić lub włączyć go do zlecenia. Dotyczy to również projektanta wnętrz.",
    },
  ];

  return (
    <div id="faq" className="px-4 py-16 mx-auto max-w-6xl lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-4 text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto font-heading">
            Częste pytania i odpowiedzi
          </h2>
          <p>Prawdopodobnie jest tu odpowiedź na Twoje pytanie</p>
          <SearchBar setSearch={setSearch} value={search} />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1">
          <div className="space-y-8 md:columns-2 xl:columns-3">
            {questions.filter(el => el.q.toLowerCase().includes(search.toLowerCase()) || el.a.toLowerCase().includes(search.toLowerCase())).map((el, index) => {
              return (
                <div key={`faq-${index}`} className="block break-inside-avoid-column">
                  <p className="mb-4 text-xl font-bold">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-7 h-7 text-primary inline-block icon-bold"
                      astro-icon="tabler:arrow-down-right"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="icon-tabler"
                      >
                        <path d="m7 7 10 10M17 8v9H8" />
                      </g>
                    </svg>

                    <span
                      className=""
                      dangerouslySetInnerHTML={{__html: el.q}}
                    ></span>
                  </p>
                  <p
                    className="mb-2"
                    dangerouslySetInnerHTML={{__html: el.a}}
                  ></p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
