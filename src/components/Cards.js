'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

const Cards = ({
  image, title, id, score, direction
}) => {

  return (
    <>
      <Link href={`/details/${id}`}
      className="bg-white rounded-lg shadow-lg flex flex-col hover:bg-hover transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"  
      role="button"
      >
        <div className="relative h-60 w-full">
          <Image 
          src={image}
          alt={title}
          fill={true}
          class="rounded-t-lg object-cover"
          />
        </div>
        <div className="flex gap-3 p-3 items-center text-primary font-semibold">
          <p className="text-2xl">
            {title}
          </p>
          <p>{score}</p>
        </div>
        <div className="p-3 text-gray font-light">
          <p>{direction}</p>
        </div>
        <div className="flex justify-center">
          <Button
            text="100$"
            textColor="gray"
          />
      </div>
      </Link>
    </>
  );
}

export default Cards;
