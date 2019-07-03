import React, { Component } from 'react'
// import PropTypes from 'prop-types'; // ES6
import './index.css'

export default class index extends Component {
    //规定传值类型
    // static propTypes = {
    //     title: PropTypes.string,
    // }
    //默认传值
    // static defaultProps = {
    //     title: "代办事项"
    // }
    toggleClick = () => {
        let {toggleEvent, id} = this.props
        toggleEvent(id)
    }
    deleteClick = () => {
        let {deleteEvent, id} = this.props
        deleteEvent(id)
    }
        //生命周期,该周期用于判断是否需要更新，如果换回true则更新，否则不更新.用于优化重复渲染
    shouldComponentUpdate = (nextProps, nextState) => {
        // return nextState.Todos
        return this.props.iscomplated !== nextProps.iscomplated
    }
    render() {
        return (
            <div className="card">
                <input type="checkbox" checked={this.props.iscomplated} onChange={this.toggleClick}/>
                <div className="card-top">
                    {this.props.title}
                </div>
                <div>
                    {this.props.iscomplated ? "已完成": "未完成"}
                </div>
                <button onClick={this.toggleClick}>改变状态</button>
                <button onClick={this.deleteClick}>删除</button>
            </div>
        )
    }
}
