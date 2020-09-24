import React from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
import Main from '../Main';

function Template(props){
    return(
        <>
            <Header />
            <Navbar />
            <main id="main">
                <Main>
                    {props.children}
                </Main>
                <div className="clear"></div>
            </main>
        </>
    )
}

export default Template;