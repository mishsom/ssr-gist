import React from "react";
import { renderToString } from "react-dom/server";
import App from './component/App'

export default () => {
    return renderToString(<App/>);
};