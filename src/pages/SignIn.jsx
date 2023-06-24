import React from 'react';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1515974256630-babc85765b1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="sign-in"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              className="w-full rounded-2xl px-4 py-2 text-xl text-gray-800 bg-white border-gray-400 transition ease-in-out mb-6"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            />
            <div className="relative mb-6">
              <input
                className="w-full rounded-2xl px-4 py-2 text-xl text-gray-800 bg-white border-gray-400 transition ease-in-out"
                type={showPassword ? 'text' : 'password'}
                value={password}
                id="password"
                placeholder="Password"
                onChange={onChange}
              />
              {showPassword ? (
                <AiOutlineEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiOutlineEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
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
                to="/forgot-password"
              >
                Forgot Password
              </Link>
            </div>
            <button
              className="w-full bg-blue-500 text-white px-7 py-2 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-950"
              type="submit"
            >
              Sign In
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

export default SignIn;
