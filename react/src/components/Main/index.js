import React from 'react';
import styled from 'styled-components';

const DivMain = styled.div`
    float: right;
    width: 78%;
    margin: 2%;
    position: relative;
    top: 75px;
    
    @media(max-width: 980px) {
        float: none;
        width: 96%;
        margin-top: 20px;
    }
`;

function Main(props){
    return (
        <DivMain>
            {props.children}
        </DivMain>
    )
}

export default Main;
