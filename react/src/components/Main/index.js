import React from 'react';
import styled from 'styled-components';

const DivMain = styled.div`
    float: right;
    width: 78%;
    margin: 2%;
    position: relative;
    top: 75px;
`;

function Main(props){
    return (
        <DivMain>
            {props.children}
        </DivMain>
    )
}

export default Main;
