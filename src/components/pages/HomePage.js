import "./HomePage.css"
import ProjectBox from "../layouts/ProjectBox"
import AboutMe from "../pages/AboutPage"
import Skills from "../pages/EducationPage"

export default function Home() {
    return (
        <div>
            <div>
                <AboutMe></AboutMe>
            </div>
            <div class="skills">
                <Skills></Skills>
            </div>
            <div class="projects">
                <p>My Projects</p>
                <div class="project-grid">
                    <li><ProjectBox className="box"></ProjectBox></li>
                    <li><ProjectBox className="box"></ProjectBox></li>
                    <li><ProjectBox className="box"></ProjectBox></li>
                    <li><ProjectBox className="box"></ProjectBox></li>
                </div>
            </div>
        </div>
    );
}