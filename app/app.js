import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './hello_world';

const App = () => {
  return (
    <HelloWorld name="Brandon"/>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
