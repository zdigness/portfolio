import "./EducationPage.css"
import python from '../img/python.svg'
import css from '../img/CSS.3.svg'
import html from '../img/HTML5_logo_and_wordmark.svg'
import js from '../img/js.svg'
import react from '../img/react.svg'

export default function EducationPage() {
    return (
      <div className="main">
        <div className="text">
        <h1>Technical Skills</h1>
        </div>
        <div className="education">
          <div className="skill-box">
            <li><h1>Frontend</h1></li>
            <li><img class="skill-icon" src={html} alt="Icon"></img></li>
            <li><img class="skill-icon" src={css} alt="Icon"></img></li>
            <li><img class="skill-icon" src={react} alt="Icon"></img></li>
          </div>
          <div className="skill-box">
            <li><h1>Backend</h1></li>
            <li><img class="python-icon" src={python} alt="Icon"></img></li>
            <li><img class="skill-icon" src={js} alt="Icon"></img></li>
          </div>
          <div className="skill-box">
            <li><h1>Databases</h1></li>
          </div>
        </div>
      </div>
    );
  }