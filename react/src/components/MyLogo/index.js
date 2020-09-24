import React from 'react';
import styled from 'styled-components';

const Logo = styled.h1`
    color: white;
    text-shadow: 3px 3px 3px #333;
    font-family: 'Rowdies', cursive;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

function MyLogo({...rest}){
    return <Logo {...rest}>ToDo's App</Logo>
}

export default MyLogo;