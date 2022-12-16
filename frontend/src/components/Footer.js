import React from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import newsletter from '../images/newsletter.png';

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src={newsletter} alt='newsletter icon' />
                <h2 className='text-white mb-0'>Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control py-1'
                  placeholder='Enter Your E-mail Address'
                  aria-label='Enter Your E-mail Address'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text p-2' id='basic-addon2'>
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  Frankrijkstraat 20 <br /> 9140 Temse <br /> Belgium
                </address>
                <p className='text-white mt-3 d-block mb-1'>+32 3 000 65 87</p>
                <p className='text-white mt-2 d-block mb-0'>
                  info@react-shop.com
                </p>
                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <a href=''>
                    <BsInstagram className='text-white fs-4' />
                  </a>
                  <a href=''>
                    <BsFacebook className='text-white fs-4' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to='/privacy-policy'>Privacy Policy</Link>
                <Link to='/refund-policy'>Refund Policy</Link>
                <Link to='/shipping-policy'>Shipping Policy</Link>
                <Link to='/terms-and-conditions'>Terms & Conditions</Link>
                <Link to='/blogs'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link>About Us</Link>
                <Link>Faq</Link>
                <Link to='/contact'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link>Laptops</Link>
                <Link>Headphones</Link>
                <Link>Tablets</Link>
                <Link>Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()} Powered by React Shop
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
