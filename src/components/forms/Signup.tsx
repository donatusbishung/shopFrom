import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import { signUp, signUpWithGoogle } from '../../slices/Auth/authSlice';
import { AppDispatch, RootState } from '../../store/store';
import { notification, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { FcGoogle } from 'react-icons/fc';

interface FormData {
  displayName: string;
  email: string;
  password: string;
}

export const Signup: React.FC = () => {
  const [newError, setNewError] = useState('');
  const [formData, setFormData] = useState<FormData>({
    displayName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, user } = useSelector((state: RootState) => state.auth);

  console.log('user', user);

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
    if (!formData.displayName || !formData.email || !formData.password) {
      setNewError('All fields are required');
      return;
    }
    if (!validateEmail(formData.email)) {
      setNewError('Invalid email address');
      return;
    }
    try {
      await dispatch(signUp(formData)).unwrap();
      navigate('/login');
    } catch (error: any) {
      notification.warning({
        message: error.message,
        duration: 1,
        placement: 'topRight',
        className: 'rounded-lg',
      });
    }
  };

  const signInWithGoogle = async () => {
    try {
      await dispatch(signUpWithGoogle());
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
              Create an account
            </h1>
            <p className="font-[400] text-[16px] leading-6">
              Enter your details below
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              placeholder="Name"
              className="border-b border-gray-300 text-[16px] font-[400] leading-6 p-3 outline-none focus:border-b focus:border-amber-600 transition-all duration-200"
            />
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
                type="submit"
                disabled={isLoading}
                className="bg-[#DB4444] rounded-[4px] p-3 text-[16px] transition-all duration-200 text-white font-[400] leading-6 hover:bg-[#e19b9b]"
              >
                {isLoading ? (
                  <Spin indicator={<LoadingOutlined spin />} />
                ) : (
                  'Create Account'
                )}
              </button>
              <button
                onClick={signInWithGoogle}
                className="border border-gray-300 rounded-[4px] p-3 text-[16px] font-[400] leading-6 inline-flex justify-center items-center gap-3"
              >
                <FcGoogle />
                Sign up with Google
              </button>
            </div>
          </form>
          <p>
            Already have an account ? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
