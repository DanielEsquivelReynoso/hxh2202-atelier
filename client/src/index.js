/*
Hunter-X-Hunter Front-End Capstone
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/29/22
*/

import React, {Suspense} from 'react';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import styled, {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles} from './assets/themes.js';
import {getProducts, getProductDetails, getProductStyles} from './components/Request.js';
import Catalog from './components/Catalog/Catalog.jsx';
import RelatedItems from './components/RelatedItems/RelatedItems.jsx';
import {AiOutlineShoppingCart} from 'react-icons/ai';
// import Overview from './components/Overview/Overview.jsx';
import 'regenerator-runtime/runtime';
const Details = React.lazy(()=>import ('./components/Details.jsx'));
const request = require('./components/Request.js');
import Overview from './components/Overview/Overview.jsx';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import Modal from './components/RatingsAndReviews/Modal.jsx';
import {BrowserRouter, Routes, Link, Route, useParams} from "react-router-dom";

function App(){

  const [theme, setTheme] = useState('light');
  const [view, setView] = useState('catalog');
  const [allProducts, setAllProduct] = useState([]);
  const [selected, setSelected] = useState({});
  const [showModal, setShowModal] = useState(false);

  /*
  the communication between RatingsAndReviews and Overview so that the stars
  in Overview will be the same as in RatingsAndReviews, Overview reads the
  avgRating through props and RatingsAndReviews invokes setAvgRating also
  through props
  */
  var [avgRating, setAvgRating] = useState(0);


  useEffect(()=>{
    const fectchData = async() =>{
      const allProducts = await request.getProducts();

      const detailsRes = await Promise.all(allProducts.data.map(each=>request.getProductDetails(each.id)));
      const stylesRes = await Promise.all(allProducts.data.map(each=>request.getProductStyles(each.id)));
      const details = detailsRes.map(each=>each.data);
      const styles = stylesRes.map(each=>each.data);

      for (let detail of details) {
        for (let style of styles) {
          if (detail.id.toString() === style.product_id) {
            detail['style'] = style.results;
          }
        }
      }
      setAllProduct(details);
    }
      fectchData();

  }, [])

  useEffect(()=>{
    localStorage.setItem('products', JSON.stringify(allProducts))
  }, [allProducts])

  const themeToggler = ()=>{
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const setAllProducts = ()=>{

    setAllProduct(localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : allProducts)

  }

  const selectProduct = (product)=> {
    setSelected(product);

  }

  let productId = useParams();

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <>
            <GlobalStyles />
            {/* {(view === 'details') && <RatingsAndReviews product={selected} setShowModal={setShowModal} showModal={showModal}/> } */}
              <BrowserRouter>
                <nav>
                  <Header showAll={setAllProducts} themeToggler={themeToggler} />
                </nav>
                <Routes>
                  <Route path='/' exact element={<Catalog Catalog selector={selectProduct} allProducts={allProducts}/>}/>
                  <Route path='/product/:productId' element ={<Details selected={selected}/>}/>
                </Routes>
            </BrowserRouter>
          </>
        </ThemeProvider>
      </Suspense>
    </div>
  );

}

ReactDOM.render(<App />, document.getElementById('atelier'));

