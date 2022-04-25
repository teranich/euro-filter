import styled from 'styled-components';
import { HeaderHeight, Theme } from '../theme';

const HeaderIS = styled.header`
    /* background-color: green;
     */
    background-color: ${Theme.mainColor};
    width: 100%;
    /* padding: 20px; */
    height: ${HeaderHeight}px;
    display: flex;
`;
const TextIS = styled.div`
    text-transform: uppercase;
    color: #fff;
    text-shadow: 1px 1px 2px #000, 1px 1px 6px #000, 1px 1px 10px #000;
    margin: 0px;
`;

export const Header = () => {
    return (
        <HeaderIS>
            <TextIS>Euro Filter</TextIS>
        </HeaderIS>
    );
};
