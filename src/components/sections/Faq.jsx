import { useState } from "react";
import contact from "../../libs/contact.json";
import SearchBar from "../partials/SearchBar.jsx";

export default function Faq(params) {
  const [search, setSearch] = useState("");
  const questions = [
    {
      q: "Jak mogę się skontaktować?",
      a: `Najszybciej odpowiadam na WhatsApp i SMS. Państwo piszą o co chodzi, ja oddzwaniam w przerwie lub po wyjściu z pracy. Telefony odbieram wyłącznie w godzinach od 9:00 do 16:00 i jest to dla mnie ostateczność, natomiast odpisać mogę o każdej porze dnia.<br><a href="tel:${contact.phone}">${contact.phone}</a><br><a href="mailto:${contact.email}">${contact.email}</a>`,
      pin: true,
    },
    {
      q: "Gdzie pan pracuje i co pan robi?",
      a: "Przyjmuję zlecenia na terenie Poznania i okolic. Zajmuję się przede wszystkim montażem płytek wielkoformatowych, lecz robię też całe lokale.",
      pin: true,
    },
    {
      q: "Czy robi pan tylko płytki wielkoformatowe?",
      a: "<strong>Robię całą łazienkę na gotowo.</strong> Robię instalacje wodno-kanalizacyjne, elektrykę, prace budowlane, prace malarskie, biały montaż i montaż drzwi. Wykonuję pracę do każdego wnętrza.",
      pin: true,
    },
    {
      q: "Czy projektujecie wnętrza?",
      a: "Projektujemy. Mam architekta, którego mogę polecić lub włączyć go do zlecenia. Dotyczy to również projektanta wnętrz.",
      pin: true,
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
      q: "Czy doradza pan odnośnie pracy, materiałów i sprzętu?",
      a: "Doradzam. Pomogę w obliczeniach zapotrzebowania na płytki i inne materiały. Doradzę w sprawie materiałów i sprzętów, aby wybór był najlepszy i aby nie przepłacić.",
    }
  ];

  return (
    <div id="faq" className="bg-gray-100 text-black">
      <div class="py-16 lg:pb-20 text-black">
        <div className="container mx-auto">
            <div className="space-y-8 md:columns-2 xl:columns-3 gap-8">
              <div class="block break-inside-avoid-column">
                <h2 className="text-3xl leading-none sm:text-4xl mb-0 font-bold">
                  Pytania i odpowiedzi
                </h2>
                <SearchBar setSearch={setSearch} value={search} placeholder={`Filtruj przez tekst`} className="mt-2 mb-4" />
              </div>
              {questions.filter(el => el.q.toLowerCase().includes(search.toLowerCase()) || el.a.toLowerCase().includes(search.toLowerCase())).sort((a, b) => !!a.pin > !!b.pin).map((el, index) => {
                return (
                  <div key={`faq-${el.q}`} className="block break-inside-avoid-column bg-white shadow-md p-6">
                    <p className="mb-4 text-xl font-bold">
                      
                      {/* {
                        !!el.pin &&
                        <svg className="w-7 h-7 text-accent inline-block icon-bold mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clipRule="evenodd" />
                        </svg>
                      } */}

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
