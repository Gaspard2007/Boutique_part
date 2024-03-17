import React from 'react';
import { Col, Row, Divider} from 'antd';
import CardFormation from './card-formation';

const panierDeLaFORMATION: React.FC = () => {
    return(
<div className='flex justify-center'>
<table  style={{borderCollapse: 'collapse'}}>
    <thead className='rounded' style={{background:'#E4E4E4'}}>
        <tr>
            <th className='rounded-tl-lg' style={{padding:'20px'}}>ACTION</th>
            <th>PRODUIT</th>
            <th>DATE DE RESERVATION</th>
            <th>PRIX</th>
            <th>QUANTITÉ</th>
            <th className='rounded-tr-lg' style={{padding:'20px'}}>SOUS TOTAL</th>
        </tr>
    </thead>
    <br />
    <tbody className=''>
        <th ><button className='cursor-pointer' style={{background:'white'}}><img src="/x-circle-red.svg" alt="" /></button></th>
        <th >FORMATION LIFTING CORÉEN</th>
        <th>19.02.2024</th>
        <th><div className='flex'>ACCOMPTE TTC:</div> 450 €</th>
        <th>1</th>
        <th>450 €</th>
        
    </tbody>
</table>

</div>
    )
    }
    export default panierDeLaFORMATION;