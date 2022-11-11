
import React from 'react';
import { IoIosStarOutline } from 'react-icons/io';

const Star = (props)=>{
  return (
    <span>
      {Array(5).fill(<IoIosStarOutline />)}
    </span>
  )
};

export default Star;