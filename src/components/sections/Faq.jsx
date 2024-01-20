import { useState } from "react";
import contact from "../../libs/contact.json";
import SearchBar from "../partials/SearchBar.jsx";

export default function Faq(params) {
  const [search, setSearch] = useState("");
  const questions = [
    {
      q: "Jak mogę się skontaktować?",
      a: "Najszybciej odpowiadam na WhatsApp i SMS. Państwo piszą o co chodzi, ja oddzwaniam w przerwie lub po wyjściu z pracy. Telefony odbieram wyłącznie w godzinach od 9:00 do 16:00 i jest to dla mnie ostateczność, natomiast odpisać mogę o każdej porze dnia.",
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
      a: "Do 30km od Poznania.",
    },
    {
      q: "W jakich godzinach odbywa się praca?",
      a: "Od 8:00 do 17:00.",
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
      a: "Pracuję osobiście nad zleconą pracą.",
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
    <div id="faq" className="bg-white text-black lg:my-12">
      <div className="py-16 lg:pb-20 text-black">
        <div className="container mx-auto max-w-6xl">
            <div className="space-y-8 gap-4">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center break-inside-avoid-column lg:text-center lg:mx-auto">
                <h2 className="text-2xl lg:text-5xl leading-none mb-0 font-bold m-0">
                  Pytania i odpowiedzi
                </h2>
                <SearchBar setSearch={setSearch} value={search} className="lg:max-w-xs sm:m-0" />
              </div>
              {questions.filter(el => el.q.toLowerCase().includes(search.toLowerCase()) || el.a.toLowerCase().includes(search.toLowerCase())).sort((a, b) => !!a.pin > !!b.pin).map((el, index) => {
                return (
                  <div key={`faq-${el.q}`} className="collapse collapse-arrow bg-gray-200 shadow-md">
                    <input type="radio" name="accordion" defaultChecked={index === 0} /> 
                    <div className="collapse-title text-xl font-medium" dangerouslySetInnerHTML={{__html: el.q}}>
                    </div>
                    <div className="collapse-content" dangerouslySetInnerHTML={{__html: el.a}}> 
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
      </div>
    </div>
  );
}
