import styled from "styled-components";
import Earnings from "./Earnings";
import Info from "./Info";
import Invoices from "./Invoices";
import JoinChannel from "./JoinChannel";
import MainContextNav from "./MainContextNav";
import Projects from "./Projects";
import RecommendedProject from "./RecommendedProject";


const Container = styled.div`
    width: 80%;
    background: linear-gradient(to bottom right, white 0%right, #e6e4ff 70%);
    margin: 0rem 8rem 1rem 4rem;

    @media screen and (min-width: 280px) and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 1rem 0 0 0;
    }
`;

const SubContainer = styled.div`
    margin: 0.5rem 0;
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media screen and (min-width: 280px) and (max-width: 1100px) {
        height: 100%;
      }
`;

const TitleText = styled.h3`
    height: 20%;
`;

const SectionOne = styled.div`
    height: 40%;
    justify-content: space-between;
    display: flex;
    gap: 4rem;
    width: 100%;

    @media screen and (min-width: 280px) and (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
        height: max-content;
      }
`;

const SectionTwo = styled.div`
    display: flex;
    gap: 4rem;
    height: 26vh;

    @media screen and (min-width: 280px) and (max-width: 1100px) {
        flex-direction: column;
        height: max-content;
        width: 100%;
      }
`;

const ColumnA1 = styled.div`
    display: flex;
    gap: 3rem;

    @media screen and (min-width: 280px) and (max-width: 1100px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 100%;
    }
`;

const ColumnA2 = styled.div`
    @media screen and (min-width: 280px) and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
  }
`;

const InvoicesContainer = styled.div`
    height: 60%;

    @media screen and (min-width: 280px) and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: max-content;
        width: 100%
      }
`;

const ColumnB1 = styled.div`
    display: flex;
    flex-direction: column;
    height: 115%;
    width: 100%;

    @media screen and (min-width: 280px) and (max-width: 1100px) {
        height: max-content;
        justify-content: center;
        align-items: center;
    }
`;

const ColumnB2 = styled.div`
    @media screen and (min-width: 280px) and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;







const MainSection = () => {
    return (
        <Container>
            <MainContextNav />
            <SubContainer>
                <SectionOne>
                    <ColumnA1>
                        <Earnings /> 
                        <Info />
                     </ColumnA1>

                    <ColumnB1>
                        <TitleText>Your Projects</TitleText>
                        <Projects />
                    </ColumnB1>
                </SectionOne>

                <SectionTwo>
                    <ColumnA2>
                        <InvoicesContainer>
                            <TitleText>Recent Invoices</TitleText>
                            <Invoices />
                            <JoinChannel />
                        </InvoicesContainer>
                    </ColumnA2>
                    <ColumnB2>
                        <TitleText>Recommended  Project</TitleText>
                        <RecommendedProject />
                    </ColumnB2>
                </SectionTwo>
            </SubContainer>
        </Container>
    )
}

export default MainSection
