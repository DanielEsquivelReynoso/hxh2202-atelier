import React, { useState, useEffect } from "react";
import DistributionItem from "./DistributionItem.jsx";
import Ratings from "./Ratings.jsx";
import styled from "styled-components";



const Distribution = ({ distribution }) => {

  const [distributionData, setDistributionData] = useState({ data: [], total: 0});

  useEffect(() => {


    const data = {}
    let total = 0

    for (let i = 0; i < 5; i++) {
      const distributionValue = distribution?.[i + 1] || "0";
      data[i + 1] = distributionValue;
      total = total + parseInt(distributionValue);
    }
    setDistributionData({ data, total });
  }, [distribution])

  return (
    <>
      {
        Object.entries(distributionData.data)?.slice(0).reverse().map(([key, value]) => {
          return <DistributionItem key={key} stars={key} value={value} max={distributionData.total} />
        })
      }
    </>
  );
};

export default Distribution;
