'use client'
import React from "react";
import Cards from "./Cards";


const CardsContainer = ({dest}) => {

  return (
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dest.map((destination) => (
          <Cards
            key={destination.id}
            id={destination.id}
            image={destination.mainimage}
            title={destination.title}
            description={destination.description}
          />
        ))}
      </div>
  );
}
  
  export default CardsContainer;