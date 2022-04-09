import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Stars from './Stars.jsx';
import Ratings from './Ratings.jsx';
// import { averageRating, ones } from './oneMeta.js';

const HeaderRating = ({ distribution }) => {

  console.log('props inside of header rating: ', distribution);

  const [avgRatingData, setAvgRatingData] = useState({ data:[], avgRating: 0 })

  useEffect(() => {


    const data = {};
    let total = 0;
    let weightedSum = 0;

    for (let i = 0; i < 5; i++) {
      const distributionValue = distribution?.[i + 1] || "0";
      data[i + 1] = distributionValue;
      total = total + parseInt(distributionValue);
      weightedSum = weightedSum + (parseInt(distributionValue) * (i+1))
    }
    let avgRating = weightedSum / total;
    console.log('avgRating: ', avgRating);
    let avgRatingRounded = parseInt((Math.round(avgRating * 4)/4).toFixed(2));
    console.log('avgRatingRounded: ', avgRatingRounded);

    setAvgRatingData({ data, avgRating });
  }, [distribution])

  return (
    <>
      <div className="HeaderRating"> Header Rating Component Here </div>
      <div>Overall Rating: 4</div>
      <Stars rating={avgRatingData.avgRating} isReadOnly onClick={(rating) => console.log('The rating', rating)}/>
    </>
  )
}

export default HeaderRating;