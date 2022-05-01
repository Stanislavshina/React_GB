/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Message } from './components/test/message';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Message props1={1}
          props2="Stas" 
          props3={(ar)=>console.log(`hellow Stas from react-props/| ${ar}`)}
          props4={[1,2,3,4]}
          films={[
            {title: 'film1', year: 2022},
            {title: 'film2', year: 1984},
          ]}
          />
  </React.StrictMode>
);


