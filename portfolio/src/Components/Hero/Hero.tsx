import "./Hero.css";
import coffeeMugMan from "../../../public/man-with-coffee-mug.svg";
export function Hero() {
  return (
    <div className='hero'>
      <h1 className='hero-text'>
        Frontend engineer that drinks way too much coffee
      </h1>
      <img className='hero-image' src={coffeeMugMan}></img>
    </div>
  );
}
