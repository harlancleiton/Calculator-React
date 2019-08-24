import React, { Component } from 'react'
import MembroFamilia from './MembroFamilia';

export default class FamiliaSilva extends Component {
    render() {
        return (
            <div>
                <MembroFamilia name="Harlan"></MembroFamilia>
                <MembroFamilia name="Leia"></MembroFamilia>
                <MembroFamilia name="Julie"></MembroFamilia>
            </div>
        )
    }
}
