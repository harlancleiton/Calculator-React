import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    constructor(props) {
        super();
    }

    render() {
        const {label} = this.props;

        return (
            <button className="button">{label}</button>
        );
    }
}

export default Button;
