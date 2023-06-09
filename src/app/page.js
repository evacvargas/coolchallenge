'use client'
import React, {useState} from "react";
import CardsContainer from '@/components/CardsContainer'
import SearchBar from '@/components/SearchBar'
import Button from "@/components/Button";
import Modal from "@/components/ModalForm";
import data from "../../data.json";
import CategoryFilter from "@/components/CategoryFilter";


export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterReset, setfilterReset] = useState(false);
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

  const handleFilter = (filter) => {
      const filteredDestinations = data.destinations.filter((destination) =>
      destination.category.toLowerCase().includes(filter.toLowerCase())
    );
    setDestinations(filteredDestinations);
    setfilterReset(true)
  };
  const handleResetFilter = () => {
    setDestinations(data.destinations);
    setfilterReset(false)
  }


  return (
    <>
    <SearchBar onSearch={handleSearch}/>
      <div className="flex justify-center mt-20 my-10">
        <Button 
        text="Agrega nuevo destino"
        action={openModal}
        bgColor="primary"
        textColor="background"
        />
        <Modal isOpen={modalIsOpen} onClose={closeModal} />
      </div>
      <div className="py-10 px-12">
        <CategoryFilter handleFilter={handleFilter}/>
      </div>
      <div className="py-10 px-12">
        <CardsContainer dest={destinations}/>
      </div>
      {filterReset ? (
      <div className="py-10 px-12">
        <Button
        action={handleResetFilter}
        bgColor="primary"
        text="Limpiar"
        textColor="white"
        />
      </div>
      ): null}
    </>
  )
}
