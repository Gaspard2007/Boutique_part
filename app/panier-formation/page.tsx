'use client'
import Next, 
{ NextPage } from 'next'
import React from 'react';
import PanierDeLaFORMATION from '@/components/panier-formation'
const PanierFormation: NextPage = () => {
    return(
            <div>
         
               
                    <div className='flex justify-center'>
                        <img src="/2023-12-cropped-1.png" alt="" />
                    </div>
                    <div className='flex flex-row justify-center'>
                        <h1>Panier</h1>
                    </div>
                  <br />
                   <PanierDeLaFORMATION/>
                   <br></br>
                    <div className='flex flex-row justify-between' style={{marginTop:'60px'}}>      
                        <div className='flex flex-row' style={{marginLeft:'10%'}}>
                            <input className='border border-black'  placeholder='         Code Promos' style={{background:'#E4E4E4', fontSize:'23px', color:'black'}} type="text"/>
                            <button className='text-white bg-black cursor-pointer' style={{fontSize:'23px', paddingLeft:'27px', paddingRight:'27px'}}>Appliquer</button>
                        </div>
                        <div className=''  style={{marginRight:'10%'}}>
                            <button className='text-white bg-black cursor-pointer ' style={{fontSize:'23px', paddingLeft:'27px', paddingRight:'27px', border:'none', outline:'none'}}>Mettre à jour</button>
                        </div>
                    </div>
                    <div>
                        <div>
                        <h3>Total Panier</h3>
                        <div>
                            
                        </div>
                        </div>
                    </div>
          </div>

  
    )
}
export default PanierFormation