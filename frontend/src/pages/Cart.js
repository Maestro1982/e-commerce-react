import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import MetaSeo from '../components/MetaSeo';
import watch from '../images/watch.jpg';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Cart = () => {
  return (
    <>
      <MetaSeo title='Shopping Cart' />
      <BreadCrumb title='Shopping Cart' />
      <Container class1='cart-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='cart-header d-flex justify-content-between align-items-center py-3'>
              <h4 className='cart-col-1'>Product</h4>
              <h4 className='cart-col-2'>Price</h4>
              <h4 className='cart-col-3'>Quantity</h4>
              <h4 className='cart-col-4'>Total</h4>
            </div>
            <div className='cart-data d-flex justify-content-between align-items-center py-3 mb-2'>
              <div className='cart-col-1 gap-15 d-flex align-items-center'>
                <div className='w-25'>
                  <img className='img-fluid' src={watch} alt='image'></img>
                </div>
                <div className='w-75'>
                  <p>Test</p>
                  <p>Color: Black</p>
                  <p>Size: S</p>
                </div>
              </div>
              <div className='cart-col-2'>
                <h5 className='product-price'>€199</h5>
              </div>
              <div className='cart-col-3 d-flex align-items-center gap-15'>
                <div>
                  <input
                    className='form-control'
                    type='number'
                    min={1}
                    max={10}
                    name=''
                    id=''
                  />
                </div>
                <div>
                  <RiDeleteBin5Fill className='text-danger' />
                </div>
              </div>
              <div className='cart-col-4'>
                <h5 className='total-price'>€199</h5>
              </div>
            </div>
          </div>
          <div className='col-12 py-2 mt-4'>
            <div className='d-flex justify-content-between align-items-baseline'>
              <Link to='/product' className='button'>
                Continue Shopping
              </Link>
              <div className='d-flex flex-column align-items-end'>
                <h4 className='subtotal'>Subtotal: €199</h4>
                <p>Tax & Shipping will be calculated at checkout</p>
                <Link to='/checkout' className='button'>
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
