/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/29/22
overview
get request to /products, /products/:products_id, /products/:product_id/styles, /products:product_id/related --> do we need different get requests for all these?
overview gets product details and ID from App's product catalog
*/

import React from "react";
import { render } from "react-dom";
import ImageGallery from './imageGallery.jsx';
import AverageReview from './averageReview.jsx';
import ProductInfo from './productInfo.jsx';
import Share from './share.jsx';
import StyleSelector from './styleSelector.jsx';
import AddToCart from './addToCart.jsx';
import ProductDescription from './productDescription.jsx';



function Overview() {
  return (
    <section id='Overview' style={{ backgroundColor: 'AliceBlue'}}>
      <ImageGallery />
      <AverageReview />
      {/* <ProductInfo />
      <Share />
      <StyleSelector />
      <AddToCart />
      <ProductDescription /> */}
    </section>
  );
}

export default Overview;