import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus({ submitting: false, submitted: true, error: null });
          form.current.reset();

          // Reset success message after 5 seconds
          setTimeout(() => {
            setStatus((prev) => ({ ...prev, submitted: false }));
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setStatus({ submitting: false, submitted: false, error: error.text });
        }
      );
  };

  return (
    <div className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p>
            I'd love to hear from you! Whether you're looking to collaborate,
            have a project in mind, or just want to say hello.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              placeholder="Your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              placeholder="Your message"
            />
          </div>

          <button
            type="submit"
            className={`submit-btn ${status.submitting ? "submitting" : ""}`}
            disabled={status.submitting}
          >
            {status.submitting ? "Sending..." : "Send Message"}
          </button>

          {status.submitted && (
            <div className="success-message">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {status.error && (
            <div className="error-message">
              Error sending message. Please try again later.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
