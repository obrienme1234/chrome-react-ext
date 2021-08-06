import React from 'react';
import { render } from 'react-dom';
import "core-js/stable";
import "regenerator-runtime/runtime";
import Foreground from './components/Foreground.js';
  
render(<Foreground />, document.querySelector('#foreground'));