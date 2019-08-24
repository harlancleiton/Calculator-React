import React, {Component} from 'react';
import Calculator from "./main/Calculator";

export default class App extends Component {
  render() {
    return (
        <div>
          <h1>Calculadora</h1>
          <Calculator/>
        </div>
    );
  }
}
