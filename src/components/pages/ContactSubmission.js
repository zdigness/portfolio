import "./ContactSubmission.css"

import checkmark from "../img/checkmark.png"

export default function ContactSubmission() {
    return(
        <container>
            <div className="confirmation">
                <div className="check-container">
                <h1 className="thank">Thank you!</h1>
                <img src={checkmark} alt="Icon"></img>
                </div>
                <h2 className="received">Your form has been received and I will get back to you as soon as possible.</h2>
                <a className="home-link" href="http://localhost:3000">Return Home</a>
            </div>
        </container>
    )
}