import { Customers } from "./components/Sections/Customers";
import { DownloadApps } from "./components/Sections/DownloadApps";
import { Footer } from "./components/Sections/Footer";
import { Header } from "./components/Sections/Header";
import { LatestArticles } from "./components/Sections/LatestArticles";
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
      <Customers />
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default App;
  