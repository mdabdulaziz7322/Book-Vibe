import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDb'
import { SlCalender } from "react-icons/sl";
import { IoMdContacts } from "react-icons/io";
import { LuNotebookText } from "react-icons/lu";

const ReadList = () => {

    const [readList, setReadList] = useState([]);

    const data = useLoaderData();
    console.log(data);

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedBookData = storedBookData.map(id => parseInt(id));
        const readBooks = data.filter(book => convertedBookData.includes(book.bookId));
        setReadList(readBooks);
    }
        , [])

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read Books </Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    {
                        readList.map(book => (
                            <div key={book.bookId} className='mt-10 flex gap-4 border-1 border-gray-300 p-3 rounded-3xl'>
                                <div className=' bg-[#1313130D]  ml-2 rounded-3xl '>
                                    <img className='w-50 h-50  px-10 pt-15 ' src={book.image} alt="" />
                                </div>
                                <div className=' ml-5 rounded-3xl'>
                                    <h2 className="card-title text-3xl mb-3">{book.bookName}</h2>
                                    <p className='text-lg mt-2 mb-3'>By:  {book.author}</p>
                                    <div className='flex mt-3 mb-5'>
                                        <p className='font-bold'>Tags: </p>
                                        <div>
                                            <button className="btn btn-xs btn-soft btn-success text-green-600  text-base  mr-5 rounded-full p-4 ml-3 "> {book.tags[0]}</button>
                                            <button className="btn btn-xs btn-soft btn-success text-green-600  text-base rounded-full p-3">{book.tags[1]}</button>
                                        </div>
                                        <div className='flex gap-2 ml-5 items-center'>
                                            <SlCalender />
                                            <p>Year of Publishing: {book.yearOfPublishing}</p>
                                        </div>
                                    </div>
                                    <div className='flex mt-3 mb-5'>
                                        <div className='flex gap-2 items-center'>
                                            <IoMdContacts size={25} />
                                            <p>Publisher: {book.publisher}</p>
                                        </div>
                                        <div className='flex gap-2 ml-5 items-center'>
                                            <LuNotebookText size={20} />
                                            <p>Page: {book.totalPages}</p>
                                        </div>
                                    </div>
                                    <hr className='pt-2 text-gray-400 border-dashed w-210 ' />
                                    <div className='mt-2 mb-2'>
                                    <button className="btn btn-xs btn-soft bg-[#328EFF26] text-blue-500  text-sm font-light  mr-5 rounded-full p-4 ">
                                        Category: {book.category}</button>
                                    <button className="btn btn-xs btn-soft bg-[#FFAC3326]  text-[#FFAC33]  text-sm font-light mr-5  rounded-full p-4">
                                        Rating: {book.rating}</button>
                                        <button className="btn btn-xs btn-soft bg-[#23BE0A] text-white  text-sm font-light rounded-full p-4 ">
                                        <Link to={`/bookDetails/${book.bookId}`}>View Details</Link>
                                        </button>
                                </div>
                                </div>
                                

                            </div>
                        ))
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;