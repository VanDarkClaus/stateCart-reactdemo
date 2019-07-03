import React, { Component, createRef } from 'react'
//ref类似于id

export default class TodoInput extends Component {
    constructor() {
        super()
        this.inputRef = createRef();
    }
    addClick = (e) =>{
        let inputValue = e.target.previousSibling.value
        if(inputValue !== ''){
            this.props.addEvent(inputValue) 
            e.target.previousSibling.value = ''
        }
        this.inputRef.current.focus()
    }
    keyHandle = (e) =>{
        if(e.keyCode === 13){
            let inputValue = e.target.value
            if(inputValue !== ''){
                this.props.addEvent(inputValue) 
                e.target.value = ''
            }
            this.inputRef.current.focus()
        }
    }
    render() {
        return (
            <div>
                <input onKeyUp={this.keyHandle} ref={this.inputRef}></input>
                <button  onClick={this.addClick}>增加事件</button>
            </div>
        )
    }
}
