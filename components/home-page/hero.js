import classes from "./hero.module.css";
import Image from "next/image";
function Hero(params) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/man.png"}
          alt="A hero image will show"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Raman</h1>
      <p>
        I blog about web development - especially frontend framework like React,
        Next etc,.
      </p>
    </section>
  );
}
export default Hero;
