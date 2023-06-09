'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Wallpaper from '../../public/Wallpaper.jpg'
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ onSearch, searchTerm }) => {

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    onSearch(newSearchTerm);
  };

  return (
    <div className='w-full h-72 relative'>
      <div style={{width: '100%', height: '60%'}}>
        <Image
        src={Wallpaper}
        fill={true}
        alt="wallpaper"
        className='object-cover blur-sm brightness-50'
        />
      </div>
      <div className="flex items-center justify-center absolute top-1/2 transform -translate-y-1/2 w-full flex-col gap-8">
        <div className='flex flex-col gap-3 text-center'>
          <h1 className="font-semibold text-5xl text-background xs:text-">A donde quieres ir?</h1>
          <p className="text-xl text-background">Explora los mejores destinos del mundo</p>
        </div>
        <form className="flex items-center justify-center w-full">
          <input
            type="text"
            placeholder="Busca tu destino..."
            value={searchTerm}
            onChange={handleInputChange}
            className="px-4 py-2 rounded-l-md focus:outline-primary h-12 w-2/3"
          />
          <span className='px-4 py-2 rounded-r-md focus:outline-none bg-primary h-12 flex items-center'>
            <BsSearch className="text-white stroke-2"/>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
