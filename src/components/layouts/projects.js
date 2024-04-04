import React from "react";

import "../css/projects.css"

import puttdle from '../img/puttdle.png'
import icon from '../img/budget.jpg'
import django from '../img/django-green.png'
import python from '../img/python-png.png'
import mysql from '../img/mysql.png'

export default function BasicBox({ number, name, description, image }) {
    return (
        <div className="projects-container">
            <div className="project-layout">
                <div className="leftside">
                    <div className="number">
                        <h2>{number}</h2>
                    </div>
                    <div className="name">
                        <h1>{name}</h1>
                    </div>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="rightside">
                    <img src={image} alt="Icon"></img>
                </div>
            </div>
        </div>
    )
}