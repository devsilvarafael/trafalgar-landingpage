
import { Heading } from "./components/Commons/Heading";
import { DownloadApps } from "./components/Sections/DownloadApps";
import { Header } from "./components/Sections/Header";
import { Providers } from "./components/Sections/Providers";
import { Services } from "./components/Sections/Services";
import { VirtualHealth } from "./components/Sections/VirtualHealth";

import styles from "./styles/app.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <VirtualHealth />
      <Services />
      <Providers />
      <DownloadApps />
    </div>
  );
}

export default App;
