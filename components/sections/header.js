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

export const Header = () => {
    return (
        <HeaderIS>
            <img src="/euro_filter_color.svg" alt="Euro Filter"/>
        </HeaderIS>
    );
};
