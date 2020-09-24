import React from 'react';
import './index.css'
import styled from 'styled-components';
import Input from '../../components/MyInput';
import MyLogo from '../../components/MyLogo';
import Button from '../../components/MyButton';
import { Link } from 'react-router-dom';
import ImgLogin from '../../assets/loginImage3.svg';


const MainDiv = styled.div`
    background: linear-gradient(to bottom right, rgba(219, 13, 202, 0.8), rgba(255,165,0, 0.8) );
    height: 100vh;
    // width: 100vw;
    overflow-y: hidden;
    // position: fixed;
`;

const LoginButton = styled(Button)`
    padding: 13px;
    border-radius: 50px;
    width: 100%;
    background: linear-gradient(to bottom right, rgba(255,165,0, 0.7), rgba(255, 20, 147, 1) );
    // border: 1px solid #fff;
    border: 0;
    color: #fff;
    font-size: 17px;
    text-shadow: 1px 1px 1px black;
`;

const SignUpButton = styled.button`
    color: #888;
    width: 100%;
    text-decoration: none;
    font-size: 17px;
    margin: 10px auto;
    cursor: pointer;
    border: 1px solid gray;
    padding: 5px;
    border-radius: 50px;
    background: none;
    border-color: transparent;
    :hover {
        color: #444;
        background: #ddd;
    }
`;

const MyInput = styled(Input)`
    border: 0;
    border-radius: 0;
    outline: 0;
    padding: 13px;
    font-size: 17px;
    box-sizing: border-box;
    background: transparent;
    // border-left: 1px solid transparent;
    border-bottom: 2px solid lightgray;
    transition: border-color 0.5s;
    :focus {
        border-color: rgba(219, 13, 202, 0.9);
    }
    ::placeholder{
        font-size: 15px;
    }
`;

const FlexDiv = styled.div`
    display: flex;
    position: relative;
    height: 90%;
`;

const FormLogin = styled.div`
    position: relative;
    top: calc(50% - 200px);
    left: calc(50% - 250px);
    height: 380px;
    width: 400px;
    background: rgba(255, 255, 255, 0.95);
    padding: 30px;
    padding-top: 5px;
    color: #111;
    border-radius: 10px;
    border: 1px solid #fff;
    h2 {
        text-align: center;
        color: #444;
        font-size: 30px;
    }
`;

const DivGroup = styled.div`
    margin-top: 20px;
`;

const ImgDiv = styled.div`
    width: 25%;
    margin-left: 50px;
    img {
        height: 100%;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;  
    }
`;

const DivLogo = styled.div`
    height: 0%;
    padding: 30px;
    justify-content: center;
    display: flex;
    h1 {
        margin 0;
    }
    h2 {
        margin: 0;
    }
`;

const Login = () => {

    function toggle(){
        alert('a');
        window.scrollTo(0, 100);
    }

    return (
        <>
            <MainDiv>
                <DivLogo>
                    <MyLogo style={{fontSize: '50px'}} />
                </DivLogo>
                <FlexDiv>
                    <ImgDiv>
                        <img src={ImgLogin} />
                    </ImgDiv>
                    <FormLogin>
                        <h2>Login</h2>
                        <DivGroup className="teste">
                            <div className="div-label">
                                <label>Email</label>
                            </div>
                            <MyInput className="loginInput" placeholder="Insert your email" />
                        </DivGroup>
                        <DivGroup>
                            <div className="div-label">
                                <label>Senha</label>
                            </div>
                            <MyInput type="password" className="loginInput" placeholder="Type your password" />
                        </DivGroup>
                        <DivGroup>
                            <Link to="/"><LoginButton type="submit">Login</LoginButton></Link>
                        </DivGroup>
                        <SignUpButton onClick={toggle}>Don't have an account?</SignUpButton>
                    </FormLogin>
                </FlexDiv>
            </MainDiv>
        </>
    )
}

export default Login;