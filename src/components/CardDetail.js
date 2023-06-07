'use client'
import Image from "next/image";
import data from "../../data.json";
import React, { useEffect, useState } from 'react';
import GoBackArrow from "./GoBackArrow";


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
  <div className="min-h-screen flex justify-center items-center">
    <GoBackArrow/>

    {selectedDestination && (
      <div className="bg-gray p-9 w-2/3">
      <div className="bg-background p-10 rounded-md shadow-lg">
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-2">{selectedDestination.title}</h1>
          <p className="text-gray-700">{selectedDestination.description}</p>
        </div>

        <div className="flex flex-wrap h-80">
          <div className="w-1/2 overflow-hidden h-full">
            <Image
              src={selectedDestination.mainimage}
              alt={selectedDestination.title}
              width={400}
              height={300}
              className="object-cover"
            />
          </div>
          <div className={`w-1/2 h-full grid grid-cols-${selectedDestination.images.length}`}>
            {selectedDestination.images.map((image, index) => (
              <div key={`image-${index}`} className="mb-4">
                <Image
                  src={image.image}
                  alt="Image"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Comments</h2>
          {selectedDestination.comments && selectedDestination.comments.length > 0 ? (
            <ul>
              {selectedDestination.comments.map((comment, index) => (
                <li key={`comment-${index}`} className="mb-4">
                  <p className="font-bold">{comment.user}</p>
                  <p>{comment.comment}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No comments available</p>
          )}
        </div>
      </div>
      </div>
    )}
  </div>
);
};

export default CardDetail;
