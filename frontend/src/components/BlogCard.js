import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <div className='blog-card'>
      <div className='card-image'>
        <img src='images/blog-1.jpg' alt='blog' className='img-fluid w-100' />
      </div>
      <div className='blog-content'>
        <p className='date'>7 Dec 2022</p>
        <h5 className='title'>A beautiful sunday morning</h5>
        <p className='desc'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
          omnis. Tenetur ab natus nesciunt quisquam. Voluptas debitis quo sed
          possimus numquam quis adipisci doloremque accusantium labore tenetur
          aliquid, facere laudantium.
        </p>
        <Link to='/blog/id' className='button'>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
