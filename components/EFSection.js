import styled from 'styled-components';
import { Theme } from './theme';

const SectionIS = styled.section`
    width: 100%;
    max-width: 1000px;
    margin: 8rem 0;
`;

const ContentIS = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
`;

const ThreeIS = styled.div`
    position: relative;
    margin-bottom: 1.6rem;

    h1 {
        text-transform: uppercase;
        text-align: left;
        font-size: 2.5rem;
        margin-bottom: 0;
        padding-left: 4rem;
        color: ${Theme.mainColor};
    }

    h1::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 3.25rem;
        height: 3.25rem;
        background: ${Theme.mainColor};
    }
    
    h1::after {
        content: '';
        position: absolute;
        left: 0;
        top: 3rem;
        width: 100%;
        height: 0.25rem;
        background-color: ${Theme.mainColor};
    }
`;
export const EFSection = (props) => {
    return (
        <SectionIS {...props}>
            {props.title && (
                <ThreeIS>
                    <h1>{props.title}</h1>
                </ThreeIS>
            )}

            <ContentIS>{props.children} </ContentIS>
        </SectionIS>
    );
};
