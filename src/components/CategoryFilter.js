'use client'
import React from "react";
import {FaUmbrellaBeach} from "react-icons/fa";
import {FaMountain} from "react-icons/fa";
import {GiJungle} from "react-icons/gi";
import {FaCity} from "react-icons/fa";

const CategoryFilter = ({ handleFilter }) => {
  return (
      <div className="flex flex-wrap justify-between">
        <div className="cursor-pointer hover:bg-transparent transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg rounded-lg p-3">
          <FaUmbrellaBeach
            size="5rem"
            className="text-secondary"
            onClick={() => handleFilter('playa')}
          />
          <h2 className="text-secondary font-semibold text-center">Playa</h2>
        </div>
        <div className="cursor-pointer hover:bg-transparent transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg rounded-lg p-3">
          <FaMountain
            size="5rem"
            className="text-secondary"
            onClick={() => handleFilter('montana')}
            />
            <h2 className="text-secondary font-semibold text-center">Montaña</h2>
        </div>
        <div className="cursor-pointer hover:bg-transparent transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg rounded-lg p-3">
          <GiJungle
            size="5rem"
            className="text-secondary"
            onClick={() => handleFilter('selva')}
          />
          <h2 className="text-secondary font-semibold text-center">Selva</h2>
        </div>
        <div className="cursor-pointer hover:bg-transparent transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg rounded-lg p-3">
          <FaCity
            size="5rem"
            className="text-secondary text-center"
            onClick={() => handleFilter('ciudad')}
          />
          <h2 className="text-secondary font-semibold text-center">Ciudad</h2>
        </div>
      </div>
  );
}
  
  export default CategoryFilter;