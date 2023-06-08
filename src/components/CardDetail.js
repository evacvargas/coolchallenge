'use client'
import Image from "next/image";
import data from "../../data.json";
import React, { useEffect, useState } from 'react';
import {BsSuitHeartFill} from "react-icons/bs";
import {LuShare} from "react-icons/lu";
import {BsFillStarFill} from "react-icons/bs"
import Button from "./Button";


const CardDetail = ({ id }) => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const fetchDestinations = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.destinations);
      }, 1000);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const destinations = await fetchDestinations();
        const selected = destinations.find((destination) => destination.id === id);

        setSelectedDestination(selected);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <section className="max-w-[1240px] mx-auto py-16 px-4">
      <div className="px-12 py-9">
        <h1 className="text-4xl font-bold mb-3 text-gray">{selectedDestination?.title}</h1>
        <div className="flex text-gray justify-between">
          <div className="flex gap-12">
            {selectedDestination?.score ? (
              <div className="flex items-center gap-3">
                <BsFillStarFill />
              <p className="text-2xl">{selectedDestination?.score}</p>
              </div>
            ): null}
            {selectedDestination?.location ? (
              <p className="text-2xl">{selectedDestination?.location}</p>
            ): null}
          </div>
          <div className="flex items-center text-2xl gap-8">
            <span className="flex items-center gap-3">
              <BsSuitHeartFill/>
              Guarda
            </span>
            <span className="flex items-center gap-3">
              <LuShare/>
              Comparte
            </span>
          </div>
        </div>
      </div>

      <div className="px-12">
          <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
            <Image
              src={selectedDestination?.mainimage}
              alt={selectedDestination?.title}
              width={500}
              height={500}
              className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
            />
            {selectedDestination?.images.map((image, index) => (
                <Image
                  key={`image-${index}`}
                  src={image?.image}
                  alt="Image"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
            ))}
          </div>
      </div>

      <div className="px-12 py-9">
        <div className="mt-8">
          {selectedDestination?.comments && selectedDestination?.comments.length > 0 ? (
            <ul className=" w-1/3">
              {selectedDestination?.comments.map((comment, index) => (
                <li key={`comment-${index}`} className="bg-white rounded-lg shadow-lg p-5 mb-3">
                  <div className="flex gap-4 mb-4 items-center">
                    <div>
                      <Image
                        src={selectedDestination?.profile}
                        alt={"profile"}
                        width={50}
                        height={50}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                      <p className="font-bold">{comment.user}</p>
                      <p>Junio 2023</p>
                    </div>
                  </div>
                  <p className="font-light text-gray mb-4">{comment.comment}</p>
                  <Button
                  bgColor="primary"
                  textColor="background"
                  text="Agrega un comentario"
                  />
                </li>
                ))}
            </ul>
            ) : (
              <p className="font-light text-gray mb-4">No comments available</p>
            )}
          </div>
      </div>
    </section>
);
};

export default CardDetail;
