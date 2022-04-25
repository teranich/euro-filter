import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const AbsoluteIS = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
    height: 100vh;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.8);
    ${(props) => (props.show ? `display: block;` : `display: none;`)}
`;

const SlideContentIS = styled.div`
    position: relative;
    overflow: hidden;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
`;

const SlideIS = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: ${(props) => (props.active ? 1 : 0)};
    z-index: ${(props) => (props.active ? 1 : 0)};
    /* transition: opacity 0.4s ease-in-out; */
`;

const DirectionControlIS = styled.div`
    position: absolute;
    bottom: 0;
    width: 92px;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    ${(props) => (props.left ? `left: 0;` : `right: 0;`)}
`;

const CloseControlIS = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 10vh;
    width: 92px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

const BlockIS = styled.div`
    cursor: pointer;
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100%;
    opacity: 0;
    :hover {
        opacity: 0.5;
    }
`;
const ArrowLeftIS = `
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`;

const ArrowRightIS = `
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
`;

const ArrowIS = styled.div`
    opacity: 1;
    cursor: pointer;
    border: solid white;
    width: 25px;
    height: 25px;
    border-width: 0 3px 3px 0;
    display: inline-block;
    margin: 10px 3px;
    z-index: 9;
    ${(props) => (props.left ? ArrowLeftIS : ArrowRightIS)}
`;

export const EFSlider = ({ images = [], show, onClose, children }) => {
    const [index, setIndex] = useState(0);
    const [showSlider, setShowSlider] = useState(show);
    const handleArrowClick = (direction) => {
        const next =
            direction > 0
                ? (index + 1) % images.length
                : (index - 1 + images.length) % images.length;

        setIndex(next);
    };
    const handleCloseClick = () => {
        onClose && onClose();
    };

    useEffect(() => setShowSlider(show), [show]);

    return (<>
        {children}
        <AbsoluteIS show={showSlider}>
            {index}
            <CloseControlIS onClick={handleCloseClick}>
                <BlockIS />
                <ArrowIS right />
                <ArrowIS left />
            </CloseControlIS>
            <DirectionControlIS left onClick={() => handleArrowClick(-1)}>
                <BlockIS />
                <ArrowIS left />
            </DirectionControlIS>
            <SlideContentIS>
                {images.map((src, i) => (
                    <SlideIS key={`slider-image_${i}`} active={index === i}>
                        <Image src={src} layout="fill" objectFit="contain" />
                    </SlideIS>
                ))}
                <DirectionControlIS right onClick={() => handleArrowClick(1)}>
                    <BlockIS />
                    <ArrowIS right />
                </DirectionControlIS>
            </SlideContentIS>
        </AbsoluteIS>
        </>
    );
};
