import React, { Component } from 'react'

export default class ComponenteFilho extends Component {
    constructor(props) {
        super();
    }

    render() {
        const { notificarSaida } = this.props;

        return (
            <div>
                <button onClick={() => notificarSaida('Shopping')}>Vou Sair</button>
            </div>
        )
    }
}
