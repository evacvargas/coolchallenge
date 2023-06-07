'use client'
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <form className="flex items-center">
      <input
        type="text"
        placeholder="Busca tu destino..."
        value={searchTerm}
        onChange={handleInputChange}
        className="px-4 py-2 border border-gray rounded-l-md focus:outline-none"
      />
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-hover transition-colors text-background"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
