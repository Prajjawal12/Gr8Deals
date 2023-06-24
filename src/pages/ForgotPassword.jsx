import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { toast } from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
function ForgotPassword() {
  const [email, setEmail] = useState('');

  function onChange(e) {
    setEmail(e.target.value);
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);

      toast.success('Email sent succesfully!!');
    } catch (error) {
      toast.error('Could not send reset password');
    }
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1515974256630-babc85765b1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="sign-in"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              className="w-full rounded-2xl px-4 py-2 text-xl text-gray-800 bg-white border-gray-400 transition ease-in-out mb-6"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            />

            {/**Div below the password component */}
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-md">
              <p className="mb-6">
                Don't have an account?
                <Link
                  className="text-red-500 hover:text-red-800 transition duration-200 ease-in-out ml-1"
                  to="/sign-up"
                >
                  Register
                </Link>
              </p>
              <Link
                className="text-blue-500 hover:text-blue-800 transition duration-200 ease-in-out"
                to="/sign-in"
              >
                Sign In instead
              </Link>
            </div>
            <button
              className="w-full bg-blue-500 text-white px-7 py-2 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-950"
              type="submit"
            >
              Send Reset Password
            </button>
            <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-400 after:border-t after:flex-1 after:border-gray-400">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
          </form>
          <OAuth />
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
