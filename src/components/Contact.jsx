import React, { useRef, useState } from "react";
// import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: "", isError: false });

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Uncomment when you integrate emailjs
    /*
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          setStatus({ message: "Message sent successfully!", isError: false });
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setStatus({ message: "Failed to send the message, please try again.", isError: true });
      });
    */
    
    // Placeholder for testing
    setStatus({ message: "Message feature coming soon!", isError: false });
  };

  return (
    <div className="contact-main">
      <h2>Contact Me</h2>
      {status.message && (
        <p className={status.isError ? "error-message" : "success-message"}>
          {status.message}
        </p>
      )}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="user_name">Name</label>
        <input id="user_name" type="text" name="user_name" required />
        <label htmlFor="user_email">Email</label>
        <input id="user_email" type="email" name="user_email" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;