import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import MetaSeo from '../components/MetaSeo';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const ForgotPassword = () => {
  return (
    <>
      <MetaSeo title='Forgot Password' />
      <BreadCrumb title='Forgot Password' />
      <Container class1='login-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Reset Your Password</h3>
              <p className='text-center mt-2 mb-3'>
                We will send you an email to reset your password
              </p>
              <form action='' className='d-flex flex-column gap-15'>
                <CustomInput type='email' name='email' placeholder='Email' />
                <div>
                  <div className='d-flex justify-content-center flex-column gap-15 align-items-center mt-3'>
                    <button className='button border-0' type='submit'>
                      Submit
                    </button>
                    <Link to='/login'>Cancel</Link>
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

export default ForgotPassword;
