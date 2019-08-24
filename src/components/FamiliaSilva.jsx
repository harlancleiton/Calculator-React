import React, { Component } from 'react'
import MembroFamilia from './MembroFamilia';

export default class FamiliaSilva extends Component {
    render() {
        return (
            <div>
                <MembroFamilia name="Harlan" sobrenome="Silva"></MembroFamilia>
                <MembroFamilia name="Leia" sobrenome="Silva"></MembroFamilia>
                <MembroFamilia name="Julie" sobrenome="Silva"></MembroFamilia>
            </div>
        )
    }
}
