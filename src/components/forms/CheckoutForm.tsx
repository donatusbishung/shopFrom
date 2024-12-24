import { useState } from 'react';

export const CheckoutForm: React.FC = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    email: '',
    companyName: '',
    streetAddress: '',
    appartment: '',
    townCity: '',
    phoneNumber: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // API call to update the details
    console.log(formData);
    setFormData({
      FirstName: '',
      email: '',
      companyName: '',
      streetAddress: '',
      appartment: '',
      townCity: '',
      phoneNumber: '',
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-5">
          <label htmlFor="">First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            placeholder=""
            className="outline-none p-3 bg-[#F5F5F5] rounded-[4px] font-[200] text-[16px]"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="">Company Name</label>
          <input
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            type="text"
            placeholder=""
            className="outline-none p-3 bg-[#F5F5F5] rounded-[4px] font-[200] text-[16px]"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="">Street Address</label>
          <input
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            type="text"
            placeholder=""
            className="outline-none p-3 bg-[#F5F5F5] rounded-[4px] font-[200] text-[16px]"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="">Apartment, floor, etc. (optional)</label>
          <input
            name="appartment"
            value={formData.appartment}
            onChange={handleChange}
            type="text"
            placeholder=""
            className="outline-none p-3 bg-[#F5F5F5] rounded-[4px] font-[200] text-[16px]"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="">Town/City</label>
          <input
            name="townCity"
            value={formData.townCity}
            onChange={handleChange}
            type="text"
            placeholder=""
            className="outline-none p-3 bg-[#F5F5F5] rounded-[4px] font-[200] text-[16px]"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="">Apartment, floor, etc. (optional)</label>
          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            type="number"
            placeholder=""
            className="outline-none p-3 bg-[#F5F5F5] rounded-[4px] font-[200] text-[16px]"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="">Email Address</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder=""
            className="outline-none p-3 bg-[#F5F5F5] rounded-[4px] font-[200] text-[16px]"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
