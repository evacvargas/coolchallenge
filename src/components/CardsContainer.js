'use client'
import React, {useState} from "react";
import Cards from "./Cards";
import data from "../../data.json";
import Button from "./Button";
import ModalForm from "./ModalForm";


const CardsContainer = () => {
  const destinations = data.destinations;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex flex-col-reverse py-24 px-24 bg-gray justify-center gap-14 align-middle">
      <div className="max-w-4xl mx-auto grid gap-4 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 box-border">
        {destinations.map((destination) => (
          <Cards
            key={destination.id}
            id={destination.id}
            image={destination.image}
            title={destination.title}
            description={destination.description}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-4">
          <Button 
          text="Agrega nuevo destino"
          action={openModal}
          />
        <ModalForm isOpen={modalIsOpen} onClose={closeModal} />
      </div>

    </div>
  );
}
  
  export default CardsContainer;