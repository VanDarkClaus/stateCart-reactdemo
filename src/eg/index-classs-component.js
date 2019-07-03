import React, {Component} from 'react'
import {render} from 'react-dom'

class App extends Component {
    render() {
        console.log(this)
        return(
            <div>
                {this.props.name}
            </div>
        )
    }
}
render (
    <App name="hid"></App>,
    document.querySelector("#root")
)