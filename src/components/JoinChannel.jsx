import styled from "styled-components";

import { themeColor, hoverEffectt } from '../utilities';
import { FaSlack } from 'react-icons/fa';


const JoinCard = styled.div`
    background-color: darkslateblue;
    height: 80%;
    margin-top: 1.5rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    transition: 0.4s ease-in-out;

    &:hover {
        box-shadow: ${hoverEffectt};
    }

    @media screen and (min-width: 280px) and (max-width: 1100px) {
        width: 80%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        height: max-content;
    }
`;

const CardContent = styled.div`
    width: 100%;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 280px) and (max-width: 1100px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

const SlackCard = styled.div`
    display: flex;
`;

const SlackIcon = styled.div`
    margin-right: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color: #fff;
        height: 3rem;
        width: 3rem;
    }
`;

const SlackText = styled.div`
    color: #fff;
`;

const SlackHeader = styled.h2`
    font-weight: 500;

    @media screen and (min-width: 350px) and (max-width: 598px) {
       font-size: 1.1rem;
    }

    @media screen and (min-width: 280px) and (max-width: 350px) {
        font-size: 0.95rem;
    }
`;

const SlackFooter = styled.h5`
    color: #e4e4e4;
    font-weight: normal;

    @media screen and (min-width: 280px) and (max-width: 598px) {
        font-size: 0.7rem;
    }
`;

const Join = styled.button`
    background-color: ${themeColor};
    color: #fff;
    border: none;
    outline: none;
    padding: 1rem 2rem;
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
        color: slateblue;
        background-color: #999;
    }

    @media screen and (min-width: 280px) and (max-width: 598px) {
        font-size: 0.9rem;
    }
`;



const JoinChannel = () => {
    return (
        <JoinCard>
            <CardContent flex={true}>
                <SlackCard>
                    <SlackIcon>
                        <FaSlack />
                    </SlackIcon>

                    <SlackText>
                        <SlackHeader>Interact with clients</SlackHeader>
                        <SlackFooter>Join slack channel</SlackFooter>
                    </SlackText>
                </SlackCard>

                <Join>Join Now</Join>
            </CardContent>
        </JoinCard>
    )
}

export default JoinChannel
