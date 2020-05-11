import React from 'react';
import ReactDOM from 'react-dom';
import Silder from './views/slider';
let IMAGE_DATA =[
  {src:require('./images/1.jpg')},
  {src:require('./images/2.jpg')},
  {src:require('./images/03.jpg')},
]
ReactDOM.render(
  <Silder 
    items = {IMAGE_DATA}
    speed={1.2}
    delay={2.1}
    pause={true}
    autoplay={true}
    dots={true}
    arrows={true}
  ></Silder>,
  document.getElementById('root')
);
