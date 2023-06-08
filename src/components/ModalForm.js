'use client'
import React, { useState } from "react";
import data from "../../data.json";
import {RiCloseLine} from 'react-icons/ri';

const Modal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

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
      mainimage: fileArray[0]?.image,
      images: fileArray
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
      <div className="bg-background border border-gray p-5 rounded-lg z-50">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold text-gray">Agrega tu destino</h2>
          <button
            className="text-gray hover:text-secondary"
            onClick={onClose}
          >
            <RiCloseLine/>
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
              className="w-full p-2 border-gray border rounded"
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
              className="w-full p-2 border-gray border rounded"
            />
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
              className="w-full p-2 border-gray border rounded"
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
