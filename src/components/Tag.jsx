import styled from "styled-components";

import { themeColor } from '../utilities'


const Div = styled.div`
    padding: 0.5rem 1rem;
    border-radius:  1rem;
    font-weight: 500;
    color: #fff;
    background-color: ${themeColor};
    cursor: pointer;
    margin-bottom: 0.5rem;

    ${({glow}) => glow && `
        font-size: 0.65rem;
        padding: 0.5rem 0.5rem;
        font-weight: normal;
        margin-top: 0.25rem;
        color: #2f233d;
        background-color: rgba(109, 134, 245, 0.192);
    `};

    ${({paid}) => paid && `
        color: #70e000;
        background-color: #70e00041;
    `};

    ${({late}) => late && `
        color: #ff595e;
        background-color: #ff595e41;
    `};

    ${({clean}) => clean && `
        color: ${themeColor};
        border: 0.1rem solid ${themeColor};
        background-color: transparent;

        &:hover {
            background-color: ${themeColor};
            color: #fff;
        }
    `};

    @media screen and (min-width: 400px) and (max-width: 600px) {
        font-size: 0.6rem;
    }

    @media screen and (min-width: 350px) and (max-width: 400px) {
        font-size: 0.55rem;
    }

    @media screen and (min-width: 280px) and (max-width: 350px) {
        font-size: 0.5rem;
    }
`



const Tag = ({ content, glow = false, paid = false, late = false, clean = false }) => {
    return (
        <Div glow={glow} paid={paid} late={late} clean={clean}> 
           {content}
        </Div>
    )
}

export default Tag
