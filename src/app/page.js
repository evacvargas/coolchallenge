'use client'
import React, {useState} from "react";
import CardsContainer from '@/components/CardsContainer'
import SearchBar from '@/components/SearchBar'
import Button from "@/components/Button";
import Modal from "@/components/ModalForm";
import data from "../../data.json";


export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [destinations, setDestinations] = useState(data.destinations);


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);

    if (!newSearchTerm || newSearchTerm == '') {
      setDestinations(data.destinations);
    }else{
      const filteredDestinations = data.destinations.filter((destination) =>
      destination.title.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setDestinations(filteredDestinations);
    }
  };

  return (
    <>
    <SearchBar onSearch={handleSearch}/>
      <div className="flex justify-center mt-20 my-10">
        <Button 
        text="Agrega nuevo destino"
        action={openModal}
        />
        <Modal isOpen={modalIsOpen} onClose={closeModal} />
      </div>
      <div className="py-10 px-12">
        <CardsContainer dest={destinations}/>
      </div>
    </>
  )
}
