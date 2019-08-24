import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    render() {
        const {label, operation, double, triple, onClick} = this.props;

        return (
            <button onClick={() => onClick ? onClick(label) : null}
                    className={`button
                ${operation ? 'operation' : ''}
                ${double ? 'double' : ''}
                ${triple ? 'triple' : ''}`}>
                {label}</button>
        );
    }
}

export default Button;
