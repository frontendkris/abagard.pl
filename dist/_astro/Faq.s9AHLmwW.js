import{r as l}from"./index.LFf77hJu.js";var p={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z=l,y=Symbol.for("react.element"),m=Symbol.for("react.fragment"),w=Object.prototype.hasOwnProperty,u=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function d(n,e,t){var i,a={},r=null,s=null;t!==void 0&&(r=""+t),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)w.call(e,i)&&!j.hasOwnProperty(i)&&(a[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)a[i]===void 0&&(a[i]=e[i]);return{$$typeof:y,type:n,key:r,ref:s,props:a,_owner:u.current}}c.Fragment=m;c.jsx=d;c.jsxs=d;p.exports=c;var o=p.exports;function k(n){return o.jsx("div",{className:`mt-6 pt-2 relative mx-auto text-gray-600 ${n.className}`,children:o.jsx("input",{className:"input input-bordered w-full",type:"search",name:"search",placeholder:n.placeholder?n.placeholder:"Szukaj",onChange:e=>n.setSearch(e.target.value)})})}function x(n){const[e,t]=l.useState(""),i=[{q:"Jak mogę się skontaktować?",a:"Najszybciej odpowiadam na WhatsApp i SMS. Państwo piszą o co chodzi, ja oddzwaniam w przerwie lub po wyjściu z pracy. Telefony odbieram wyłącznie w godzinach od 9:00 do 16:00 i jest to dla mnie ostateczność, natomiast odpisać mogę o każdej porze dnia.",pin:!0},{q:"Gdzie pan pracuje i co pan robi?",a:"Przyjmuję zlecenia na terenie Poznania i okolic. Zajmuję się przede wszystkim montażem płytek wielkoformatowych, lecz robię też całe lokale.",pin:!0},{q:"Czy robi pan tylko płytki wielkoformatowe?",a:"<strong>Robię całą łazienkę na gotowo.</strong> Robię instalacje wodno-kanalizacyjne, elektrykę, prace budowlane, prace malarskie, biały montaż i montaż drzwi. Wykonuję pracę do każdego wnętrza.",pin:!0},{q:"Czy projektujecie wnętrza?",a:"Projektujemy. Mam architekta, którego mogę polecić lub włączyć go do zlecenia. Dotyczy to również projektanta wnętrz.",pin:!0},{q:"Jak daleko dojeżdża pan do klienta?",a:"Do 30km od Poznania."},{q:"W jakich godzinach odbywa się praca?",a:"Od 8:00 do 17:00."},{q:"Jakie są korzyści z montażu płytek wielkoformatowych?",a:"Płytki wielkoformatowe stają się coraz bardziej popularne w branży projektowej. Są świetnym sposobem na dodanie artystycznego akcentu do każdej przestrzeni i uczynienie jej bardziej atrakcyjną wizualnie.<br><br>Są opłacalne, można je montować w ułamku czasu, jaki zajęłoby kładzenie zwykłych płytek, zapewniają lepszą izolację i są łatwiejsze w utrzymaniu."},{q:"Powinienem kupić materiały do pracy, czy zrobi to płytkarz?",a:"Kupuję i dostarczam klej, fugę, sylikony oraz inne materiały budowlane potrzebne do remontu. Zleceniodawca kupuje płytki, krany, kabiny, odpływy oraz pozostały sprzęt będący wyposażeniem."},{q:"Praca jest wykonywana przez pana osobiście, czy zleca ją pan mniej doświadczonym pracownikom?",a:"Pracuję osobiście nad zleconą pracą."},{q:"Czy wykonuje pan izolacje?",a:"Oczywiście! Wykonuję izolacje przeciwwilgociowe i przeciwwodne."},{q:"Co ze śmieciami?",a:"Zleceniodawca powinien wynająć kontener przy remoncie wymagającym kucia i wywozu gruzu."},{q:"Jaki jest koszt pracy?",a:"Wycena jest zawsze indywidualna."},{q:"Czy zabezpiecza pan powierzchnie?",a:"Wszystko zabezpieczam przed zniszczeniem i pyłem."},{q:"Czy doradza pan odnośnie pracy, materiałów i sprzętu?",a:"Doradzam. Pomogę w obliczeniach zapotrzebowania na płytki i inne materiały. Doradzę w sprawie materiałów i sprzętów, aby wybór był najlepszy i aby nie przepłacić."}];return o.jsx("div",{id:"faq",className:"bg-white text-black lg:my-12",children:o.jsx("div",{className:"py-16 lg:pb-20 text-black",children:o.jsx("div",{className:"container mx-auto max-w-6xl",children:o.jsxs("div",{className:"space-y-8 gap-4",children:[o.jsxs("div",{className:"flex flex-col lg:flex-row lg:justify-between lg:items-center break-inside-avoid-column lg:text-center lg:mx-auto",children:[o.jsx("h2",{className:"text-2xl lg:text-5xl leading-none mb-0 font-bold m-0",children:"Pytania i odpowiedzi"}),o.jsx(k,{setSearch:t,value:e,className:"lg:max-w-xs sm:m-0"})]}),i.filter(a=>a.q.toLowerCase().includes(e.toLowerCase())||a.a.toLowerCase().includes(e.toLowerCase())).sort((a,r)=>!!a.pin>!!r.pin).map((a,r)=>o.jsxs("div",{className:"collapse collapse-arrow bg-gray-200 shadow-md",children:[o.jsx("input",{type:"radio",name:"accordion",defaultChecked:r===0}),o.jsx("div",{className:"collapse-title text-xl font-medium",dangerouslySetInnerHTML:{__html:a.q}}),o.jsx("div",{className:"collapse-content",dangerouslySetInnerHTML:{__html:a.a}})]},`faq-${a.q}`))]})})})})}export{x as default};