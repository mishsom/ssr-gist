import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App'


ReactDom.hydrate(<App />, document.getElementById("root"));