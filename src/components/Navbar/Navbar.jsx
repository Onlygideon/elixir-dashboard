import { useState } from "react"
import Open from '../../images/open.png'
import Close from '../../images/close.png'
import Pic from '../../images/pic.png'
import Logo from '../../images/smiles.png'
import Brand from '../../images/icon.png'

import styled from "styled-components";

import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { FaRegBell } from 'react-icons/fa';

import Tag from "../Tag";

import './Navbar.css'



const Container = styled.div`
    width: 100%;
    background-color: darkslateblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`;

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Avatar = styled.img`
    height: 6rem;
    border-radius: 6rem;
    margin-top: 20%;
    background-color: #888;

    @media screen and (min-width: 400px) and (max-width: 600px) {
        height: 4rem;
        margin-top: 17%;
    }

    @media screen and (min-width: 280px) and (max-width: 400px) {
        height: 3rem;
        margin-top: 15%;
    }
`;

const Name = styled.h1`
    color: #fff;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0.5rem 0 0.5rem 0;

    @media screen and (min-width: 400px) and (max-width: 600px) {
        font-size: 1.2rem;
    }

    @media screen and (min-width: 280px) and (max-width: 400px) {
        font-size: 1.1rem;
    }
`;

const ContactContainer = styled.div`
    width: 80%;
    background-color: #091322;
    color: #c4c4c4;
    margin: auto auto;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    h4 {
        text-align: center;
    }

    a {
        color: #999;
        text-decoration: none;
        text-align: center;
    }

    a:hover {
        color: darkslateblue;
    }

    @media screen and (min-width: 600px) and (max-width: 1100px) {
       margin: 2rem;
    }

    

    @media screen and (min-width: 280px) and (max-width: 600px) {
        margin: 1.5rem;
        padding: 0.7rem;


        h4 {
            font-size: 0.8rem;
        }

        a {
            font-size: 0.8rem;
        }
    }
`;






const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const [notify, setNotify] = useState(false);

    const showSidebar = () => setSidebar(!sidebar); 

    const showNotification = () => setNotify(!notify);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className="navbar">
                    <div className="menu-bars">
                        <img src={Open} onClick={showSidebar}/>
                    </div>

                    <div className="brand">
                        <div className="logo">
                            <h1 style={{color: 'white', cursor: 'pointer'}}>
                                ELIXIR
                            </h1> 
                            <img src={Logo} alt="logo" />
                        </div>

                        <img src={Brand} alt="logo" />
                    </div>     

                    <button className="notify-icon" onClick={showNotification}>
                        <FaRegBell/>
                    </button>   
                </div>   
                
                <div className={notify && 'notify active'} onClick={showNotification}></div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} onClick={showSidebar}>
                    <ul className="nav-menu-items">
                        <li className="navbar-toggle">
                            <div className="menu-close">
                                <div className="brand">  
                                    <h1 style={{color: 'white', cursor: 'pointer'}}>
                                        ELIXIR
                                    </h1>
                                    <img src={Brand} alt="logo" />
                                </div>  
                                <img src={Close}  onClick={showSidebar}/>
                            </div>
                        </li>

                        <Container>
                            <ProfileContainer>
                                <Avatar src={Pic} />
                                <Name>David Adeyemi</Name>
                                <Tag content='Web Developer'/>
                            </ProfileContainer>
                        </Container>

                        {SidebarData.map((data, index) => {
                            return (
                                <li key={index} className={data.className} onClick={showSidebar}>
                                    <a href={data.path}>
                                        {data.icon} 
                                        <span>{data.title}</span>
                                    </a>
                                </li>
                            )
                        })}

                        <ContactContainer>
                            <h4>Having troubles?</h4>
                            <a href="/">Contact us</a>
                        </ContactContainer>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
