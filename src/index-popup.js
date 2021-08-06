import React from 'react';
import { render } from 'react-dom';
import "core-js/stable";
import "regenerator-runtime/runtime";
import Popup from './components/Popup.js';

render(<Popup />, document.querySelector('#popup'));