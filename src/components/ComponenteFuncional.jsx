import React from 'react';

export default props => {
    const names = ['Harlan', 'Vanessa'];

    const gerarItens = items => {
        return items.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(names)}
        </ul>
    )
}
