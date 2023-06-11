import "./HomePage.css"
import BasicBox from "../layouts/ProjectBox"

export default function Home() {
    return (
            <div class="start">
                <p>My Work</p>
                <div class="project-grid">
                    <li><BasicBox className="box"></BasicBox></li>
                    <li><BasicBox className="box"></BasicBox></li>
                    <li><BasicBox className="box"></BasicBox></li>
                    <li><BasicBox className="box"></BasicBox></li>
                </div>
            </div>
    );
}