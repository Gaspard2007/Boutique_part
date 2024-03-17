import React from 'react'

const PropositionLocation: React.FC = () => {
    return (
        <div className='w-[800px] flex ' style={{background:'#DEDEDE'}}>
            <img src="/seche-cheveux.svg" alt="" />
            <div className='flex flex-col justify-between' style={{margin:'30px'}}>
                <div>
                    <h3>LOCATION SÈCHE CHEVEUX</h3>
                    <div style={{fontWeight:'700px'}}>
                        <span className='' >10 €/jour</span>
                    </div>
                    <p>Illuminez votre journée avec notre service de location de sèche-cheveux à seulement 10 € par jour ! Apportez une touche de confort et de style à votre routine capillaire, sans compromis sur votre portefeuille. Louez dès maintenant pour des cheveux sublimés sans effort !</p>            
                </div>
                <div className=''>
                    <div>
                        <button>AJOUTER AU PANIER</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropositionLocation
