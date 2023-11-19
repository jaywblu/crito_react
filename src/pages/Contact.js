import React, { useState } from 'react'
import * as ApiHandler from '../ApiHandler'
import PageTitleSection from '../components/PageTitleSection'

import img_Location from '../assets/images/contact-round-location.svg'
import img_Phone from '../assets/images/contact-round-phone.svg'
import img_Mail from '../assets/images/contact-round-mail.svg'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subitMessage, setSubmitMessage] = useState('')
  const [messageSent, setMessageSent] = useState(false)

  const handleNameChange = (value) => {
    setName(value)
    validateName()
  }

  const handleEmailChange = (value) => {
    setEmail(value)
    validateEmail()
  }

  const handleMessageChange = (value) => {
    setMessage(value)
    validateMessage()
  }

  const validateName = () => {
    return (name.length > 0)
  }

  const validateEmail = () => {
    // return (email.length > 2)
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  const validateMessage = () => {
    return (message.length > 0)
  }

  const InputValidation = ({isValid, text}) => {
    if (!isValid) {
      return <span className='error-text'>{text}</span>
    }
    return
  }

  const validateForm = validateName() && validateEmail() && validateMessage()

  const resetForm = () => {
    setName('')
    setEmail('')
    setMessage('')
  }

  const submitForm = async (e) => {
    e.preventDefault()
    const user = {
      name: name,
      email: email,
      message: message
    }
    console.log(JSON.stringify(user))

    const submit = ApiHandler.submitContactForm(user)

    submit.then(
      response => {
        console.log(response)
        if (response.status == 200) {
          setSubmitMessage('Thank you for your message, we will be in touch!')
          resetForm()
          setMessageSent(true)
        } else if (response.status == 400) {
          setSubmitMessage('Your message was not submitted, please make sure to fill out the form correctly.')
        } else {
          setSubmitMessage('Something went wrong, please try again.')
        }
      }
    ).catch(
      error => console.log(error)
    )
  }

  return (
    <>
        <main>
            <PageTitleSection title="Let's Connect" pageName="Contact"></PageTitleSection>
            <section id="contactCards" className="container margin-top-large">
                <div className="row">
                    <div className="col">
                        <img src={img_Location} />
                        <span>
                            <h3>Visit us</h3>
                            <p>Sveavägen 31<br/>
                            111 34 STOCKHOLM</p>
                        </span>
                    </div>
                    <div className="col">
                        <img src={img_Phone} />
                        <span>
                            <h3>Call us</h3>
                            <p>+46 (8) 121 470 50<br/>
                            +46 (8) 121 470 51</p>
                        </span>
                    </div>
                    <div className="col">
                        <img src={img_Mail} />
                        <span>
                            <h3>Email us</h3>
                            <p>info@crito.com<br/>
                            support@crito.com</p>
                        </span>
                    </div>
                </div>
            </section>
            <section id="contactForm" className="container margin-top-large">
                <form onSubmit={submitForm} noValidate>
                    <h2>Leave us a message for any information</h2>
                    {
                      messageSent ? ''
                      : <>
                          <input type="text" className="form-control" required placeholder="Name" value={name} onChange={(e) => handleNameChange(e.target.value)}/>
                          <InputValidation isValid={validateName()} text="Please enter a name"></InputValidation>
                          <input type="email" className="form-control" required placeholder="E-mail" value={email} onChange={(e) => handleEmailChange(e.target.value)}/>
                          <InputValidation isValid={validateEmail()} text="Please enter a valid email"></InputValidation>
                          <textarea className="form-control" required placeholder="Your message..." value={message} onChange={(e) => handleMessageChange(e.target.value)}></textarea>
                          <InputValidation isValid={validateMessage()} text="Please enter a message"></InputValidation>
                          <button type="submit" className="btn btn-primary btn-wide" disabled={!validateForm}>Send Message<i className="icon link-icon"></i></button>
                        </>
                    }
                    {
                      subitMessage.length > 0 ? <span className='submited-form-text'>{subitMessage}</span>
                        : ''
                    }
                </form>
            </section>
            <section id="contactMap" className="margin-top-large">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.7793860707923!2d18.062010500000003!3d59.336636999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6799554e87%3A0x6562d2c842903003!2sSveav%C3%A4gen%2031%2C%20111%2034%20Stockholm!5e0!3m2!1ssv!2sse!4v1696777653854!5m2!1ssv!2sse"
                    allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </main>
    </>
  )
}

export default Contact