import React from 'react';
import styled from 'styled-components';

const MyInputTest = styled.input`
    border: 0;
    padding: 10px;
    font-size: 20px;
`;

const InputTest = ({getValue, ...rest}) => {
    return (
        <MyInputTest /*onKeyUp={}*/ {...rest} />
    )
}

export default InputTest;