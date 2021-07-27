import React, { useState } from 'react';
import styled from 'styled-components';
import Template from '../../components/Template'
import Card from '../../components/Card';
// import InputTest from '../../components/InputTest';

const DivHome = styled.div`
    h2{
        margin:0;
    }
`;

const ReactiveH2 = (props) => {
    return (
        <h2> { props.var !== '' ? props.var : props.default } </h2>
    )
}

function Home(){

    const [ valorInput, setValorInput ] = useState('Opa');

    function getInputValue( valor ){
        console.log( valor )
    }

    function getValorInput2(){
        console.log('Texto: ' + valorInput);
    }

    return (
        <>
            <Template>
                <DivHome>
                    <Card>
                        <ReactiveH2 var={valorInput} default="Let's get this done" />
                    </Card>
                </DivHome>
            </Template>
        </>    
    )
}

export default Home;