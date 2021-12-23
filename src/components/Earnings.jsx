import styled from "styled-components";
import { IoStatsChart } from 'react-icons/io5';

import { themeColor, hoverEffectt } from "../utilities";
import { FaLongArrowAltUp } from 'react-icons/fa';


const EarningsCard = styled.div`
    height: 100%;
    width: 16rem;
    background-color: ${themeColor};
    padding: 1rem;
    border-radius: 1rem;
    color: white;
    transition: 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
        box-shadow: ${hoverEffectt};
    }


    @media screen and (min-width: 280px) and (max-width: 1100px) {
        width: 80%;
    }
`;

const CardContent = styled.div`
    margin: 1rem;

`;

const Chart = styled.div`
    display: flex;
    justify-content: center;

    svg {
        height: 4rem;
        width: 4rem;
    }
`;

const EarningsText = styled.h3`
    text-align: center;
    font-weight: normal;
    padding: 0.4rem 0;
`;

const EarningValue = styled.h2`
    text-align: center;
`;

const EarningsIncrease = styled.h5`
    text-align: center;
    font-weight: normal;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0.5rem 0;
    border-radius: 2rem;
    font-size: 12px;
    margin-top: 0.5rem;

    span {
        font-size: 10px;
        color: lightgray; 
    }
`;




const Earnings = () => {
    return (
        <EarningsCard>
            <CardContent>
                <Chart>
                    <IoStatsChart />
                </Chart>

                <EarningsText>Earnings</EarningsText>
                <EarningValue>$3,480</EarningValue>
                <EarningsIncrease><span><FaLongArrowAltUp /></span>18% since last month</EarningsIncrease>
            </CardContent>
        </EarningsCard>
    )
}

export default Earnings
