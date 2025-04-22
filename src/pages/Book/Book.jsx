import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';

const Book = ({book}) => {
    
    return (
       <Link to={`/bookDetails/${book.bookId}`}>
        <div className="card bg-base-100  shadow-sm  border-1 border-gray-300 p-6">
  <figure className="px-10 pt-5 pb-5  bg-gray-200  rounded-2xl ml-3  " >
    <img 
      src={book.image}
      alt="Shoes"
      className="rounded-xl h-50" />
  </figure>
  <div className="card-body ">
  <div className='mb-2' >
  <button className="btn btn-xs btn-soft btn-success  mr-5 rounded-full p-3 ">{book.tags[0]}</button>
  <button className="btn btn-xs btn-soft btn-success rounded-full p-3">{book.tags[1]}</button>
  </div>
    <h2 className="card-title text-2xl">{book.bookName}</h2>
    <p className='text-lg mb-1 mt-2'>By:  {book.author}</p>
    <hr className='pt-2 text-gray-400 border-dashed' />
    <div className="flex items-center mt-2 mb-0">
      <p className='text-lg'>{book.category}</p>
      <div className='flex gap-2'>
        <p className='text-lg'>{book.rating}</p>
        <CiStar size={25} />

      </div>
    </div>
  </div>
</div>
       </Link>
    );
};

export default Book;