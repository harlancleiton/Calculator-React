import React, { Component } from 'react'

export default class MembroFamilia extends Component {
    constructor(props) {
        super();
    }

    render() {
        const { name } = this.props;
        return (
            <div>
                <span>Olá, </span>
                <strong>{name}</strong>
            </div>
        )
    }
}
