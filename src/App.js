import React, { Component } from 'react'
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Todos: [
                {
                    id: 1,
                    title: '吃饭',
                    iscomplated: true
                },{
                    id: 2,
                    title: 'sleep',
                    iscomplated: false
                },{
                    id: 3,
                    title: 'play',
                    iscomplated: false
                }
            ]
        }
    }
    //改变待办事项状态
    toggleEvent = (id) => {
        this.setState({
            Todos: this.state.Todos.map(item => {
                if(item.id === id){
                    item.iscomplated = !item.iscomplated
                }
                return item
            })
    })}
    //删除模块
    deleteEvent = (id) => {
        this.setState({
            Todos: this.state.Todos.filter(item => item.id !== id )
        })
    }
    //增加模块
    addEvent = (event) => {
        this.setState(
            {
                Todos: [...this.state.Todos,
                    {
                    id: Math.random()*10000,
                    title: event,
                    iscomplated: false
                }]
            }
        )
    }
    render() {
        return (
            <>
                <TodoHeader>
                    <h3>今日事今日毕</h3>
                </TodoHeader>
                <TodoInput addEvent={this.addEvent}></TodoInput>
                {
                    this.state.Todos.map(item => {
                        return <TodoItem
                            deleteEvent={this.deleteEvent}
                            toggleEvent={this.toggleEvent}
                            key={item.id}
                            {...item}/>
                    })
                }
            </>
        )
    }

}