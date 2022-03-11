import zoomIcon from "../../assets/icons/lupa.svg";
import bottleIcon from "../../assets/icons/frasco.svg";
import bagIcon from "../../assets/icons/maleta.svg";
import idIcon from "../../assets/icons/card.svg";
import examIcon from "../../assets/icons/card2.svg";
import healthIcon from "../../assets/icons/card3.svg";

export const servicesData = [
  {
    id: 0,
    title: "Search doctor",
    description:
      "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    icon: String({ zoomIcon }),
  },
  {
    id: 1,
    title: "Online pharmacy",
    description:
      "Buy  your medicines with our mobile application with a simple delivery system",
    icon: String({ bottleIcon }),
  },
  {
    id: 2,
    title: "Consultation",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
    icon: String({ idIcon }),
  },
  {
    id: 3,
    title: "Details info",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
    icon: String({ examIcon }),
  },
  {
    id: 4,
    title: "Emergency care",
    description:
      "You can get 24/7 urgent care for yourself or your children and your lovely family",
    icon: String({ bagIcon }),
  },
  {
    id: 5,
    title: "Tracking",
    description:
      "Track and save your medical history and health data ",
    icon: String({ healthIcon }),
  },
  
];
