import React from 'react';
import { useRouter } from 'next/router';

const GoBackArrow = () => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      ATRAS
    </button>
  );
};

export default GoBackArrow;
