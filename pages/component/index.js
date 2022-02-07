import React from 'react';
import Header from './header'
import section from './section'
import footer from './footer'
import Racetype from './racetype/racetyle';
function Layout() {
    return (
        <div>
            <Header></Header>
            <Racetype/>
        </div>
    );
}

export default Layout;
