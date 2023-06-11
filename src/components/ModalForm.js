'use client'
import React, { useState } from "react";
import data from "../../data.json";
import {RiCloseLine} from 'react-icons/ri';

const Modal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [cost, setCost] = useState('');
  const [address, setAddress] = useState('');
  const [category, setCategory] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
      const fileArray = Array.from(images).map((file) => ({
        image: '/'+file.name,
    }));

    const lastId = data.destinations[data.destinations.length - 1]?.id || 0;
    const newId = lastId + 1;

    const newDestination = {
      id: newId,
      title: name,
      description,
      cost,
      address,
      category,
      mainimage: fileArray[0]?.image,
      images: fileArray,
      score: [],
      comments: []
    }

    data.destinations.push(newDestination);

    saveDataToJson(data)

    onClose();
  };

  const saveDataToJson = async (data) => {
    try {
      const response = await fetch('/api/saveDataToJson', {
        method: 'POST',
        body: JSON.stringify(data)
      });
  //lo ideal es que esto se muestre en un toast
      if (response.ok) {
        setImages([])
        setName('')
        setDescription('');
        setCost('');
        setAddress('');
        setCategory('');
      } else {
        console.error('Error al guardar los datos en el archivo JSON.');
      }
    } catch (error) {
      console.error('Error al guardar los datos en el archivo JSON:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute w-full bg-gray bg-opacity-30 h-full backdrop-blur z-1"/>
      <div className="bg-background border border-gray p-5 rounded-lg z-50 absolute top-8 max-h-screen overflow-auto">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold text-gray">Agrega tu destino</h2>
          <button
            className="text-gray hover:text-secondary"
            onClick={onClose}
          >
            <RiCloseLine size="2rem"/>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block mb-1">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border-gray border rounded focus:outline-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="categoria" className="block mb-1">
              Categoría:
            </label>
            <select
              id="categoria"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border-gray border rounded"
            >
              <option value="">Selecciona una categoría</option>
              <option value="selva">Selva</option>
              <option value="montana">Montaña</option>
              <option value="ciudad">Ciudad</option>
              <option value="playa">Playa</option>
            </select>
          </div>
          <div className="mb-4">
          <label htmlFor="direccion" className="block mb-1">
              Direccion:
            </label>
            <input
              type="text"
              id="direccion"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border-gray border rounded focus:outline-primary"
            />
          </div>
          <div className="mb-4">
          <label htmlFor="cost" className="block mb-1">
              Precio:
            </label>
            <input
              type="text"
              id="cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="w-full p-2 border-gray border rounded focus:outline-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="descripcion" className="block mb-1">
              Descripción:
            </label>
            <textarea
              id="descripcion"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border-gray border rounded focus:outline-primary"
              maxLength={300}
            />
            <p className="text-xs text-gray">{description.length}/300 caracteres</p>
          </div>
          <div className="mb-4">
            <label htmlFor="imagenes" className="block mb-1">
              Imágenes:
            </label>
            <input
              type="file"
              id="imagenes"
              onChange={(e) => setImages(e.target.files)}
              multiple
              className="w-full p-2 border-gray border rounded focus:outline-primary"
            />
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-hover hover:text-gray py-2 px-4 rounded text-background font-semibold"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
