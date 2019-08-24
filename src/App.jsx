import React, { Component } from 'react';
import FamiliaSilva from './components/FamiliaSilva';
import Familia from './components/Familia';
import MembroFamilia from './components/MembroFamilia';

export default class App extends Component {
    render() {
        return (
            <div>
                <FamiliaSilva></FamiliaSilva>
                <Familia>
                    <MembroFamilia name="Harlan" sobrenome="Souza"></MembroFamilia>
                    <MembroFamilia name="Vanessa" sobrenome="Souza"></MembroFamilia>
                    <MembroFamilia name="Conça" sobrenome="Souza"></MembroFamilia>
                </Familia>
                <Familia>
                    <MembroFamilia name="Leia" sobrenome="Au Au"></MembroFamilia>
                    <MembroFamilia name="Julie" sobrenome="Au Au"></MembroFamilia>
                </Familia>
            </div>
        );
    }
}
