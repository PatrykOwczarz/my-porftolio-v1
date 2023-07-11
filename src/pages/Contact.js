import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

/* 
Created using Emailjs.com (https://www.emailjs.com/)
This template was used to create this form functionality: https://www.emailjs.com/docs/examples/reactjs/
*/

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact">
            <h1>CONTACT ME</h1>
            <form ref={form} onSubmit={sendEmail} className="contactForm">
                <label>Name</label>
                <input type="text" name="user_name" placeholder='Name' />
                <label>Email</label>
                <input type="email" name="user_email" placeholder='name@example.com' />
                <label>Message</label>
                <textarea name="message" placeholder='Message' />
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<SendIcon />}
                    type="submit"
                >
                    Send
                </Button>
            </form>
        </div>
    )
};

export default Contact;