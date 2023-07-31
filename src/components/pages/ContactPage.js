import "./ContactPage.css"

export default function ContactPage() {
    return (
      <div class="contact">
        <h1>Contact Me</h1>
        <form>
        <label class="label">Name</label>
        <input type="text" class="form-input" name="name"/>
        <label class="label">Email</label>
        <input type="text" class="form-input" name="email"/>
        <label class="label">Message</label>
        <input type="text" class="message-input" name="message" />
        <input type="submit" class="submit-button" value="Submit" />
        </form>
      </div>
    );
  }