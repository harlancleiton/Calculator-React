import React, { Component } from 'react'
import ComponenteFilho from './ComponenteFilho';

export default class ComponentePai extends Component {
    notificarSaida = (lugar) => {
        alert('Liberado para ' + lugar);
    }

    render() {
        return (
            <div>
                <ComponenteFilho notificarSaida={this.notificarSaida}></ComponenteFilho>
            </div>
        )
    }
}
