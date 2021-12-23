import styled from "styled-components";

import { FiSearch } from 'react-icons/fi';


const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    @media screen and (min-width: 280px) and (max-width: 1100px) {
        flex-direction: column;
        margin-bottom: 1.5rem;
    }
`;

const Text = styled.h1`
    span {
        font-weight: 500;
        color: #484258;
    }

    @media screen and (min-width: 400px) and (max-width: 698px) {
        font-size: 1.2rem;
    }

    @media screen and (min-width: 350px) and (max-width: 400px) {
        font-size: 1.1rem;
    }

    @media screen and (min-width: 280px) and (max-width: 350px) {
        font-size: 1rem;
    }
`;

const InputContainer = styled.div`
    display: flex;

    @media screen and (min-width: 280px) and (max-width: 1100px) {
        margin-top: 1rem;
    }
`;

const Icon = styled.div`
    height: 3rem;
    width: 3rem;
    background-color: #dce4ff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    cursor: pointer;

    svg {
        color: #555555;
    }
`;

const Input = styled.input`
    border: none;
    background-color: #dce4ff;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;

    &:focus {
        border: none;
        outline: none;
    }
`;


const MainContextNav = () => {
    return (
        <NavContainer>
            <Text>
                Welcome Back,<span>David Adeyemi</span>
            </Text>

            <InputContainer>
                <Icon>
                    <FiSearch />
                </Icon>

                <Input type="text" placeholder="Search for projects"/>
            </InputContainer>
        </NavContainer>
    )
}

export default MainContextNav
