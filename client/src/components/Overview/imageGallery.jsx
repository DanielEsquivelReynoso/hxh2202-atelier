/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/4/22
image browser
the new stuff here like carosel
magnifier when hover over the <img/>
max 5 style list on render
arrow up and down re-renders style list to show next style and remove last style
the currently selected style list needs to have an underline indicator that it's selected
fullscreen button needs to be an animated CSS change???
*/

import React, { useState, useReducer, useEffect } from "react";
import { render } from "react-dom";
import { Gallery } from "./imageGalleryStyle.js";




function ImageGallery() {
  var [styleIdx, setStyleIdx] = useState(0);
  var [imageIdx, setImageIdx] = useState(0);
  var [fullscreen, setFullscreen] = useState(false);
  // const forceUpdate = useReducer(() => ({}))[1]; // just a cheap way for force a rerender that isn't a state change but something else like CSS changes // also becuase sometime set doesn't re-render


  useEffect(() => {
    for (var n = 0; n <= images.length; n++) {
      if (document.getElementById(`S${n}`)) {
        document.getElementById(`S${n}`).style.border = "transparent";
      }
    }
  }, [styleIdx])


  var chosenStyle = function (e) {
    if (styleIdx === parseInt(e.target.dataset.value)) return 0;
    e.preventDefault();
    setImageIdx(0);
    var sync = new promise(() => {

    });
    setStyleIdx(parseInt(e.target.dataset.value)); // doesn't re-render whyyyyyyyy or invoke useEffect whyyyyy
    // document.getElementById(e.target.id).style.border = "none";
    document.getElementById(e.target.id).style.borderBottom = "5px solid black";
  }

  var cycleImage = function (e, str) { // str is a type of cycleImage thats either back arrow or next arrow
    e.preventDefault();

    if (str === 'next') {
      imageIdx === images[styleIdx].length - 1 ? setImageIdx(0) : setImageIdx(imageIdx + 1);
    } else if (str === 'back') {
      imageIdx === 0 ? setImageIdx(images[styleIdx].length - 1) : setImageIdx(imageIdx - 1);
    }
  }

  var clickedFullScreen = function (e, str) { // changes between true and false depending if fullscreen it's true or false // changes CSS
    e.preventDefault();
    fullscreen === false ? setFullscreen(true) : setFullscreen(false);

    if (fullscreen) {
      imageFullscreen = {
        width: '100%',
        height: 560,
        objectFit: 'none',
        objectPosition: '0'
      };
    } else {
      imageFullscreen = {
        width: 715,
        height: 560,
        objectFit: 'none',
        objectPosition: '0'
      };
    }
  }


  return (
    <section id='ImageGallery'>

      <img id='image' style={imageFullscreen} alt="current image" src={images[styleIdx][imageIdx]} />

      <section id='ImageGalleryButtions'>
        <button style={arrowButton} onClick={(e) => { cycleImage(e, 'back'); }}><span>&#8592;</span></button>
        <button style={arrowButton} onClick={(e) => { cycleImage(e, 'next'); }}><span>&#8594;</span></button>
        <button style={fullscreenButton} onClick={(e) => { clickedFullScreen(e); }}><span>&#9744;</span></button>
      </section>

      <section id='StyleListButtons'>
        <button style={arrowButton}><span>&#8593;</span></button>{[...Array(images.length).keys()].map((num) =>
          <div style={notSelectedStyleList} id={`S${num + 1}`} data-value={num} onClick={(e) => { chosenStyle(e); }}>S{num + 1}</div>)}
        <button style={arrowButton}><span>&#8595;</span></button>
      </section>

    </section>
  )
};



export default ImageGallery;



var imageFullscreen = { // initial #image css but then changes depending if clickedFullScreen ever got invoked
  width: 715,
  height: 560,
  objectFit: 'none',
  objectPosition: '0'
};



var notSelectedStyleList = { // initial #styleList css and gets reused with each re-render, but doesn't work????
  display: 'inline-block',
  textAlign: 'center',
  borderRadius: '10px',
  backgroundColor: 'white',
  border: 'transparent',
  padding: '5px',
  margin: '5px',
  width: 35,
  height: 35
};

var selectedStyleList = {
  display: 'inline-block',
  textAlign: 'center',
  borderRadius: '10px',
  backgroundColor: 'white',
  borderBottom: '5px solid black',
  padding: '5px',
  margin: '5px',
  width: 35,
  height: 35
};

var fullscreenButton = {
  display: 'inline-block',
  textAlign: 'center',
  borderRadius: '10px',
  backgroundColor: 'white',
  border: 'transparent',
  padding: '5px',
  margin: '5px',
  width: 35,
  height: 35
};

var arrowButton = {
  display: 'inline-block',
  textAlign: 'center',
  // borderRadius: '10px',
  backgroundColor: 'transparent',
  // backgroundPosition: 'left top',
  border: 'transparent',
  padding: '5px',
  margin: '5px',
  width: 25,
  height: 25
};



var images = [ // images sample, but incase of the actual product this would be styles of the product, needs to be dynamic
  ['../src/assets/desg1.jpg', '../src/assets/desg2.jpg', '../src/assets/desg3.jpg'],
  ['../src/assets/flower1.jpg', '../src/assets/flower2.jpg', '../src/assets/flower3.jpg'],
  ['../src/assets/food1.jpg', '../src/assets/food2.jpg', '../src/assets/food3.jpg'],
  ['../src/assets/sport1.jpg', '../src/assets/sport2.jpg', '../src/assets/sport3.jpg']
];



// <div>
//   <button><span>&#8593;</span></button>{ [...Array(images.length).keys()].map((num) =>
//     <div id={`S${num+1}`} data-value={num} style={{ borderBottom: 'none' }} onClick={(e) => { chosenStyle(e); }}>S{num+1}</div>)}
//   <button><span>&#8595;</span></button>
// </div>

// for (var n = 0; n <= 5; n++) ((num) =>
// <div id={`S${idx+1}`} data-value={idx} style={{ borderBottom: 'none' }} onClick={(e) => { chosenStyle(e); }}>S{idx+1}</div>)(n)}

// <button><span>&#8593;</span></button>{ for (var n = 0; n <= images.length - 1; n++) ((num) =>
//           <div id={`S${num+1}`} data-value={num} style={{ borderBottom: 'none' }} onClick={(e) => { chosenStyle(e); }}>S{num+1}</div>)(n);}
//         <button><span>&#8595;</span></button>

// border-style: solid
// border-bottom: 5px solid red;

// console.log(e.target.dataset.value);


// onClick={(event) => { props.clickedWatch(event, props.movie.title); }}

// <a href="https://www.w3schools.com">
// <img src="w3html.gif" alt="W3Schools.com" width="100" height="132">
// </a>

// <button value='0' onClick={(e) => {chosenStyle(e.target.value); }}>S1</button>
//         <div value='1' onClick={(e) => {chosenStyle(); }}>S2</div>
//         <div value='2' onClick={(e) => {chosenStyle(e.value); }}>S3</div>
//         <div value='3' onClick={(e) => {chosenStyle(e.value); }}>S4</div>