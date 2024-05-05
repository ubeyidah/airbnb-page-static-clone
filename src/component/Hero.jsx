import bg from "../../public/assets/bg.png";
import "./hero.css";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <img src={bg} />
        <h1>Online Expreriences</h1>
        <p>
          Hoin unique interactive activities led by one-of-a-kind hosts-all
          without leaving home
        </p>
      </div>
    </section>
  );
}
