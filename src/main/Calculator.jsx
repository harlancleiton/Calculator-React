import React, {Component} from 'react';
import './Calculator.css';
import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: undefined,
    values: [0, 0],
    current: 0
};

export default class Calculator extends Component {
    state = {...initialState};

    clearMemory() {
        this.setState({...initialState});
    }

    setOperation(operation) {
        const {current} = this.state;
        if (current === 0) {
            this.setState({operation, current: 1, clearDisplay: true});
        } else {
            const {values} = this.state;
            const equals = operation === '=';
            const oldOperation = this.state.operation;
            values[0] = eval(`${values[0]}${oldOperation}${values[1]}`);
            values[1] = 0;
            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                values,
                clearDisplay: !equals
            });
        }
    }

    addDigit(n) {
        const {displayValue, clearDisplay, current, values} = this.state;
        if (n === '.' && displayValue.includes(n)) {
            return;
        }
        const clear = clearDisplay || displayValue === '0';
        const value = clear ? '' : displayValue;
        const display = value + n;
        this.setState({displayValue: display, clearDisplay: false});
        if (n !== '.') {
            values[current] = parseFloat(display);
            this.setState({values});
        }
    }

    render() {
        const addDigit = n => this.addDigit(n);
        const setOperation = operation => this.setOperation(operation);
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button onClick={this.clearMemory} label="AC" triple/>
                <Button onClick={setOperation} label="/" operation/>
                <Button onClick={addDigit} label="7"/>
                <Button onClick={addDigit} label="8"/>
                <Button onClick={addDigit} label="9"/>
                <Button onClick={setOperation} label="*" operation/>
                <Button onClick={addDigit} label="4"/>
                <Button onClick={addDigit} label="5"/>
                <Button onClick={addDigit} label="6"/>
                <Button onClick={setOperation} label="-" operation/>
                <Button onClick={addDigit} label="1"/>
                <Button onClick={addDigit} label="2"/>
                <Button onClick={addDigit} label="3"/>
                <Button onClick={setOperation} label="+" operation/>
                <Button onClick={addDigit} label="0" double/>
                <Button onClick={addDigit} label="."/>
                <Button onClick={setOperation} label="=" operation/>
            </div>
        );
    }
}
