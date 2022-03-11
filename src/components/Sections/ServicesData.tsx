import { ReactComponent as ZoomIcon } from "../../assets/icons/lupa.svg";
import { ReactComponent as BottleIcon } from "../../assets/icons/frasco.svg";
import { ReactComponent as IdCardIcon } from "../../assets/icons/card.svg";
import { ReactComponent as ExamIcon } from "../../assets/icons/card2.svg";
import { ReactComponent as BagIcon } from "../../assets/icons/maleta.svg";
import { ReactComponent as HealthIcon } from "../../assets/icons/card3.svg";

import styles from '../../styles/services.module.scss';

export const servicesData = [
  {
    id: 0,
    title: "Search doctor",
    description:
      "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    icon: <ZoomIcon />,
  },
  {
    id: 1,
    title: "Online pharmacy",
    description:
      "Buy  your medicines with our mobile application with a simple delivery system",
    icon: <BottleIcon className={styles.bottleIcon}/>,
  },
  {
    id: 2,
    title: "Consultation",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
    icon: <IdCardIcon />,
  },
  {
    id: 3,
    title: "Details info",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
    icon: <ExamIcon />,
  },
  {
    id: 4,
    title: "Emergency care",
    description:
      "You can get 24/7 urgent care for yourself or your children and your lovely family",
    icon: <BagIcon />,
  },
  {
    id: 5,
    title: "Tracking",
    description: "Track and save your medical history and health data ",
    icon: <HealthIcon />,
  },
];
