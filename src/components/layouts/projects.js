import React from "react";

import "../css/projects.css"

import icon from '../img/budget.jpg'
import django from '../img/django-green.png'
import python from '../img/python-png.png'
import mysql from '../img/mysql.png'

export default function BasicBox() {
    return (
        <div className="projects-container">
            <div className="project-layout">
                <div className="leftside">
                    <div className="number">
                        <h2>01</h2>
                    </div>
                    <div className="name">
                        <h1>Puttdle</h1>
                    </div>
                    <div className="description">
                        <p>2D Daily Golf Game</p>
                    </div>
                </div>
                <div className="rightside">
                    <img src={django} alt="Icon"></img>
                </div>
            </div>
        </div>
    )
}