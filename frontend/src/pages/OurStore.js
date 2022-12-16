import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import MetaSeo from '../components/MetaSeo';
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import Container from '../components/Container';

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <MetaSeo title='Our Store' />
      <BreadCrumb title='Our Store' />
      <Container class1='store-product-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-3'>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Shop By Categories</h3>
              <ul className='ps-0'>
                <li>Camera</li>
                <li>Laptop</li>
                <li>Tv</li>
                <li>Watch</li>
              </ul>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Filter By</h3>
              <div className='subtitle'>Availabilty</div>
              <div>
                <div className='form-check'>
                  <input
                    type='checkbox'
                    name=''
                    id=''
                    className='form-check-input'
                  />
                  <label className='form-check-label' htmlFor=''>
                    In Stock (1)
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    type='checkbox'
                    name=''
                    id=''
                    className='form-check-input'
                  />
                  <label className='form-check-label' htmlFor=''>
                    Out Of Stock (0)
                  </label>
                </div>
              </div>
              <div className='subtitle'>Price</div>
              <div className='d-flex align-items-center gap-10'>
                <div className='form-floating mb-3'>
                  <input
                    type='email'
                    className='form-control'
                    id='floatingInput'
                    placeholder='From'
                  />
                  <label htmlFor='floatingInput'>From</label>
                </div>
                <div className='form-floating mb-3'>
                  <input
                    type='email'
                    className='form-control'
                    id='floatingInput-2'
                    placeholder='To'
                  />
                  <label htmlFor='floatingInput-2'>To</label>
                </div>
              </div>
              <div className='subtitle'>Colors</div>
              <div>
                <div>
                  <Color />
                </div>
              </div>
              <div className='subtitle'>Size</div>
              <div>
                <div className='form-check'>
                  <input
                    type='checkbox'
                    name=''
                    id='color-1'
                    className='form-check-input'
                  />
                  <label className='form-check-label' htmlFor='color-1'>
                    S (2)
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    type='checkbox'
                    name=''
                    id='color-2'
                    className='form-check-input'
                  />
                  <label className='form-check-label' htmlFor='color-2'>
                    M (2)
                  </label>
                </div>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Product Tags</h3>
              <div>
                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                  <span className='badge rounded-3 py-2 px-3'>Headphone</span>
                  <span className='badge rounded-3 py-2 px-3'>Mobile</span>
                  <span className='badge rounded-3 py-2 px-3'>Laptop</span>
                  <span className='badge rounded-3 py-2 px-3'>Tablet</span>
                </div>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Random Product</h3>
              <div>
                <div className='random-products d-flex mb-3'>
                  <div className='w-50'>
                    <img
                      src='images/watch.jpg'
                      alt='watch'
                      className='img-fluid'
                    />
                  </div>
                  <div className='w-50'>
                    <h5>Smart Watch 7th Generation</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor='#ffd700'
                      value={3}
                      edit={false}
                    />
                    <b>€199</b>
                  </div>
                </div>
                <div className='random-products d-flex'>
                  <div className='w-50'>
                    <img
                      src='images/watch.jpg'
                      alt='watch'
                      className='img-fluid'
                    />
                  </div>
                  <div className='w-50'>
                    <h5>Smart Watch 7th Generation</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor='#ffd700'
                      value={3}
                      edit={false}
                    />
                    <b>€199</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-9'>
            <div className='filter-sort-grid mb-4'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-10'>
                  <p className='mb-0 d-block' style={{ width: '100px' }}>
                    Sort By:
                  </p>
                  <select name='' id='' className='form-control form-select'>
                    <option value='manual'>Featured</option>
                    <option value='best-selling'>Best Selling</option>
                    <option value='title-ascending'>Alphabetically, A-Z</option>
                    <option value='title-descending'>
                      Alphabetically, Z-A
                    </option>
                    <option value='price-ascending'>Price, low to high</option>
                    <option value='price-descending'>Price, high to low</option>
                    <option value='created-ascending'>Date, old to new</option>
                    <option value='created-descending'>Date, new to old</option>
                  </select>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <p className='total-products mb-0'>21 Products</p>
                  <div className='d-flex gap-10 align-items-center grid'>
                    <img
                      onClick={() => setGrid(3)}
                      src='images/gr4.svg'
                      alt='grid'
                      className='d-block img-fluid'
                    />
                    <img
                      onClick={() => setGrid(4)}
                      src='images/gr3.svg'
                      alt='grid'
                      className='d-block img-fluid'
                    />
                    <img
                      onClick={() => setGrid(6)}
                      src='images/gr2.svg'
                      alt='grid'
                      className='d-block img-fluid'
                    />
                    <img
                      onClick={() => setGrid(12)}
                      src='images/gr.svg'
                      alt='grid'
                      className='d-block img-fluid'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='products-list pb-5'>
              <div className='d-flex flex-wrap gap-10'>
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
