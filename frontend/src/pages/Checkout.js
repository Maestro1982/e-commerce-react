import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import watch from '../images/watch.jpg';
import Container from '../components/Container';

const Checkout = () => {
  return (
    <>
      <Container class1='checkout-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-7'>
            <div className='checkout-left-data'>
              <h3 className='website-name'>React Shop</h3>
              <nav
                style={{ '--bs-breadcrumb-divider': '>' }}
                aria-label='breadcrumb'
              >
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link to='/cart' className='text-dark'>
                      Cart
                    </Link>
                  </li>
                  &nbsp; {'>'}
                  <li className='breadcrumb-item active' aria-current='page'>
                    Information
                  </li>
                  &nbsp; {'>'}
                  <li className='breadcrumb-item active'>Shipping</li>
                  &nbsp; {'>'}
                  <li className='breadcrumb-item active' aria-current='page'>
                    Payment
                  </li>
                </ol>
              </nav>
              <div className='contact-title'>Contact Information</div>
              <p className='user-details'>John Doe (john.doe@gmail.com)</p>
              <h4 className='mb-3'>Shipping Address</h4>
              <form
                action=''
                className='d-flex flex-wrap gap-15 justify-content-between'
              >
                <div className='w-100'>
                  <select name='' id='' className='form-control form-select'>
                    <option value='' selected disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className='flex-grow-1'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Firstname'
                  />
                </div>
                <div className='flex-grow-1'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Lastname'
                  />
                </div>
                <div className='w-100'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Address'
                  />
                </div>
                <div className='w-100'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Appartment, House, etc'
                  />
                </div>
                <div className='flex-grow-1'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='City'
                  />
                </div>
                <div className='flex-grow-1'>
                  <select name='' id='' className='form-control form-select'>
                    <option value='' selected disabled>
                      Select Region
                    </option>
                  </select>
                </div>
                <div className='flex-grow-1'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Zipcode'
                  />
                </div>
                <div className='w-100'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <Link to='/cart' className='text-dark'>
                      <FiChevronLeft className='me-2' /> Return To Cart
                    </Link>
                    <Link to='/cart' className='button'>
                      Continue To Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='col-5'>
            <div className='solid py-4'>
              <div className='d-flex gap-10 align-items-center mb-2'>
                <div className='w-75 d-flex gap-10'>
                  <div className='w-25 position-relative'>
                    <span
                      style={{ top: '-10px', right: '2px' }}
                      className='badge bg-secondary text-white rounded-circle p-2 position-absolute'
                    >
                      1
                    </span>
                    <img src={watch} alt='product' className='img-fluid' />
                  </div>
                  <div>
                    <h5 className='product-title'>
                      Smart Watch 7th Generation
                    </h5>
                    <p className='total-price'>s / #aefcd</p>
                  </div>
                </div>
                <div className='flex-grow-1'>
                  <h5 className='total-price'>€199</h5>
                </div>
              </div>
            </div>
            <div>
              <div className='solid py-4'>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className='total-title'>Subtotal</p>
                  <p className='total-price'>€199</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className='mb-0 total-title'>Shipping</p>
                  <p className='mb-0 total-price'>€199</p>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center solid py-4'>
              <h4 className='total-title'>Total</h4>
              <h5 className='total-price'>€199</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
