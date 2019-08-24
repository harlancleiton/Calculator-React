import React, { Component } from 'react'

export default class Familia extends Component {
    constructor(props) {
        super();
    }

    render() {
        const { children, sobrenome } = this.props;
        return (
            <div>
                {/* {children} */}
                {/* {React.cloneElement(children, { children, sobrenome })} */}
                {React.Children.map(children, son => React.cloneElement(son, { sobrenome }))}
            </div>
        )
    }
}
