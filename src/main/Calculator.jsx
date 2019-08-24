import React, {Component} from 'react';
import './Calculator.css';
import Button from "../components/Button";
import Display from "../components/Display";

export default class Calculator extends Component {
    clearMemory() {
        console.log('clear');
    }

    setOperation(operation) {
        console.log(operation);
    }

    addDigit(n) {
        console.log(n);
    }

    render() {
        const addDigit = n => this.addDigit(n);
        const setOperation = operation => this.setOperation(operation);
        return (
            <div className="calculator">
                <Display value={100}/>
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
