import './contact.css'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const notify = () => 
    toast.success('✉️ Email Sent!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_61bta6l', 'template_okv6r55', form.current, 'uZRmT6U0nEEXT3VQi')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
            //   alert('Email Sent!')
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section className="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunity</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='from_name'/>
                <input type="email" className="email" placeholder='Your Email' name='from_email'/>
                <textarea name="message" rows="5" className="msg" placeholder='Your Message'></textarea>
                <button type='submit' value='send' className="submitBtn" onClick={notify}>Submit</button>
                <ToastContainer />
            </form>
        </div>
    </section>
  )
}

export default Contact