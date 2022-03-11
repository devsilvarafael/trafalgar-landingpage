import React from "react";
import { Button } from "./components/Commons/Button";
import { Heading } from "./components/Commons/Heading";
import { Header } from "./components/Sections/Header";

function App() {
  return (
    <div>
      <Header />
      <Heading
        title="Virtual healthcare for you"
        description="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone"
      />
    </div>
  );
}

export default App;
