import React from 'react';
import { FiMapPin, FiSearch } from 'react-icons/fi';

const Banner = ({ title,location, handleInput1, query, handleInput, handleClick }) => {

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14'>
      <h1 className='text-5xl font-bold text-primary mb-3'>Find Your Dream Job Today with <span className='text-blue-800'>Job Horizon</span></h1>
      <p className='text-lg text-black/70 mb-8'>
        Opportunities Await: Kickstart Your Job Search Now and Uncover Your Perfect Career Fit
      </p>

      <form>
        <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
          <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-400 md:w-1/2 w-full'>
            <FiSearch className='absolute mt-2.5 ml-2 text-gray-400' />
            <input
              onChange={handleInput}
              type="text"
              name="title"
              id="title"
              placeholder="Looking for a Specific Job? Enter Title Here"
              className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-grey-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'
              defaultValue={title}
            />
          </div>
          <div className='flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-400 md:w-1/2 w-full'>
            <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400' />
            <input
              onChange={handleInput1}
              type="text"
              name="title"
              id="title"
              placeholder="Location"
              className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-grey-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'
              defaultValue={location}
            />
            <button disabled = "true" className='cursor-pointer bg-blue-500 py-2 px-8 text-white md:rounded-s-none rounded'>
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Banner;
