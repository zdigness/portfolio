import "./ContactPage.css"

export default function ContactPage() {
    return (
      <div class="contact">
        <h1>Contact Me</h1>
        <form className="contact-form" action="https://formsubmit.co/a8b8b67a97e6426843e5b5c58b70cd5a" method="POST">
        <input type="hidden" name="_next" value="http://localhost:3000/contact-submission"></input>
        <input type="text" class="form-input" name="name" placeholder="Your Name"/>
        <input type="email" class="form-input" name="email" placeholder="Email Address"/>
        <textarea type="text" class="message-input" name="message" placeholder="Message"/>
        <input type="submit" class="submit-button" value="Submit" />
        </form>
      </div>
    );
  }