import React from 'react';
import Link from 'next/link';
import {MdArrowBackIosNew} from 'react-icons/md';

const GoBackArrow = () => {

  return (
    <Link href={"/"}>
      <MdArrowBackIosNew/>
    </Link>
  );
};

export default GoBackArrow;
