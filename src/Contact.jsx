import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components"
import './Contact.css'

//  npm i @emailjs/browser
const Contact = () => {
    const form = useRef();

    const sendEmail = async(e) => {
      e.preventDefault();
  
      await emailjs
      .sendForm(
        'service_twxcq9u',
        'template_rggu7nm',
        form.current,
        'Ks2Hbe3gD7OeFVfZL')
        .then(
        (result) => {
            console.log(result.text);
            console.log("message sent")
            alert("message has been sent")
            window.location.reload();
        }, 
        (error) => {
            console.log(error.text);
        });
    };

    return ( 
        <div className="out">
               <StyledContactForm className="o left">
               <h1 className="r">Just say Hello !</h1>
               <div className="k">
            <p>Let us know more about you !</p>
          </div>
    <form ref={form} onSubmit={sendEmail}>
      {/* <label>Name</label> */}
      <input type="text" placeholder="Name" name="to_name" />
      {/* <label>Email</label> */}
      <input type="email" placeholder="Enter email" name="from_name" />
      {/* <label>Message</label> */}
      <textarea name="message" placeholder="Enter message"/>
      <input type="submit"  value="Send" />
    </form>
    </StyledContactForm>
    <div className="right">
        <h1 className="r"> Contact Information</h1>
        <div className="z">
        <p>Chingrighata 700098<br/>
            Bidhanagar sector 4
            (Kolkata)
            <p>
            Call Us: +91 6206276126
            </p>
            <p>
            We are open from Monday-Friday 
            <br/> 08:00 am - 05:00pm
            </p>
        </p>
        <br/>
        </div>
       
        <h1 className="r">Follow Us </h1>
        <div className="z">
        <p> <a href="" className="c"> Facebook </a> &nbsp;&nbsp;  <a href="" className="c">Instagram</a> &nbsp;&nbsp;  <a href="" className="c">Linkedin</a></p>
        </div>
    </div>

    </div>

    );
}

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
     
      cursor: pointer;
      background: rgb(192, 60, 82);
      color: white;
      border: none;
    }
  }
`;