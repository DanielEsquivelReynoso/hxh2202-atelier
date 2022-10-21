import React from 'react';
import styled from 'styled-components';

const StyledCharacteristic = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  font-size: 10px;
`;

const StyledName = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  font-size: 14px
`;

const StyledBar = styled.div`
  grid-area: 2 / 1 / 4 / 6;
`;

const StyledGridArea3 = styled.div`
  grid-area: 4 / 1 / 5 / 2;
`;

const StyledGridArea4 = styled.div`
  grid-area: 4 / 3 / 5 / 4;
`;

const StyledGridArea5 = styled.div`
  grid-area: 4 / 5 / 5 / 6;
`;

const BarContainer = styled.div`
  width: 90%;
  background-color: #f1f1f1;
  background-image:
    linear-gradient(
      to right,
      #f1f1f1,
      #f1f1f1 33%,
      white 33%,
      white 34%,
      #f1f1f1 34%,
      #f1f1f1 65%,
      white 65%,
      white 66%,
      #f1f1f1 66%
    );
  text-align: center;
  margin-top: 10px;

  .slider {
    appearance: none;
  }
`;

const StyledIcon = styled.div`
  display: inline-block;
  width: ${({charsRated}) => { return charsRated * 20}}%;
  // width: 80%;
  height: 100%;
`;



const Characteristic = ({characteristic, charsRated}) => {
  const labels = {
    Size: [
      'A size too small',
      '½ a size too small',
      'Perfect',
      '½ a size too big',
      'A size too wide'
    ],
    Width: [
      'Too Narrow',
      'Slightly narrow',
      'Perfect',
      'Slightly wide',
      'Too Wide'
    ],
    Comfort: [
      'Uncomfortable',
      'Slightly uncomfortable',
      'Ok',
      'Comfortable',
      'Perfect'
    ],
    Quality: [
      'Poor',
      'Below average',
      'Expected',
      'Pretty great',
      'Perfect'
    ],
    Length: [
      'Runs Short',
      'Runs slightly short',
      'Perfect',
      'Runs slightly long',
      'Runs Long'
    ],
    Fit: [
      'Runs Tight',
      'Runs slightly tight',
      'Perfect',
      'Runs slightly long',
      'Runs Long'
    ]
  };

  const presentingValue = Math.round(charsRated * 100) / 100

  return (
    <StyledCharacteristic>
      <StyledName>{characteristic}</StyledName>
      <StyledBar>
        <BarContainer>
          <StyledIcon />
          <span id="pointer">&#9650;</span>
        </BarContainer>
      </StyledBar>
      <StyledGridArea3>
        {labels[characteristic][0]}
      </StyledGridArea3>
      <StyledGridArea4>
        {labels[characteristic][2]}
      </StyledGridArea4>
      <StyledGridArea5>
        {labels[characteristic][4]}
      </StyledGridArea5>
      {/* <span>(Rated by others as: {presentingValue})</span> */}
    </StyledCharacteristic>
  );
};

export default Characteristic;