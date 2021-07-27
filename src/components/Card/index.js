import React from 'react';
import styled from 'styled-components';

const DivCard = styled.div`
    background: rgba(252, 252, 252, 0.85);
    // min-height: 80vh;
    border-radius: 15px;
    padding: 15px;
    // border: 1px solid lightgray;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.3);;
`;

function Card({children, className, ...rest}){
    return (
        <DivCard className={"divcard " + className } {...rest}>{children}</DivCard>
    )
}

export default Card;