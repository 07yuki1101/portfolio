import icon from "../assets/icon.jpeg"
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <h1>Yuki Suzuki</h1>
        <h2>Frontend Developer</h2>
        <p>
          独学でプログラミングを学び<br />
          React / Firebase / Firestore を使ってWebアプリを開発しています
        </p>
      </div>
      <div className="hero-img">
        <img src={icon} alt="Yuki Suzuki" />
      </div>
    </section>
  )
}
export default Hero;