import React from "react";

import "../css/projects.css"

import icon from '../img/budget.jpg'
import django from '../img/django-green.png'
import python from '../img/python-png.png'
import mysql from '../img/mysql.png'

export default function BasicBox() {
    return (
        <div className="main-project">
            <div className="projectmain">
                <div className="projectbox">
                <img className="project-icon" src={icon} alt="Icon"></img>
                </div>
            </div>
            <div className="projectdisc">
                <div>
                <p class="budget-app">Budgeting app to track monthly expenses, calculate savings, and manage debts.</p>
                </div>
                <div class="tech-stack">
                <img className="tech-icon" src={django} alt="Icon"></img>
                <img className="tech-icon" src={python} alt="Icon"></img>
                <img className="tech-icon" src={mysql} alt="Icon"></img>
                <a href="https://github.com/zdigness/personal_finance"><button type="button" class="btn btn-primary">GitHub</button></a>
                </div>
                </div>
        </div>
    )
}