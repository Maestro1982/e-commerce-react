import React from 'react';
import CustomInput from '../components/CustomInput';

const ResetPassword = () => {
  return (
    <div className='py-5' style={{ background: '#efe7da', minHeight: '100vh' }}>
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center title'>Reset Password</h3>
        <p className='text-center'>Please enter your new password.</p>
        <form>
          <CustomInput type='password' label='New Password' id='password' />
          <CustomInput
            type='password'
            label='Confirm Password'
            id='confirm_password'
          />
          <button
            className='border-0 px-3 py-2 text-white fw-bold w-100'
            style={{ background: '#0e4749' }}
            type='submit'
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
