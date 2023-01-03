import React from 'react';
import CustomInput from '../components/CustomInput';

const ForgotPassword = () => {
  return (
    <div className='py-5' style={{ background: '#efe7da', minHeight: '100vh' }}>
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center title'>Forgot Password</h3>
        <p className='text-center'>
          Please enter your registered email to recieve a reset password email.
        </p>
        <form>
          <CustomInput type='password' label='Email Address' id='email' />
          <button
            className='border-0 px-3 py-2 text-white fw-bold w-100'
            style={{ background: '#0e4749' }}
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
