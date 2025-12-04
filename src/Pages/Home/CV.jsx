export default function CV() {
  return (
    <section className="cv--section" id="cv">
      <div className="cv--header">
          <p className="sub--title">Resume</p>
          <h2 className="section--heading">My CV</h2>
      </div>
      <div className="cv--container">
        <div className="cv--image">
            <img src="./img/CV-5.png" alt="My CV Preview" />
        </div>
        <div className="cv--content">
          <p className="text-lg">
            Here is my CV, you can download it
          </p>
          <a href="/pdf/CV-5.pdf" download="CV-Nurasyl.pdf">
            <button className="btn btn--outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}