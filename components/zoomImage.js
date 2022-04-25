import Image from 'next/image';
import styled from 'styled-components';

const ImageContainerIS = styled.div`
    position: relative;
    span {
        position: initial !important;
    }
`;
const ZoomImageIS = styled(Image)`
    cursor: zoom-in;
    transition: transform 0.2s;
    :hover {
        transform: scale(1.5);
    }

`;

export const ZoomImage = (props) => {
    return (
        <ImageContainerIS>
            <ZoomImageIS {...props}></ZoomImageIS>
        </ImageContainerIS>
    );
};
