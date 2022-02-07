import React from "react";
import {render} from "react-dom";
import App from "./App.js"

render(
    <App />,
    // $("#root")[0]
    document.getElementById('root')
)