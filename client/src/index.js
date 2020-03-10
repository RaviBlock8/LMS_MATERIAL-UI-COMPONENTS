import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import theme from './components/Theme/theme'
import {ThemeProvider} from '@material-ui/styles/'
import App from './App';


ReactDOM.render(<ThemeProvider theme={theme}>
<App />
</ThemeProvider>
, document.getElementById('root'));


