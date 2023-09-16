import "./EducationPage.css"
import python from '../img/python-png.png'
import css from '../img/css.png'
import html from '../img/html-png.png'
import js from '../img/js.png'
import react from '../img/react.png'
import brush from '../img/brush.png'
import code from '../img/code.png'
import database from '../img/database.png'
import mongodb from '../img/mongodb.png'
import mysql from '../img/mysql.png'
import node from '../img/node.png'

export default function EducationPage() {
    return (
      <container class='main-skills'>
        <div className="text">
        <h1>Skills</h1>
        <h2>Technologies i've worked with.</h2>
        </div>
        <div className="education">
          <div className="skill-box">
            <div class="skill-section-disc">
            <li><img class="section-icon" src={brush} alt="Icon"></img></li>
            <li><h1>Front-end</h1></li>
            </div>
            <li><img class="skill-icon" src={html} alt="Icon"></img></li>
            <li><img class="skill-icon" src={css} alt="Icon"></img></li>
            <li><img class="skill-icon" src={react} alt="Icon"></img></li>
          </div>
          <div className="skill-box">
          <div class="skill-section-disc">
            <li><img class="section-icon" src={code} alt="Icon"></img></li>
            <li><h1>Back-end</h1></li>
            </div>
            <li><img class="skill-icon" src={python} alt="Icon"></img></li>
            <li><img class="skill-icon" src={js} alt="Icon"></img></li>
            <li><img class="skill-icon" src={node} alt="Icon"></img></li>
          </div>
          <div className="skill-box-3">
          <div class="skill-section-disc">
            <li><img class="section-icon" src={database} alt="Icon"></img></li>
            <li><h1>Databases</h1></li>
            </div>
            <li><img class="skill-icon" src={mongodb} alt="Icon"></img></li>
            <li><img class="skill-icon" src={mysql} alt="Icon"></img></li>
          </div>
        </div>
      </container>
    );
  }