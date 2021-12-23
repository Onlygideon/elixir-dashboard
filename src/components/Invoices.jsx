import styled from 'styled-components';

import Tag from "./Tag";
import { hoverEffectt, cardShadow } from '../utilities'

import A from '../images/man.jpg'
import B from '../images/man2.jpg'


const InvoicesContainer = styled.div`
    width: 35rem;
    border-radius: 1rem;
    margin-top: 1rem;
    background-color: #fff;
    height: 140%;
    box-shadow: ${cardShadow};
    transition: 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
        box-shadow: ${hoverEffectt};
    }


    @media screen and (min-width: 280px) and (max-width: 1100px) {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const CardContent = styled.div`
    @media screen and (min-width: 280px) and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.2rem;
        margin: 1.2rem 0;
    }
`;

const Invoice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0.4rem;
    padding-top: 0.6rem;

    @media screen and (min-width: 280px) and (max-width: 1100px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    width: 50%;

    @media screen and (min-width: 280px) and (max-width: 1100px) {
        flex-direction: column;
        width: 100%;
        text-align: center;
    }
`;

const Avatar = styled.div`
    img {
        height: 3rem;
        width: 3rem;
        border-radius: 4rem;
        background-color: #999;
    }
`;

const TextContainer = styled.div`
    margin-left: 1rem;
`;

const Title = styled.h4`

`;

const SubTitle = styled.h5`
    font-weight: 400;
    font-size: 0.8rem;
    margin-top: 0.2rem;
    color: #555;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;

    @media screen and (min-width: 280px) and (max-width: 1100px) {
        width: 100%;
        flex-direction: column;
        gap: 0.6rem;
    }

    @media screen and (min-width: 280px) and (max-width: 600px) {
        gap: 0.4rem;
    }
`;

const Price = styled.div`
    @media screen and (min-width: 280px) and (max-width: 600px) {
        font-size: 0.8rem;
    }
`;



const Invoices = () => {
    return (
        <InvoicesContainer>
            <CardContent>
                <Invoice>
                    <Info>
                        <Avatar>
                            <img src={A} alt="invoice" />
                        </Avatar>

                        <TextContainer>
                            <Title>Micheal Adewale</Title>
                            <SubTitle>Chronic Holdings</SubTitle>
                        </TextContainer>
                    </Info>

                    <Container>
                        <Tag content="Paid" paid/>
                        <Price>$962.85</Price>
                    </Container>
                </Invoice>

                <Invoice>
                    <Info>
                        <Avatar>
                            <img src={B} alt="invoice" />
                        </Avatar>

                        <TextContainer>
                            <Title>James Goretzka</Title>
                            <SubTitle>Verzor Limited</SubTitle>
                        </TextContainer>
                    </Info>

                    <Container>
                        <Tag content="Late" late/>
                        <Price>$1,345.60</Price>
                    </Container>
                </Invoice>
            </CardContent>
        </InvoicesContainer>
    )
}

export default Invoices
