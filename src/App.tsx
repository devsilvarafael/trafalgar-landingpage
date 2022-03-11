import React from "react";
import { Button } from "./components/Commons/Button";
import { Heading } from "./components/Commons/Heading";
import { Header } from "./components/Sections/Header";
import { Services } from "./components/Sections/Services";

import styles from "./styles/app.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Heading
        title="Virtual healthcare for you"
        description="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone"
      />
      <Services />
    </div>
  );
}

export default App;
