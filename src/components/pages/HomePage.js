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
            <div class="about-section hidden" id="about">
                <AboutMe></AboutMe>
            </div>
            <div class="skills hidden" id="skills">
                <Skills></Skills>
            </div>
            <div class="projects hidden" id="projects">
                <h1 class="project-title">My Work</h1>
                <p className="project-p">Projects I have developed and maintained.</p>
                <div class="project-grid">
                    <li><ProjectBox className="box"></ProjectBox></li>
                </div>
            </div>
            <div class="contact hidden" id="contact">
                <ContactForm></ContactForm>
            </div>
        </container>
    );
}