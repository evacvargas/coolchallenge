'use client';
import React from 'react';
// import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Cards = ({
  image, description, title, id 
}) => {
  const router = useRouter();

  const handleCardClick = ( ) => {
    router.push(`/Details/${id}`);
  };

  return (
    <>
      <div className="rounded-lg bg-background h-72 flex flex-col hover:bg-hover transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"  
      onClick={handleCardClick}
      role="button"
      >
        <div style={{ position: 'relative', width: '100%', height: '50%' }}>
          <Image 
          src={image}
          alt={title}
          fill={true}
          class="rounded-t-lg"
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
      </div>
    </>
  );
}

// Cards.defaultProps = {
//   background: '',
//   avatar: '',
//   title: '',
//   description: '',
// };

// Cards.propTypes = {
//   background: PropTypes.string,
//   avatar: PropTypes.string,
//   title: PropTypes.string,
//   description: PropTypes.string,
// };

export default Cards;
