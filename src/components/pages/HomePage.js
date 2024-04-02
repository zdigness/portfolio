import "../css/HomePage.css"

import ProjectBox from "../layouts/projects"
import AboutMe from "../layouts/about"
import Skills from "../layouts/skills"
import ContactForm from "../layouts/contact"
import { useEffect } from "react"

export default function Home() {
    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
                entry.target.classList.add('hidden');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el))
})

    return (
        <container class="main">
            <div class="about-section" id="about">
                <AboutMe></AboutMe>
            </div>
            <div class="skills" id="skills">
                <div className="skills-o"></div>
                <Skills></Skills>
            </div>
            <div class="projects" id="projects">
                <h1 class="project-title">Projects I have developed and maintained.</h1>
                <div class="project-grid">
                    <li><ProjectBox className="box"></ProjectBox></li>
                </div>
            </div>
            <div class="contact" id="contact">
                <ContactForm></ContactForm>
            </div>
        </container>
    );
}