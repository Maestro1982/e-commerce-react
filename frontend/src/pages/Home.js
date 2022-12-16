import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import MetaSeo from '../components/MetaSeo';
import Container from '../components/Container';
import { services } from '../../utils/Data';

const Home = () => {
  return (
    <>
      <MetaSeo title='React-E-Commerce' />
      <Container class1='home-wrapper-1 py-5'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative'>
              <img
                src='images/main-banner-1.jpg'
                alt='main banner'
                className='img-fluid rounded-3'
              />
              <div className='main-banner-content position-absolute'>
                <h4>Supercharged</h4>
                <h5>iPhone S13+ Pro.</h5>
                <p>
                  From €999.00 <br /> or €41.95/month
                </p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative'>
                <img
                  src='images/catbanner-01.jpg'
                  alt='main banner'
                  className='img-fluid rounded-3'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>Best Sale</h4>
                  <h5>Laptops</h5>
                  <p>
                    From €1399.00 <br /> or €59.95/month
                  </p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img
                  src='images/catbanner-02.jpg'
                  alt='main banner'
                  className='img-fluid rounded-3'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>15% Off</h4>
                  <h5>Smart Watches</h5>
                  <p>
                    Shop the latest <br /> bandstyles and colors.
                  </p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img
                  src='images/catbanner-03.jpg'
                  alt='main banner'
                  className='img-fluid rounded-3'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>New Arrival</h4>
                  <h5>iPad AIR</h5>
                  <p>
                    From €599 <br /> or €49.91/month for 12*
                  </p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img
                  src='images/catbanner-04.jpg'
                  alt='main banner'
                  className='img-fluid rounded-3'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>Free Engraving</h4>
                  <h5>Headphones</h5>
                  <p>
                    High-fidelity playback & <br /> ultra-low distortion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              {services?.map((i, j) => {
                return (
                  <div className='d-flex align-items-center gap-15' key={j}>
                    <img src={i.image} alt='services' />
                    <div>
                      <h6>{i.title}</h6>
                      <p className='mb-0'>{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1='home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Camera</h6>
                  <p>10 items</p>
                </div>
                <img src='images/camera.jpg' alt='camera' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 items</p>
                </div>
                <img src='images/tv.jpg' alt='smart tv' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Speaker</h6>
                  <p>10 items</p>
                </div>
                <img src='images/speaker.jpg' alt='speaker' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Headphone</h6>
                  <p>10 items</p>
                </div>
                <img src='images/headphone.jpg' alt='headphone' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Camera</h6>
                  <p>10 items</p>
                </div>
                <img src='images/camera.jpg' alt='camera' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 items</p>
                </div>
                <img src='images/tv.jpg' alt='smart tv' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Speaker</h6>
                  <p>10 items</p>
                </div>
                <img src='images/speaker.jpg' alt='speaker' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Headphone</h6>
                  <p>10 items</p>
                </div>
                <img src='images/headphone.jpg' alt='headphone' />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='featured-wrapper py-2 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>
              <u>Our Featured Products</u>
            </h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1='famous-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img
                src='images/famous-1.webp'
                alt='famous-1'
                className='img-fluid'
              />
              <div className='famous-content position-absolute'>
                <h5>Big screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From €399 or €16.62/month for 24*</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img
                src='images/famous-2.webp'
                alt='famous-2'
                className='img-fluid'
              />
              <div className='famous-content position-absolute'>
                <h5 className='text-secondary'>Studio display</h5>
                <h6 className='text-secondary'>600 nits of brightness.</h6>
                <p className='text-secondary'>27-inch 4K Retina display </p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img
                src='images/famous-3.webp'
                alt='famous-3'
                className='img-fluid'
              />
              <div className='famous-content position-absolute'>
                <h5 className='text-secondary'>Smartphones</h5>
                <h6 className='text-secondary'>iPhone 13 Pro.</h6>
                <p className='text-secondary'>
                  Now in green. From €999.00 or €41.62/month for 24*
                </p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img
                src='images/famous-4.webp'
                alt='famous-4'
                className='img-fluid'
              />
              <div className='famous-content position-absolute'>
                <h5 className='text-secondary'>Home speakers</h5>
                <h6 className='text-secondary'>Room-filling sound.</h6>
                <p className='text-secondary'>
                  From €699 or €116.58/month for 12*
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='special-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>
              <u>Special Offers</u>
            </h3>
          </div>
        </div>
        <div className='row'>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1='marque-wrapper py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src='images/brand-01.png' alt='apple' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-02.png' alt='bose' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-03.png' alt='canon' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-04.png' alt='dell' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-05.png' alt='intel' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-06.png' alt='lg' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-07.png' alt='samsung' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-08.png' alt='sandisk' />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='blog-wrapper py-2 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>
              <u>Our Latest Blogs</u>
            </h3>
          </div>
          <div className='row'>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
