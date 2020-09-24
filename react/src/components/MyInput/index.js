import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    padding: 8px;
    border-radius: 5px;
    border 1px solid darkgray;
    width: 100%;
    font-size: 16px;
    color: #555;
`;

function MyInput(props){
    return <Input {...props} />
}

export default MyInput;