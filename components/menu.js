import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { HeaderHeight } from './theme';
const MenuContainerIS = styled.div`
    position: fixed;
    ${(props) => `top: ${props.position}px;`};
    z-index: 1000;
    display: flex;
    /* padding:20px; */
    width: 100%;
    background-color: #d9812b;
    text-transform: uppercase;
    justify-content: end;
    font-size: 1.6rem;
    font-weight: 800;
    opacity: ${(props) => (props.isScrollOnTop ? 1 : 0.4)};
    :hover {
        opacity: 1;
    }
`;
const MenuItemIS = styled(Link)`

`;
const MenuItemAIS = styled.a`
    cursor: pointer;
    display: block !important;
    padding: 1.6rem 1.6rem !important;
    height: 100%;

    :hover {
        color: black;
        background-color: white;
    }
`;

const links = [
    {
        title: 'О нас',
        href: '#features',
    },
    {
        title: 'Продукция',
        href: '#products',
    },
    {
        title: 'Сертификаты',
        href: '#sertificates',
    },
    {
        title: 'Контакты',
        href: '#contacts',
    },
];

export const Menu = () => {
    const [isScrollOnTop, setIsScrollOnTop] = useState(true);
    const [position, setPosition] = useState(HeaderHeight);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY <= HeaderHeight) {
                setIsScrollOnTop(true);
                setPosition(HeaderHeight - window.scrollY);
            } else {
                setIsScrollOnTop(false);
                setPosition(0);
            }
        };
        document.addEventListener('scroll', handler);
        return () => {
            document.removeEventListener('scroll', handler);
        };
    }, []);

    return (
        <MenuContainerIS isScrollOnTop={isScrollOnTop} position={position}>
            {links.map((link, i) => (
                <MenuItemIS key={`menu-item_${i}`} href={link.href}>
                    <MenuItemAIS>{link.title}</MenuItemAIS>
                </MenuItemIS>
            ))}
        </MenuContainerIS>
    );
};
