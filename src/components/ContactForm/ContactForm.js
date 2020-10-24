import React, { useState } from "react";
import { motion } from "framer-motion";
import { Axios, db } from '../../firebase/firebaseConfig';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    sendMessage()
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    })
  };

  function sendMessage() {
    // if (!validateMail()) {
    //   return;
    // }
    const templateParams = {
      from_name: formData.firstName,
      last_name: formData.lastName,
      message: formData.message,
      email: formData.email
    }

    emailjs.send("service_laicuRoot", "template_4uwciqm", templateParams, 'user_CItcQLPkfwi7g0kRYJeQB')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  }


  // const sendEmail = () => {
  //   Axios.post(
  //     'https://us-central1-nextjsportfoliowebsite.cloudfunctions.net/submit',
  //     formData
  //   )
  //     .then(res => {
  //       db.collection('emails').add({
  //         firstName: formData.firstName,
  //         lastName: formData.lastName,
  //         email: formData.email,
  //         message: formData.message,
  //         time: new Date(),
  //       })
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  return (
    <div className="container mx-auto m-10 shadow-lg">
      <h1 className="text-6xl font-bold text-center">Contact Me</h1>
      <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-center -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className='block uppercase tracking-wide text-black text-xs font-bold mb-2' htmlFor='grid-first-name'>
              First Name:
              </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName || ''}
              onChange={updateInput}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className='block uppercase tracking-wide text-black text-xs font-bold mb-2' htmlFor='grid-last-name'>
              Last Name:
              </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-last-name"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName || ''}
              onChange={updateInput}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email:
              </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email || ''}
              onChange={updateInput}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="grid-textarea"
            >
              Ask me anything!
              </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name='message'
              id="grid-textarea"
              rows='10'
              cols='30'
              type="message"
              placeholder="Go ahead, contact me if you have a project in mind!"
              value={formData.message || ''}
              onChange={updateInput}
            />
          </div>
        </div>

        <motion.div className=' block rounded-full mb-4 lg:inline-block lg:mt-0 font-bold text-black hover:shadow-md' whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <input className='bg-black text-white rounded-full py-2 px-4' type="submit" />
        </motion.div>
      </form>
    </div>
  )
}

export default ContactForm;