import React, {Component} from 'react';
import './Display.css';

class Display extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {value} = this.props;
        return (
            <div className="display">
                <span>{value}</span>
            </div>
        );
    }
}

export default Display;
