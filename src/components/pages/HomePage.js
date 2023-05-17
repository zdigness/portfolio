import "./HomePage.css"
import BasicBox from "../layouts/ProjectBox"

export default function Home() {
    return (
            <div className="start">
                <p>My Work</p>
                <div className="grid-even-columns">
                    <BasicBox className="box"></BasicBox>
                    <BasicBox className="box"></BasicBox>
                    <BasicBox className="box"></BasicBox>
                    <BasicBox className="box"></BasicBox>
                </div>
            </div>
    );
}