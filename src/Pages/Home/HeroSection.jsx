export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I am Nurasyl</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Backend</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <ul className="hero--section--description" style={{listStyle: 'none', padding: 0, margin: 0}}>
                        <li>1k+ registered users, 20k+ unique visitors</li>
                        <li>#11 ProductHunt Feature</li>
                        <li>~6 million media reach on Fluensa</li>
                        <li>2+ years of programming experience</li>
                    </ul>
                </div>
                <button className="btn btn--primary">Get In Touch</button>

            </div>

            <div className="hero--section--image">
                <img src="./img/me-professional-pic.png" alt="my photo" className="img"/>
            </div>
        </section>
    );
}