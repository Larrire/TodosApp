import React from 'react';
import styled from 'styled-components';
import MyLogo from '../MyLogo';
import MyButton from '../MyButton';
import { Link } from 'react-router-dom';

const DivHeader = styled.div`
    background: linear-gradient(to bottom right, rgba(255, 20, 147, 0.95), rgba(255,165,0, 0.9));
    // background: linear-gradient(to bottom right, deeppink, pink);
    padding: 20px;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    height: 75px;
    z-index: 1;
    
    box-shadow 1px 1px 5px white;
    h1{
        margin: 0;
        font-size: 30px;
    }
`;

const HeaderButton = styled(MyButton)`
    margin-left: 15px;
`;

function Header(){
    return (
        <>
            <DivHeader>
                <MyLogo style={{float:'left'}} />
            </DivHeader>
        </>    
    )
}

export default Header;