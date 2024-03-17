import React from 'react';
import { Card, Popover } from 'antd';
const content = (
    <div>
      Description
    </div>
  );



const CardPostalouer: React.FC = () => (
    <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="/postealouer_coiffure.svg"
      />
    } 
    bordered={true}>
     <Popover content={content} title="Description" trigger="click"><button className='text-xl text-white bg-black cursor-pointer' style={{width:300, margin:'-25px', padding:'25px'}}>En savoir Plus</button></Popover>
    <div style={{marginTop:'40px', marginBottom:'60px'}}>
      <h2>Formation Lifting Coréen</h2>
      <p>Date de formation: 19 février 2024</p>
      <p>Durée: 1 jour</p>
      <p>Places disponibles: 4</p>
      <h2>Tarif: 1500 €</h2>
      <p>à partir de 70 €/jour</p>
    </div>
    <button className='text-xl text-white bg-black cursor-pointer' style={{width:300, margin:'-25px', padding:'25px'}}>Je réserve</button>
    </Card>
  );
  

export default CardPostalouer;