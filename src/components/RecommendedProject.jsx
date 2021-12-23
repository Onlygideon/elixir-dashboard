import styled from 'styled-components';

import Tag from "./Tag";
import { hoverEffectt, cardShadow } from '../utilities'

import Pic from '../images/oscar.jpg'


const RecommendedCard = styled.div`
    padding: 1rem;
    border-radius: 1rem;
    height: 140%;
    background-color: #fff;
    width: 100%;
    box-shadow: ${cardShadow};
    transition: 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
        box-shadow: ${hoverEffectt};
    }

    @media screen and (min-width: 280px) and (max-width: 1100px) {
        width: 80%;
        margin: 2rem 0;
        height: max-content;
    }
`;

const CardContent = styled.div`
    margin: 0.4rem;
`;

const Details = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (min-width: 280px) and (max-width: 1100px) {
       flex-direction: column;
       justify-content: flex-start;
       align-items: flex-start;
       gap: 0.4rem;
       margin-bottom: 1rem;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Avatar = styled.div`
    margin-right: 1rem;

    img {
        height: 4rem;
        width: 4rem;
        border-radius: 4rem;
        background-color: #999;
    }
`;

const Info = styled.div`

`;

const InfoName = styled.h3`
    font-weight: 500;
`;

const InfoUpdate = styled.h5`
    font-weight: 300;
    color: #777;
`;

const Title = styled.h4`
    font-weight: 600;
    margin: 0.3rem 0;
    text-align: justify;

    @media screen and (min-width: 350px) and (max-width: 598px) {
        font-size: 0.9rem;
    }

    @media screen and (min-width: 280px) and (max-width: 350px) {
        font-size: 0.7rem;
     }
`;

const ProjectInfo = styled.p`
    margin: 0;
    padding: 0;
    color: #3b3b3b;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 1.4rem;

    @media screen and (min-width: 280px) and (max-width: 600px) {
        font-size: 0.8rem;
     }
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    background-color: rgba(146, 166, 255, 0.3);

    @media screen and (min-width: 280px) and (max-width: 1100px) {
        flex-direction: column;
        gap: 0.4rem;
    }
`;

const Price = styled.div`
    color: #444;
`;








const RecommendedProject = () => {
    return (
        <RecommendedCard>
            <CardContent>
                <Details>
                    <InfoContainer>
                        <Avatar>
                            <img src={Pic} alt="Avatar" />
                        </Avatar>

                        <Info>
                            <InfoName>Oscar Jones</InfoName>
                            <InfoUpdate>Updated 10m ago</InfoUpdate>
                        </Info>
                    </InfoContainer>
                    
                    <Tag content="UI Development"/>
                </Details>

                <Title>Need a Frontend Web Developer.</Title>

                <ProjectInfo>Looking for an enthusiast frontend developer to build the UI for my clothing store website.</ProjectInfo>

                <PriceContainer>
                    <Price>$1,250/month</Price>
                    <Tag content="Contract" clean/>
                </PriceContainer>
            </CardContent>
        </RecommendedCard>
    )
}

export default RecommendedProject
