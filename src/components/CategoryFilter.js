'use client'
import React from "react";
import {FaUmbrellaBeach} from "react-icons/fa";
import {FaMountain} from "react-icons/fa";
import {GiJungle} from "react-icons/gi";
import {FaCity} from "react-icons/fa";

const CategoryFilter = () => {
//Opcionales: Este es el componente que filtra por categorias
  return (
      <div className="flex justify-between">
        <div>
          <FaUmbrellaBeach size="5rem" className="text-secondary"/>
        </div>
        <div>
          <FaMountain size="5rem" className="text-secondary"/>
        </div>
        <div>
          <GiJungle size="5rem" className="text-secondary"/>
        </div>
        <div>
          <FaCity size="5rem" className="text-secondary"/>
        </div>
      </div>
  );
}
  
  export default CategoryFilter;