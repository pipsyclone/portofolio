import NavBar from "./components/navBar";
import Sosmed from "./components/sosmed";
import About from "./sections/about";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import Project from "./sections/project";

const App = () => {
    return (
        <>
            <NavBar /> 

            <section>
                <Hero />
            </section>

            <section data-aos="fade-up" id="about">
                <div className="section-title">About</div>
                <About />
            </section>
            <section data-aos="fade-up" id="project">
                <div className="section-title">Project</div>
                <Project />
            </section>
            <section data-aos="fade-up" id="contact">
                <div className="section-title">Contact</div>
                <Contact />
            </section>
            <section id="footer">
                <Footer />
            </section>

            <Sosmed />
        </>
    )
}

export default App;