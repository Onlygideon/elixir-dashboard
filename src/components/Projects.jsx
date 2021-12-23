import styled from "styled-components";

import A from '../images/logo.jpg'
import B from '../images/startup.png'
import { themeColor, hoverEffectt, cardShadow } from '../utilities';



const TheProjects = styled.div`
    height: 80%;
    background-color: white;
    padding: 1.5rem;
    margin-top: 1rem;
    border-radius: 1rem;
    box-shadow: ${cardShadow};
    transition: 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
        box-shadow: ${hoverEffectt};
    }


    @media screen and (min-width: 280px) and (max-width: 1100px) {
        width: 80%;
        height: max-content;
        margin-top: 1rem;
    }
`;

const Project = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
`;

const Avatar = styled.div`
    margin-top: 0.5rem;
    img {
        height: 3rem;
        width: 3rem;
        border-radius: 4rem;
        background-color: #999;
    }

    @media screen and (min-width: 350px) and (max-width: 598px) {
        img {
            height: 2.5rem;
            width: 2.5rem;
        }
    }

    @media screen and (min-width: 280px) and (max-width: 350px) {
        img {
            height: 2rem;
            width: 2rem;
        }
    }
`;

const Details = styled.div`
    margin-left: 1rem;
`;

const Title = styled.h3`
    font-weight: 600;
    font-size: 1rem;

    @media screen and (min-width: 600px) and (max-width: 798px) {
        font-size: 0.8rem;
    }

    @media screen and (min-width: 400px) and (max-width: 600px) {
        font-size: 0.7rem;
    }

    @media screen and (min-width: 300px) and (max-width: 400px) {
        font-size: 0.6rem;
    }

    @media screen and (min-width: 250px) and (max-width: 300px) {
        font-size: 0.5rem;
    }
`;

const SubTitle = styled.h5`
    font-weight: 300;
    font-size: 0.7rem;
    margin-top: 0.3rem;
    color: #999;

    @media screen and (min-width: 350px) and (max-width: 798px) {
       font-size: 0.5rem;
    }

    @media screen and (min-width: 280px) and (max-width: 350px) {
        font-size: 0.35rem;
    }
`;

const AllProjects = styled.h5`
    text-align: end;
    color: ${themeColor};
    cursor: pointer;

    &:hover {
        color: #333;
    }

    @media screen and (min-width: 280px) and (max-width: 598px) {
       font-size: 0.5rem;
    }
`;





const Projects = () => {
    return (
        <TheProjects>
            <Project>
                <Avatar>
                    <img src={A} alt="Avatar" />
                </Avatar>

                <Details>
                    <Title>Admin dashboard for FinTech company</Title>
                    <SubTitle>3 days remaining</SubTitle>
                </Details>
            </Project>

            <Project>
                <Avatar>
                    <img src={B} alt="Avatar" />
                </Avatar>

                <Details>
                    <Title>Restful API documentation for startup</Title>
                    <SubTitle>5 days remaining</SubTitle>
                </Details>
            </Project>

            <AllProjects>See all projects</AllProjects>
        </TheProjects>
    )
}

export default Projects
