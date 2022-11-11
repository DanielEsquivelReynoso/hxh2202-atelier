import React from 'react';
import Star from './Star.jsx';
import { AiOutlineArrowRight } from 'react-icons/ai';
import styled from 'styled-components';
import Logo from '../../assets/Logo.png';
import { useParams, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const ProductContainer = styled.div`
heights: 650px;
width: 420px;
display: flex;
font-family:sans-serif;
`
const ProductWrapper = styled.div`
float: left;
width: 25%;
padding: 15px;
align-items:center;
flex-basis: 25%;

`
const ProductImage = styled.img`
width:400px;
boder-radius: 12px;
min-height: 520px;
max-height: 520px;
object-fit: cover;
`
const ProductCategory = styled.div`
margin-top:5px;
height:24px;
margin-bottom:6px;
`
const ProductName = styled.h4`
margin-top:5px;
height:24px;
margin-bottom:6px;
`
const ProductPrice = styled.p`
margin-top:5px;
margin-bottom:10px;
`
const ProductRating = styled.div`
margin-bottom: 2px;
padding-top:5px;
`


function CataProduct ({selector, card}) {
	let navigate = useNavigate();
	console.log('card in CataProduct: ', card);
	return (
		<ProductContainer onClick = {()=>{selector(card), navigate(`/product/${card.id}`)}}>
			<ProductWrapper>
				<ProductImage src={card.style[0] ? card.style[0].photos[0].url : Logo}/>
				<ProductCategory>
					{card.category}
				</ProductCategory>
				<ProductName>
					{card.name}
				</ProductName>
				<ProductPrice>
					<span>${card.style[0] ? card.style[0].original_price : '9999'}</span>
				</ProductPrice>
				<div className="rating">
					<Star />
				</div>
			</ProductWrapper>
		</ProductContainer>
  )

};

export default CataProduct;