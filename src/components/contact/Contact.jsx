import React, { useRef } from 'react';
import './contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wixbt1q',    
        'template_gn0zt5g',   
        form.current,
        'o83y8yMpC3qQD8OjL'     
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset(); 
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtext">
        Got a project, job offer, or just want to say hi? Let's connect!
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* <div className="contact-icons">
        <a href="https://github.com/ozi-Shalom2333" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:okaozisol45@gmail.com">
          <MdEmail />
        </a>
        <a href="https://www.linkedin.com/in/ozioma-okafor-111006329/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div> */}
    </section>
  );
};

export default Contact;
