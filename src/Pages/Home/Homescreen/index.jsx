import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import Navbar from "../Navbar";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home(){
    return(
        <>
            {/* <Navbar/> */}
            <HeroSection/>
            <MySkills/>
            <AboutMe/>
            <MyPortfolio/>
            <Testimonial/>
            <ContactMe/>
            <Footer/>
        </>
    )
}