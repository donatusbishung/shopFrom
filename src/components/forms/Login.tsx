import React, { useState } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { notification, Spin } from 'antd';
import { signIn } from '../../slices/Auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';

interface FormData {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const [newError, setNewError] = useState('');
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: RootState) => state.auth);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setNewError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setNewError('All fields are required');
      return;
    }
    if (!validateEmail(formData.email)) {
      setNewError('Invalid email address');
      return;
    }
    try {
      await dispatch(signIn(formData)).unwrap();
      navigate('/');
    } catch (error: any) {
      notification.warning({
        message: error.message,
        duration: 1,
        placement: 'topRight',
        className: 'rounded-lg',
      });
    }
  };

  return (
    <div>
      <NavBar />
      <div className="md:px-[50px] lg:px-[100px] flex flex-col lg:flex-row py-28 lg:py-32 lg:justify-between items-center md:items-stretch lg:items-center gap-10">
        <div className="hidden md:block lg:block">
          <img src="formIMG.jpg" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <h1 className="font-[500] text-[24px] lg:text-[36px] leading-9">
              Log in to ShopFrom
            </h1>
            <p className="font-[400] text-[16px] leading-6">
              Enter your details below
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email or Phone number"
              className="border-b border-gray-300 text-[16px] font-[400] leading-6 p-3 outline-none focus:border-b focus:border-amber-600 transition-all duration-200"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="border-b border-gray-300 text-[16px] font-[400] leading-6 p-3 outline-none focus:border-b focus:border-amber-600 transition-all duration-200"
            />
            {newError && (
              <p className="text-[14px] font-[400] leading-6 text-red-600">
                {newError}
              </p>
            )}
            <div className="flex flex-col gap-3">
              <button
                disabled={isLoading}
                className="bg-[#DB4444] rounded-[4px] p-3 text-[16px] transition-all duration-200 text-white font-[400] leading-6 hover:bg-[#e19b9b]"
              >
                {isLoading ? (
                  <Spin indicator={<LoadingOutlined spin />} />
                ) : (
                  'Log In'
                )}
              </button>
              <button className="p-3 text-[16px] text-[#DB4444] font-[400] leading-6">
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
