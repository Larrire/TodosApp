import React from 'react';
import styled from 'styled-components';

const DivCard = styled.div`
    background: rgba(255, 255, 255, 0.6);
    // min-height: 80vh;
    border-radius: 15px;
    padding: 15px;
    border: 1px solid lightgray;
    // box-shadow: 2px 2px 2px black;
`;

function Card({children, className, ...rest}){
    return (
        <DivCard className={"divcard " + className } {...rest}>{children}</DivCard>
    )
}

export default Card;