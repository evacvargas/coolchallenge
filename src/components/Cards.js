'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Cards = ({
  image, description, title, id 
}) => {

  return (
    <>
      <Link href={`/details/${id}`} className="bg-background rounded-lg shadow-lg h-96 flex flex-col hover:bg-hover transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"  
      role="button"
      >
        <div style={{ position: 'relative', width: '100%', height: '60%' }}>
          <Image 
          src={image}
          alt={title}
          fill={true}
          class="rounded-t-lg object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 p-3">
          <p className="text-secondary font-semibold">
            {title}
          </p>
          <p>
            {description}
          </p>
        </div>
      </Link>
    </>
  );
}

export default Cards;
