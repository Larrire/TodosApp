import React, { useState } from 'react';
import styled from 'styled-components';
import Template from '../../components/Template'
import Card from '../../components/Card';

const MyCard = styled(Card)`
    h2 {
        margin: 0;
    }
`;

const DivTodos = styled.div`
    margin-top: 10px;
    width: 100%;
`;

const DivFiltros = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    button {
        border-radius: 2rem;
        cursor: pointer;
        border: 1px solid gray;
        padding: 10px;
        margin-left: 20px;
        // background: rgb(255, 100, 150);
        :hover {
            background: lightgray;
        }
    }
    label {
        // font-size: 15px;
        color: #444;
        margin-right: 10px;
    }
    select {
        border: 1px solid gray;
        padding: 10px;
        border-radius: 10px;
        font-size: 16px;
    }
    option {
        font-size: 16px;
    }
`;

const TodoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    div {
        display: flex;
    }
    span {
        border: 1px solid #555;
        padding: 5px;
        border-radius: 3px;
        width: 15px;
        height: 15px;
        background: #fff;
        margin-left: 5px;
    }
    span.green {
        background: LawnGreen;
    }
    span.red {
        background: red;
    }
    span.blue {
        background: cyan;
    }
`;

const ToDo = styled.div`
    background: rgba(255, 255, 255, 0.6);
    margin-bottom: 15px;
    padding: 15px;
    border-radius: 10px;
    transition: box-shadow 0.4s;
    cursor: pointer;
    box-shadow: 3px 3px 5px #999;
    h4 {
        margin: 0;
        margin-bottom: 10px;
        position: relative;
        ::before {
            content: '';
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 1px;
            background: darkgray;
        }
    }
    p {
        margin: 0;
        font-size: 15px;
    }
    :hover {
        // background: rgba(255, 200, 0, 0.7);
        box-shadow: 5px 5px 20px #999;
    }
`;

function ToDos(){

    const linhas = [1,2,3,4,5,6,7,8,9];

    return (
        <>
            <Template>
                    <MyCard>
                        <h2>Meus to-dos</h2>
                        <DivFiltros>
                            {/* <div>
                                <label htmlFor="">Ordenar por </label>
                                <select>
                                    <option>Data de criação</option>
                                    <option>Prazo</option>
                                    <option>Cor</option>
                                    <option>Título</option>
                                </select>
                            </div> */}
                            <button>Adicionar novo</button>
                        </DivFiltros>
                        <DivTodos>
                            <ToDo>
                                <TodoHeader>
                                    <h4>Lorem ipsum dolors</h4>
                                    <span className="green"></span>
                                </TodoHeader>
                                <p>Lorem ipsum dolors Lorem ipsum dolors Lorem ipsum dolors Lorem ipsum dolors </p>
                            </ToDo>
                            <ToDo>
                                <TodoHeader>
                                    <h4>Lorem ipsum dolors</h4>
                                    <span className="blue"></span>
                                </TodoHeader>
                                <p>Lorem ipsum dolors Lorem ipsum dolors Lorem ipsum dolors Lorem ipsum dolors </p>
                            </ToDo>
                            { 
                                linhas.map( (item, index) => 
                                    <ToDo key={index}>
                                        <TodoHeader>
                                            <h4>Lorem ipsum dolors</h4>
                                            <div>
                                                <p>25/05/2020</p>
                                                <span className="red"></span>
                                            </div>
                                        </TodoHeader>
                                        <p>
                                            Lorem ipsum dolors Lorem ipsum dolors Lorem ipsum dolors Lorem ipsum dolors Lorem ipsum dolors Lorem ipsum dolors Lorem ipsum dolors Lorem ipsum dolors Lorem ipsum dolors Lorem ipsum dolors Lorem ipsum dolors Lorem ipsum dolors Lorem ipsum dolors Lorem ipsum dolors Lorem ipsum dolors Lorem ipsum dolors.
                                        </p>
                                    </ToDo>
                                )
                            } 
                        </DivTodos>
                    </MyCard>
            </Template>
        </>    
    )
}

export default ToDos;