
import ReactDom from 'react-dom'
import React from 'react'
import App from './App.js'


ReactDom.hydrate(
    <App></App>,
    document.querySelector("#root")
)