import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import { MdOutlineCall } from 'react-icons/md';
import { CiMail } from 'react-icons/ci';
import { ContactForm } from '../components/forms/ContactForm';
import Footer from '../components/Footer';

export const Contact: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="py-28 lg:py-32 px-5 lg:px-[100px] flex flex-col gap-10">
        <div className="flex items-center gap-3 font-[400] text-[14px] leading-[21px] mb-9">
          <Link to="/">Home</Link>
          <span>/</span>
          <p>Contact</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-6 shadow-lg p-10 lg:w-1/3">
            <div className="flex flex-col gap-3 border-b pb-5 border-slate-400">
              <h2 className="inline-flex items-center gap-3 text-[16px] leading-6 font-[500]">
                <span className="rounded-full p-3 bg-pri">
                  <MdOutlineCall className="w-[24px] h-[24px] text-white" />
                </span>
                Call to Us
              </h2>
              <p className="text-[14px] leading-6 font-[500]">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-[14px] leading-6 font-[500]">
                Phone: +8801611112222
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="inline-flex items-center gap-3 text-[16px] leading-6 font-[500]">
                <span className="rounded-full p-3 bg-pri">
                  <CiMail className="w-[24px] h-[24px] text-white font-[500]" />
                </span>
                Write To US
              </h2>
              <p className="text-[14px] leading-6 font-[400]">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-[14px] leading-6 font-[400]">
                Emails: customer@shopfrom.com
              </p>
              <p className="text-[14px] leading-6 font-[400]">
                Emails: support@shopfrom.com
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};
