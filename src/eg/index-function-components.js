import React from 'react'
import ReactDom from 'react-dom'

const App = (props) => {
    console.log(props)
    return (
        <div>{props.name}</div>
    )
}

ReactDom.render(
    <App name="张三"/>,
    document.querySelector("#root")
)
