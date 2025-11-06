export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content-box">
                <div className="hero--section-content">
                    <p className="section--title">Hey, I am Nurasyl</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Backend</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sit.</p>
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi! Atque quibusdam omnis optio.

                </div>
                <button className="btn btn--primary">Get In Touch</button>

            </div>

            <div className="hero--section--image">
                <img src="./app/public/img/face.jpeg" alt="my photo" className="img"/>
            </div>
        </section>
    );
}