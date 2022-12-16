import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const SpecialProduct = () => {
  return (
    <div className='col-6 mb-3'>
      <div className='special-product-card'>
        <div className='d-flex justify-content-between'>
          <div>
            <img src='images/watch.jpg' alt='product' className='img-fluid' />
          </div>
          <div className='special-product-content'>
            <h5 className='brand'>Havels</h5>
            <h6 className='title'>Smart Watch 7th Generation</h6>
            <ReactStars
              count={5}
              size={24}
              activeColor='#ffd700'
              value={3}
              edit={false}
            />
            <p className='product-price'>
              <span className='red-p'>€100</span> &nbsp; <strike>€299</strike>
            </p>
            <div className='discount-till d-flex align-items-center gap-10'>
              <p className='mb-0'>
                <b>5 </b>days
              </p>
              <div className='d-flex gap-10 align-items-center'>
                <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                <span className='badge rounded-circle p-2 bg-danger'>1</span>
              </div>
            </div>
            <div className='product-count my-3'>
              <p>Products: 5</p>
              <div className='progress'>
                <div
                  className='progress-bar'
                  role='progressbar'
                  aria-label='Basic example'
                  style={{ width: '25%' }}
                  aria-valuenow='25'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
            </div>
            <Link className='button'>Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
