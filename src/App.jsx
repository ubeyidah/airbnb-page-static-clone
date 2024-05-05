import Header from "./component/Header";
import Hero from "./component/Hero.jsx";
import Card from "./component/Card.jsx";
import datas from "./data.js";
import "./index.css";

export default function App() {
  const cards = datas.map((data) => {
    return <Card {...data} key={data.id} />;
  });

  return (
    <>
      <Header />
      <Hero />
      <section className="cards-list">{cards}</section>
    </>
  );
}
