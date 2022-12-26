import React from 'react';
import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';

const Login = () => {
  return (
    <div className='py-5' style={{ background: '#efe7da', minHeight: '100vh' }}>
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center'>Login</h3>
        <p className='text-center'>Login to your account to continue.</p>
        <form>
          <CustomInput type='email' label='Email Address' id='email' />
          <CustomInput type='password' label='Password' id='password' />
          <div className='mb-3 text-end'>
            <Link to='/forgot-password'>Forgot Password?</Link>
          </div>
          <Link
            to='/admin'
            className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5'
            style={{ background: '#0e4749' }}
            type='submit'
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;