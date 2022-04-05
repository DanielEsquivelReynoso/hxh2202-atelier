/*
Hunter-X-Hunter FEC
Daniel Esquivel-Reynoso, Dora Xia, Bogdan Gordin
3/4/22
style selector
a containiter with multiple styles to choose from, same as from style list, each changes the product style/color
upon selected style it will have a checkmark to indicate it's the currently selected
*/

import React from "react";
import { render } from "react-dom";



function StyleSelector() {

  return (
    <div id='StyleSelector' style={{ 'backgroundColor': 'DarkOrange' }}>
      <div>
        <div>s1</div>
        <div>s2</div>
        <div>s3</div>
        <div>s4</div>
        <div>s5</div>
        <div>s6</div>
        <div>s7</div>
        <div>s8</div>
      </div>
    </div>
  )
};

export default StyleSelector;