import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: 1px solid darkgray;
    padding: 10px;
    border-radius: 7px;
    cursor: pointer;
`;

function MyButton({children, ...rest}){
    return <Button {...rest}>{children}</Button>
}

export default MyButton;