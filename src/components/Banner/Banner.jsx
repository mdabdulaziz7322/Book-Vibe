import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-3xl">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between items-center py-15">
    <img
      src={bookImage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='p-10 w-130 '>
      <h1 className="text-5xl/normal font-medium mb-7 ">Books to freshen up your bookshelf!</h1>
      <button className="btn btn-primary bg-[#23BE0A]">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;