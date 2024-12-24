import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // API call to update the details
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: '',
      phone: '',
    });
  };
  return (
    <div className="shadow-xl p-10 lg:w-2/3">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row gap-5">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            className="outline-none p-3 bg-[#F5F5F5] rounded-[4px] font-[200] text-[16px] lg:w-[235px]"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            className="outline-none p-3 bg-[#F5F5F5] rounded-[4px] font-[200] text-[16px] lg:w-[235px]"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="number"
            placeholder="Your Phone"
            className="outline-none p-3 bg-[#F5F5F5] rounded-[4px] font-[200] text-[16px] lg:w-[235px]"
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-3 h-[207px] outline-none bg-[#F5F5F5] rounded-[4px] text-[16px]"
        ></textarea>
        <div className="flex justify-center lg:justify-end gap-3">
          <button className="px-5 py-3 bg-pri hover:bg-[#9b3030] text-white rounded-[4px] font-[500] text-[16px]">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
