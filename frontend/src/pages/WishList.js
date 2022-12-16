import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import MetaSeo from '../components/MetaSeo';
import Container from '../components/Container';

const WishList = () => {
  return (
    <>
      <MetaSeo title='Wishlist' />
      <BreadCrumb title='Wishlist' />
      <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-3'>
            <div className='wishlist-card position-relative'>
              <img
                src='images/cross.svg'
                alt='cross'
                className='position-absolute img-fluid cross'
              />
              <div className='wishlist-card-image'>
                <img
                  src='images/watch.jpg'
                  alt='watch'
                  className='img-fluid w-100'
                />
              </div>
              <div className='py-3 px-3'>
                <h5 className='product-title'>Smart Watch 7th Generation</h5>
                <h6 className='product-price'>€199</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WishList;
