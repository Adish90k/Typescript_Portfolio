import React, { useState } from 'react';
import "./Contact.css"

interface FormData {
  user_name: string;
  user_email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [status, setStatus] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mannokov', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Your message has been sent successfully!');
      } else {
        setStatus('There was an error sending your message.');
      }
    } catch (error) {
      setStatus('Network error occurred.');
      console.error(error);
    }
  };

  return (
    <div className='w-[100%] flex justify-center items-end flex-col pr-20  max-sm:pr-0 max-sm:m-5' id='Contactcontainer'>
      <div className='bg-black p-4 border-2 border-zinc-500 h-[75%] w-[50%] rounded-xl max-sm:w-[100%] max-sm:h-[100%] '>
      <form onSubmit={handleSubmit} className='flex flex-col justify-evenly h-[100%]'>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          className='h-[35px] rounded-xl p-2'
        />

        <label>Email</label>
        <input
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className='h-[35px] rounded-xl p-2'

        />

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message"
          required
          className='rounded-xl p-2 text-black'
        />

        <button type="submit" 
        className="font-dm-sans w-[160px] h-[40px] rounded-2xl mt-3 flex justify-center items-center gradient-background active:opacity-[50%]"
        >Send Message</button>
      </form>
      {status && <p className='mt-8 '>{status}</p>}


      </div>

    </div>
  );
};

export default Contact;
