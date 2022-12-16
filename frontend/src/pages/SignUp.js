import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import MetaSeo from '../components/MetaSeo';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const SignUp = () => {
  return (
    <>
      <MetaSeo title='SignUp' />
      <BreadCrumb title='SignUp' />
      <Container class1='login-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Create Your Account</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <CustomInput type='text' name='name' placeholder='Name' />
                <CustomInput type='email' name='email' placeholder='Email' />
                <CustomInput
                  type='tel'
                  name='tel'
                  placeholder='Mobile Number'
                />
                <CustomInput
                  type='password'
                  name='password'
                  placeholder='Password'
                />
                <div>
                  <div className='d-flex justify-content-center gap-15 align-items-center mt-3'>
                    <button className='button border-0' type='submit'>
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
