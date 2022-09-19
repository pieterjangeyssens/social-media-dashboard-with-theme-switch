import Header from "./components/Header";
import TotalCard from "./components/TotalCard";
import DetailsCard from "./components/DetailsCard";

function App() {
  return (
    <>
      <Header></Header>
      <main>
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
