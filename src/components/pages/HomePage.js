import "./HomePage.css"
import ProjectBox from "../layouts/ProjectBox"
import AboutMe from "../pages/AboutPage"
import Skills from "../pages/EducationPage"
import ContactForm from "../pages/ContactPage"

export default function Home() {
    return (
        <div className="main">
            <div className="about-section" id="about">
                <AboutMe></AboutMe>
            </div>
            <div className="skills" id="skills">
                <Skills></Skills>
            </div>
            <div className="projects" id="projects">
                <p>My Projects</p>
                <div class="project-grid">
                    <li><ProjectBox className="box"></ProjectBox></li>
                    <li><ProjectBox className="box"></ProjectBox></li>
                    <li><ProjectBox className="box"></ProjectBox></li>
                    <li><ProjectBox className="box"></ProjectBox></li>
                </div>
            </div>
            <div className="contact" id="contact">
                <ContactForm></ContactForm>
            </div>
        </div>
    );
}