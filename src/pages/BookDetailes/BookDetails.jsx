import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDb } from '../../utility/addToDb';

const BookDetails = () => {
    const bookData = useLoaderData()
    const { bookId } = useParams();
    const convertedId = parseInt(bookId)
    const singleBook = bookData.find(book => book.bookId === convertedId);
    
    const handleMarkAsRead = (id) =>{
        addToStoredDb(id)
    }

    return (
        <div className='mt-10 flex gap-4'>
            <div className='w-[50%] bg-[#1313130D] h-160  ml-2 rounded-3xl '>
                <img className='w-100 h-130  mx-auto px-10 pt-15 ' src={singleBook.image} alt="" />
            </div>
            <div className='w-[50%]  h-150  ml-5 rounded-3xl'>
                <h2 className="card-title text-3xl mb-3">{singleBook.bookName}</h2>
                <p className='text-lg mt-2 mb-3'>By:  {singleBook.author}</p>
                <hr className='pt-2 text-gray-400 border-dashed' />
                <p className='text-lg mb-3'>{singleBook.category}</p>
                <hr className='pt-2 text-gray-400 border-dashed' />
                <p className=''><span className='font-bold'>review</span> : {singleBook.review}</p>
                <div className='mb-2' >
                    <div className='flex mt-3 mb-5'>
                        <p className='font-bold'>Tags: </p>
                        <div>
                            <button className="btn btn-xs btn-soft btn-success text-green-600  text-base  mr-5 rounded-full p-3 "> {singleBook.tags[0]}</button>
                            <button className="btn btn-xs btn-soft btn-success text-green-600  text-base rounded-full p-3">{singleBook.tags[1]}</button>
                        </div>
                    </div>
                    <hr className='pt-2 mb-4 text-gray-400 border-dashed' />
                    <div className='flex gap-15'>
                        <p className=''>Number of Pages:</p>
                        <p className='font-bold'>{singleBook.totalPages}</p>
                    </div>
                    <div className='flex gap-29'>
                        <p className=''>Publisher:</p>
                        <p className='font-bold'>{singleBook.publisher}</p>
                    </div>
                    <div className='flex gap-13'>
                        <p className=''>Year of Publishing:</p>
                        <p className='font-bold'>{singleBook.yearOfPublishing}</p>
                    </div>
                    <div className='flex gap-34 mb-5'>
                        <p className=''>Rating:</p>
                        <p className='font-bold'>{singleBook.rating}</p>
                    </div>
                </div>
                <button onClick= { () => handleMarkAsRead(bookId)} className="btn mr-7 border-1 border-gray-400 p-5">Read</button>
                <button className="btn bg-[#50B1C9] text-white">Wishlist</button>


            </div>
        </div>
    );
};

export default BookDetails;