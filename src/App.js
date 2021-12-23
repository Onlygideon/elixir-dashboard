import styled from "styled-components"

import MainSection from "./components/MainSection";
import Navbar from './components/Navbar/Navbar';

import './Global.css'


const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);

  @media screen and (min-width: 280px) and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
`




const App = () => {
  return (
    <>
      <Navbar />

      <Container>
        <MainSection />
      </Container>
    </>
  );
}

export default App

