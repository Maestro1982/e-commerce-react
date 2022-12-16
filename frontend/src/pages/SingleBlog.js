import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import MetaSeo from '../components/MetaSeo';
import { CgArrowLongLeft } from 'react-icons/cg';
import blog from '../images/blog-1.jpg';
import Container from '../components/Container';

const SingleBlog = () => {
  return (
    <>
      <MetaSeo title='Dynamic Blog Name' />
      <BreadCrumb title='Dynamic Blog Name' />
      <Container class1='blog-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='single-blog-card'>
              <Link to='/blogs' className='d-flex align-items-center gap-10'>
                <CgArrowLongLeft className='fs-4' /> Go back to blogs
              </Link>
              <h3 className='blog-title'>A Beautiful Sunday Morning</h3>
              <img src={blog} alt='blog' className='img-fluid w-100 my-4' />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, ipsam ex id voluptatum, rerum molestiae corporis
                alias vero assumenda aut quae obcaecati mollitia ut non
                doloremque optio aspernatur aliquam dolorum.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
