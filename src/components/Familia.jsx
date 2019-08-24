import React, { Component } from 'react'

export default class Familia extends Component {
    constructor(props) {
        super();
    }

    render() {
        const { children } = this.props;
        return (
            <div>
                {children}
            </div>
        )
    }
}
