export default function AboutMe(){
    return(
        <section id="AboutMe" className="about--section">
            <div className="about--section--image">
                <img src="./img/me-unprofessional-pic.png" alt="my photo" />
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title"></p>
                    <h1 className="skills--section--heading">About Me</h1>
                    <p>
                        Hi, I'm Nurasyl, an 18yo developer from Kazakhstan. I have deep knowledge in Python and FastAPI, and I'm also proficient in Java Spring and React.js. Currently, I'm studying at KBTU and have worked at KTIB and nFactorial Incubator, delivering projects like Fluensa and Memigma. I'm passionate about optimizing code and creating scalable solutions.
                    </p>
                </div>
            </div>
        </section>
    )
}