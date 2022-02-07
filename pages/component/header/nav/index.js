import React from 'react';


function Navbar() {
    return (
        <>
            <div className='header container wrap'>
                <img className='logo' src='/img/header/SnailLogo1.png'></img>
                <div className='Navbar'>
                    <div className='Navbar__container'>

                        <ul>
                            <li className='list__item'> <a> Home </a> </li>
                            <li className='list__item'> <a> Video </a> </li>
                            <li className='list__item'> <a> Gameplay </a> </li>
                            <li className='list__item'> <a> Token </a> </li>
                            <li className='list__item'> <a> Racetype </a> </li>
                            <li className='list__item'> <a> Team </a> </li>
                            <li className='list__item'> <a> Roadmap </a> </li>
                            <li className='list__item'> <a> Partner </a> </li>
                            <li className='list__item'> <a> Support </a> </li>
                            <li className='connect__btn'>
                                <img src='/img/header/connectBtn_BG.png'></img>
                                <div className='text__wrap'>
                                    <p> CONNECT WALLET  </p>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>


            </div>

        </>




    );
}

export default Navbar;
