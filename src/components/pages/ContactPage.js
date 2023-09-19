import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

import "./ContactPage.css"

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        window.location.replace("/contact-submission");
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
      <div className="contact">
        <h1>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" class="form-input" name="user_name" placeholder="Your Name"/>
        <input type="email" class="form-input" name="user_email" placeholder="Email Address"/>
        <textarea type="text" class="message-input" name="message" placeholder="Message"/>
        <input type="submit" class="submit-button" value="Submit" />
        </form>
      </div>
    );
  }