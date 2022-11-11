import React from 'react';
import Star from './Star.jsx';
import {AiOutlineArrowRight} from 'react-icons/ai';
import CataProduct from './CataProduct.jsx';
import styled from 'styled-components';

const Container = styled.div`
	width: 100vm;
	display: grid;
	grid-template-columns: repeat(4, 420px);
	gtif-template-rows: repeat(4, 560px);
	margin:5px;
`

const Catalog = ({selector, allProducts})=>{


  return (
		<Container>
			{
				allProducts &&
				allProducts.map((card, index) =>
					<CataProduct
						key={index}
						selector={selector}
						card={card}
					/>
				)
			}
		</Container>
  )
};

export default Catalog;
