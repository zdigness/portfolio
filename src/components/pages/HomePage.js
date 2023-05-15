import "./HomePage.css"
import BasicTimeline from "../layouts/Timeline";

export default function Home() {
    return (
            <div className="start">
                <BasicTimeline></BasicTimeline>
                <button className="welcome">Welcome!</button>
            </div>
    );
}