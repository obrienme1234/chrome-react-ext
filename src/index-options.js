import React from 'react';
import { render } from 'react-dom';
import "core-js/stable";
import "regenerator-runtime/runtime";
import Options from './components/Options.js';


render(<Options />, document.querySelector('#options'));