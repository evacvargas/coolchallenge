'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {BsSuitHeartFill} from "react-icons/bs";
import {BsFillStarFill} from "react-icons/bs"


const Cards = ({
  image, title, id, score, direction
}) => {
  const stars = [];

  console.log(score)

  const calcScore = ()=> {
    if (score?.length === 0) {
      return 0;
    }

    let suma = 0;
    for (let i = 0; i < score?.length; i++) {
      suma += score[i];
    }

    let promedio = suma / score?.length;
    return Math.round(promedio);
  }

  for (let i = 1; i <= 5; i++) {
    if (i <= calcScore()) {
      stars.push(<BsFillStarFill key={i} color="#ffc107" />);
    } else {
      stars.push(<BsFillStarFill key={i} color="#969695" />);
    }
  }

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
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33.3vw"
          />
          <div className="absolute top-2 right-2">
            <BsSuitHeartFill className="text-secondary text-2xl stroke-1 stroke-white" />
          </div>
        </div>
        <div className="flex justify-between p-3 items-center text-gray font-semibold">
          <p className="text-2xl">
            {title}
          </p>
          {score ? (
              <div className="flex items-center gap-1">
                {stars}
              </div>
            ): null}
        </div>
        <div className="p-3 text-gray font-light">
          <p>{direction}</p>
          <p className="text-secondary font-semibold">100$</p>
        </div>
      </Link>
    </>
  );
}

export default Cards;
