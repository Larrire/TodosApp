import React, {useState} from 'react';
import styled from 'styled-components';
import MyLogo from '../MyLogo';
import Button from '../MyButton';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faListUl, faUser, faChartLine, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const DivHeader = styled.div`
    background: linear-gradient(to bottom right, rgba(255, 20, 147, 0.95), rgba(255,165,0, 0.9));
    // background: linear-gradient(to bottom right, deeppink, pink);
    padding: 20px;
    padding-bottom: 10px;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    height: 75px;
    z-index: 1;
    
    box-shadow 1px 1px 5px rgba(0,0,0,0.3);
    h1{
        margin: 0;
        font-size: 30px;
    }
    #menuToggle {
        display: none;
        float:right;
        margin: 0;
        button{
            cursor: pointer;
            margin: 0;
            border: 0;
            background: none;
            color: #fff;
            font-size: 30px;
        }
    }

    @media(max-width: 980px) {
        height: auto;
        #menuToggle {
            display: flex;
        }
    }
`;

const MyButton = styled(Button)`
    width: 100%;
    background: rgba(255,255,255, 0.5);
    padding: 10px;
    // margin-bottom: 3px !important;
    outline: 0;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid lightgray;
    transition: background,padding 0.3s;
    :hover {
        background: rgba(255, 255, 255, 0.9);
        padding-left: 30px;
    }
`;

const MobileMenu = styled.div`
    background: white;
    margin-top: 10px;
    height: 0px;
    overflow: hidden;
    transition: height 0.7s;
`;

function Header(){

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    function toggleMobileMenu(){
        setShowMobileMenu( !showMobileMenu );
    }

    return (
        <>
            <DivHeader>
                <MyLogo style={{float:'left'}} />
                <div id="menuToggle">
                <button onClick={toggleMobileMenu}><FontAwesomeIcon icon={faBars} /></button>
                </div>
                <div></div>
                <div className="clear"></div>
                <MobileMenu style={ (showMobileMenu) ? {height: '190px'} : {} } >
                    <Link to="/"><MyButton><FontAwesomeIcon icon={faHome} /> Home</MyButton></Link>
                    <Link to="/todos"><MyButton><FontAwesomeIcon icon={faListUl} /> To-dos</MyButton></Link>
                    <Link to="/"><MyButton><FontAwesomeIcon icon={faUser} /> Profile</MyButton></Link>
                    <Link to="/"><MyButton><FontAwesomeIcon icon={faChartLine} /> Statistics</MyButton></Link>
                    <Link to="/"><MyButton><FontAwesomeIcon icon={faSignOutAlt} /> Sair</MyButton></Link>
                </MobileMenu>
            </DivHeader>
        </>    
    )
}

export default Header;