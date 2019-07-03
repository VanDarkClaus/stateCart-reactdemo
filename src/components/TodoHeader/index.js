import React, { Component,Fragment } from 'react'

export default class TodoHeader extends Component {
    render() {
        return (
          <Fragment>
            <h1>待办事项</h1>
            {this.props.children}
          </Fragment>
        )
    }
}

