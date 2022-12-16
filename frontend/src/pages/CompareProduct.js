import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Color from '../components/Color';
import MetaSeo from '../components/MetaSeo';
import Container from '../components/Container';

const CompareProduct = () => {
  return (
    <>
      <MetaSeo title='Compare Products' />
      <BreadCrumb title='Compare Products' />
      <Container class1='compare-product-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-3'>
            <div className='compare-product-card position-relative'>
              <img
                src='images/cross.svg'
                alt='cross'
                className='position-absolute cross img-fluid'
              />
              <div className='product-card-image'>
                <img src='images/watch.jpg' alt='watch' />
              </div>
              <div className='compare-product-details'>
                <h5 className='product-title'>Smart Watch 7th Generation</h5>
                <h6 className='product-price mt-3'>€199</h6>
                <div>
                  <div className='product-detail mb-3'>
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className='product-detail mb-3'>
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>
                  <div className='product-detail mb-3'>
                    <h5>SKU:</h5>
                    <p>SKU033</p>
                  </div>
                  <div className='product-detail mb-3'>
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className='product-detail mb-3'>
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className='product-detail mb-3'>
                    <h5>Size:</h5>
                    <div className='d-flex gap-10'>
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
