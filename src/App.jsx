import React from "react";
import styles from "./styles";
import { Route, Routes } from "react-router-dom";

import {
  Navbar,
  HomePage,
  AboutPage,
  PortfolioPage,
  ResumePage,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/resume" element={<ResumePage />} />
    </Routes>
  </div>
);

export default App;
