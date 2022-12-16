import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import MetaSeo from '../components/MetaSeo';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi';
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <MetaSeo title='Contact Us' />
      <BreadCrumb title='Contact Us' />
      <Container class1='contact-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.2549515272444!2d4.194473276544289!3d51.14064947173218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c38da957734505%3A0xeb073652c2b018f2!2sFrankrijkstraat%2C%209140%20Temse!5e0!3m2!1snl!2sbe!4v1670599340340!5m2!1snl!2sbe'
              width='600'
              height='450'
              className='border-0 w-100'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title mb-4'>Contact</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Name'
                    />
                  </div>
                  <div>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email'
                    />
                  </div>
                  <div>
                    <input
                      type='tel'
                      className='form-control'
                      placeholder='Mobile Number'
                    />
                  </div>
                  <div>
                    <textarea
                      name=''
                      id=''
                      cols={30}
                      rows={4}
                      className='w-100 form-control'
                      placeholder='Send Message'
                    />
                  </div>
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Get In Touch With Us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className='fs-5' />
                      <address className='mb-0'>
                        Frankrijkstraat 20, 9140 Temse, Belgium
                      </address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiPhoneCall className='fs-5' />
                      <span>+32 3 000 65 87</span>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className='fs-5' />
                      <span>info@react-shop.com</span>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiInfoCircle className='fs-5' />
                      <span className='mb-0'>
                        Monday - Friday 8.00AM - 20.00PM
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
