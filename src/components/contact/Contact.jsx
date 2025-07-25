import  { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wixbt1q', 'template_gn0zt5g', form.current, 'o83y8yMpC3qQD8OjL')
      .then(() => {
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error.text);
      });
  };

  return (
    <section className="contact-section" id="contact" data-aos="fade-up" data-aos-duration="800">
      <h2 className="contact-title" data-aos="fade-up" data-aos-delay="100">Contact Me</h2>
      <p className="contact-subtext" data-aos="fade-up" data-aos-delay="200">Got a project, job offer, or just want to say hi? Let's connect!</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form" data-aos="zoom-in" data-aos-delay="400">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

    </section>
  );
};

export default Contact;
