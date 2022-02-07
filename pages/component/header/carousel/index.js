import React from 'react';

function Carousel() {
    return (
        <div className='Carousel wrap'>
            <div className='tree__wrap'>
                <img className='tree' src='/img/header/tree.png'></img>
                <button className='tree__list inventory'>
                    <img className='tree__direction' src='/img/header/tree_direction.png'></img>
                    <p>Inventory</p>
                </button>
                <button className='tree__list market'>
                    <img className='tree__direction' src='/img/header/tree_direction.png'></img>
                    <p>Market</p>
                </button>
            </div>
            <img className='mushroom' src='/img/header/mushroom.png'></img>
            <div className='grass'>
                <img className='grass4' src='/img/header/Oil1_0001_Vector-Smart-Object_4.png'></img>
                <img className='grass1' src='/img/header/Oil1_0001_Vector-Smart-Object_1.png'></img>
                <img className='grass3' src='/img/header/Oil1_0001_Vector-Smart-Object_3.png'></img>
                <img className='grass2' src='/img/header/Oil1_0001_Vector-Smart-Object_2.png'></img>
            </div>

        </div>
    );
}

export default Carousel;
