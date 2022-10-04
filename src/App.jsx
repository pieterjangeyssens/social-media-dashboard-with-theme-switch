import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import TotalCard from "./components/TotalCard";
import DetailsCard from "./components/DetailsCard";

function App() {
  let defaultTheme = "light";
  if (window.matchMedia("prefers-color-scheme: dark").matches)
    defaultTheme = "dark";

  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    document.body.className = theme;
  });

  const toggleTheme = () => {
    if (theme === "light" ? setTheme("dark") : setTheme("light"));
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} default={defaultTheme}></Header>
      <main className="container">
        <section className="totals">
          <TotalCard></TotalCard>
          <TotalCard></TotalCard>
          <TotalCard></TotalCard>
          <TotalCard></TotalCard>
        </section>
        <section className="details">
          <h2>Overview - Today</h2>
          <DetailsCard></DetailsCard>
          <DetailsCard></DetailsCard>
          <DetailsCard></DetailsCard>
          <DetailsCard></DetailsCard>
          <DetailsCard></DetailsCard>
          <DetailsCard></DetailsCard>
          <DetailsCard></DetailsCard>
          <DetailsCard></DetailsCard>
        </section>
      </main>
    </>
  );
}

export default App;
