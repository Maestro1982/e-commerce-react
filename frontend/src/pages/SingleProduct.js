import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import MetaSeo from '../components/MetaSeo';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '../components/Container';

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg',
  };
  const [orderedProduct, setOrderedProduct] = useState(true);

  const copyToClipboard = (text) => {
    console.log('text', text);
    var textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };
  return (
    <>
      <MetaSeo title='Dynamic Product Title' />
      <BreadCrumb title='Dynamic Product Title' />
      <Container class1='main-product-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-product-image'>
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className='other-product-images d-flex flex-wrap gap-15'>
              <div>
                <img
                  src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'
                  alt='watch'
                  className='img-fluid'
                />
              </div>
              <div>
                <img
                  src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'
                  alt='watch'
                  className='img-fluid'
                />
              </div>
              <div>
                <img
                  src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'
                  alt='watch'
                  className='img-fluid'
                />
              </div>
              <div>
                <img
                  src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'
                  alt='watch'
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='main-product-details'>
              <div className='border-bottom'>
                <h3 className='product-title'>Designer Watch</h3>
              </div>
              <div className='border-bottom py-3'>
                <p className='product-price'>€395</p>
                <div className='d-flex align-items-center gap-10'>
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor='#ffd700'
                    value={3}
                    edit={false}
                  />
                  <p className='mb-0 t-review'>(2) Reviews</p>
                </div>
                <a className='review-btn' href='#review'>
                  Write a review
                </a>
              </div>
              <div className='py-3'>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Type :</h3>
                  <p className='product-data'>Watch</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Brand :</h3>
                  <p className='product-data'>Seiko</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Category :</h3>
                  <p className='product-data'>Watch</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Tags :</h3>
                  <p className='product-data'>Watch</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Availability :</h3>
                  <p className='product-data'>In Stock</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>SKU :</h3>
                  <p className='product-data'>SKU033</p>
                </div>
                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                  <h3 className='product-heading'>Size :</h3>
                  <div className='d-flex flex-wrap gap-15'>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>
                      S
                    </span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>
                      M
                    </span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>
                      L
                    </span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>
                      XL
                    </span>
                  </div>
                </div>
                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                  <h3 className='product-heading'>Color :</h3>
                  <Color />
                </div>
                <div className='d-flex gap-15 flex-row align-items-center mt-2 mb-3'>
                  <h3 className='product-heading'>Quantity :</h3>
                  <div className=''>
                    <input
                      type='number'
                      name=''
                      min={1}
                      max={10}
                      className='form-control'
                      style={{ width: '70px' }}
                      id=''
                    />
                  </div>
                  <div className='d-flex align-items-center gap-30 ms-5'>
                    <button className='button border-0' type='submit'>
                      Add To Cart
                    </button>
                    <button className='button border-0'>Buy Now</button>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <div>
                    <a href=''>
                      <TbGitCompare className='fs-5 me-2' /> Add To Compare
                    </a>
                  </div>
                  <div>
                    <a href=''>
                      <AiOutlineHeart className='fs-5 me-2' /> Add To Wishlist
                    </a>
                  </div>
                </div>
                <div className='d-flex gap-10 flex-column my-3'>
                  <h3 className='product-heading'>Shipping & Returns :</h3>
                  <p className='product-data'>
                    Free shipping and returns available on all orders! <br /> We
                    ship all domestic orders within
                    <b> 1-3 business days!</b>
                  </p>
                </div>
                <div className='d-flex gap-10 align-items-center my-3'>
                  <h3 className='product-heading'>Product link :</h3>
                  <a
                    href='javascript:void(0)'
                    onClick={() => {
                      copyToClipboard(
                        'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'
                      );
                    }}
                  >
                    Copy product link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='description-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h4>Description</h4>
            <div className='bg-white p-3'>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur minima doloribus tempore minus iste facilis, eligendi
                similique! Fugiat ullam natus accusantium quam illum mollitia.
                Consequatur iure quaerat debitis temporibus incidunt.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='reviews-wrapper pb-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 id='review'>Reviews</h3>
            <div className='review-inner-wrapper'>
              <div className='review-head d-flex justify-content-between align-items-end'>
                <div>
                  <h4 className='mb-2'>Customer Reviews</h4>
                  <div className='d-flex gap-10 align-items-center'>
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor='#ffd700'
                      value={3}
                      edit={false}
                    />
                    <p className='mb-0'>Based on 2 reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a href='' className='text-dark text-decoration-underline'>
                      Write a review
                    </a>
                  </div>
                )}
              </div>
              <div className='review-form py-4'>
                <h4>Write a review</h4>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor='#ffd700'
                      value={3}
                      edit={true}
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
                  <div className='d-flex justify-content-end'>
                    <button className='button border-0'>Submit Review</button>
                  </div>
                </form>
              </div>
              <div className='reviews mt-4'>
                <div className='review'>
                  <div className='d-flex gap-10 align-items-center'>
                    <h6 className='mb-0'>Kris</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor='#ffd700'
                      value={3}
                      edit={false}
                    />
                  </div>
                  <p className='mt-3'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quo, nesciunt dignissimos reprehenderit in suscipit magnam.
                    Optio minima iusto possimus a dolor. Voluptatum, aut earum.
                    Aspernatur exercitationem perspiciatis iure asperiores odit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='popular-wrapper py-2 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>
              <u>Our Popular Products</u>
            </h3>
          </div>
        </div>
        <div className='row'>
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
