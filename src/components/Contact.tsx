
import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

function Contact  ()  {
  return (
    <div id="contact" className="pt-32 container">
        <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
                <h2 className="text-5xl font-bold">Get in touch</h2>
                <p className="text-gray-600 text-[18px] pt-2">
                    Drop me a line, give me a call, or send me a message by submitting a form.
                </p>
                <div className="flex gap-3 items-center">
                    <AiOutlineMail  size={30}/> daraibarafique8627@gmail.com
                </div>
                <div className="flex gap-3 items-center">
                <BsTelephone size={30} />0330-2194367

                </div>
            </div>
            <div className="space-y-8">
                <div className="flex flex-col gap-1 font-semibold">
                    <label htmlFor='name'>Name</label>
                    <input type="text" 
                    className="h-[40px] bg-transparent border border-pink-700 rounded-md"
                    id="name"/>
                </div>
                <div className="flex flex-col gap-1 font-semibold">
                    <label htmlFor='email'>Email</label>
                    <input type="text"
                    className="h-[40px] bg-transparent border border-pink-700 rounded-md "
                    id="email"/>
                </div>
                <div className="flex flex-col gap-1 font-semibold">
                    <label htmlFor='message'>Message</label>
                    <textarea 
                    className="bg-transparent border border-pink-700 rounded-md" 
                    id="message" rows={8}>
                    </textarea>
                </div>
                <button className="bg-pink-700 py-2 px-4 rounded-md hover:cursor-pointer text-black hover:text-white">Send</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact;