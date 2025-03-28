import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginPage = () => {

  const handleLoginWithGughub = () => {
    // this self to be in the same page
    window.open("/api/auth/github", "_self");
  };


  return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
      <div className='w-full bg-glass rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold md:text-2xl text-center'>Login to your account</h1>
          <button
            type='button'
            onClick={handleLoginWithGughub}
            className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 
						focus:outline-none focus:ring-[#24292F]/50 
              font-bold rounded-lg flex gap-2 p-2 items-center w-full text-center justify-center cursor-pointer'
          >
            <FaGithub className='w-5 h-5' />
            Login with Github
          </button>

          <p className='text-sm font-semibold text-gray-400 ml-21'>
            {"Don't"} have an account?{" "}
            <Link to='/signup' className='font-bold text-primary-600 hover:underline text-blue-600'>
              Sign Up
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default LoginPage;