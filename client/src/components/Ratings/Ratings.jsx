import React, { useState, useEffect } from 'react';
import ProductBreakdown from './ProductBreakdown.jsx';
import { HeaderRating } from './HeaderRating.jsx';
import styled from 'styled-components';
import Distribution from './Distribution.jsx';
const request = require('../Request.js');

const StyledHeaderRating = styled.div`
  // padding: 0.5em;
  // margin: 0.5em;
  // color: palevioletred;
  // background: papayawhip;
  // border: 1px solid black;
  // border-radius: 5px;
`;

const StyledDistrubution = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const StyledProductBreakdown = styled.div`
  width: 100%;
  margin-right: 10px;
`;



const Ratings = (props) => {
  const [meta, setRatings] = useState();
  const [metaChar, setMetaChar] = useState()

  useEffect(() => {
    const fetchMetaData = async() => {

      const meta = await request.getMetaReviews(props.product.id);
      const metasRatings = meta.data.ratings;
      const metaChars = meta.data.characteristics;
      setMetaChar(metaChars)
      setRatings(metasRatings);
    }

    fetchMetaData();

  }, [])


  useEffect(()=>{
    localStorage.setItem('ratings', JSON.stringify(meta))
  }, [meta])

  useEffect(()=>{
    localStorage.setItem('characteristics', JSON.stringify(metaChar))
  }, [metaChar])


  return (
    <>
      <StyledHeaderRating>
        <HeaderRating distribution={meta}/>
      </StyledHeaderRating>
      <StyledDistrubution>
        <Distribution distribution={meta}/>
      </StyledDistrubution>
      <StyledProductBreakdown>
        <ProductBreakdown metaChar={metaChar}/>
      </StyledProductBreakdown>
    </>
  )
}

export default Ratings;