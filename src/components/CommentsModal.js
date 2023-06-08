import React, { useState } from 'react';
import data from "../../data.json";
import Button from './Button';

const Modal = ({ isOpen, onClose, id }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    const value = e.target.value;
    if (value.length <= 300) {
      setComment(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
        user: name,
        comment
      }
    
    data.destinations.map((dest)=>{
      if( dest.id === id) {
        dest.comments.push(newComment);
      }
    })

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
        setName('')
        setComment('');
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
      <div className="absolute w-full h-full z-0">
        <div className="bg-gray bg-opacity-30 h-full backdrop-blur" />
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg relative z-10">
        <h2 className="text-xl text-primary font-bold mb-4">Agregar comentario</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 text-primary">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block mb-1 text-primary">Comentario:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={handleCommentChange}
              className="border border-gray-300 p-2 rounded w-full"
              maxLength={300}
            />
            <p className="text-xs text-gray">{comment.length}/300 caracteres</p>
          </div>
          <div className="flex justify-center">
            <Button
              action={onClose}
              bgColor="white"
              text="Cancelar"
            />
            <Button 
              action={handleSubmit}
              bgColor="primary"
              text="Guardar"
              textColor="white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
