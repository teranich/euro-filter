import { useState } from 'react';
import styled from 'styled-components';
import { ZoomImage } from '../zoomImage';
import { EFSlider } from '../EFSlider';
import { EFSection } from '../EFSection'

const products = [
    {
        title: 'EF-31(низкий) ',
        html: `<p>Автомобили УАЗ 3741, с двигателями ЗМЗ инжекторные</p>374-00-1109080-300<p>`,
        images: ['/images/sertificate_001.jpg', '/images/products/ef-31u-lable.png'],
        preview: 'ef-31.png',
    },
    {
        title: 'EF-31У',
        html: `<p>Автомобили УАЗ Hunter, Patriot, с двигателями ЗМЗ-409.10</p> <p>3160-00-1109080-331</p>`,
        images: ['/images/sertificate_001.jpg', '/images/products/ef-31u-lable.png'],
        preview: 'ef-31u.png',
    },
    {
        title: 'EF-31У',
        html: `<p>Автомобили УАЗ Hunter, Patriot, с двигателями ЗМЗ-409.10</p> <p>3160-00-1109080-331</p>`,
        images: ['/images/sertificate_001.jpg', '/images/products/ef-31u-lable.png'],
        preview: 'ef-31u.png',
    },
    {
        title: 'EF-31У',
        html: `<p>Автомобили УАЗ Hunter, Patriot, с двигателями ЗМЗ-409.10</p> <p>3160-00-1109080-331</p>`,
        images: ['/images/sertificate_001.jpg', '/images/products/ef-31u-lable.png'],
        preview: 'ef-31u.png',
    },
    {
        title: 'EF-31У',
        html: `<p>Автомобили УАЗ Hunter, Patriot, с двигателями ЗМЗ-409.10</p> <p>3160-00-1109080-331</p>`,
        images: ['/images/sertificate_001.jpg', '/images/products/ef-31u-lable.png'],
        preview: 'ef-31u.png',
    },
    {
        title: 'EF-31У',
        html: `<p>Автомобили УАЗ Hunter, Patriot, с двигателями ЗМЗ-409.10</p> <p>3160-00-1109080-331</p>`,
        images: ['/images/sertificate_001.jpg', '/images/products/ef-31u-lable.png'],
        preview: 'ef-31u.png',
    },
];


const ProductIS = styled.div`
    max-width: 24vw;
    margin: 1rem;
    padding: 1.5rem;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
`;
const ProductTextIS = styled.div`
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
`;

const ProductInfoIS = styled.div``;
const ProductTitleIS = styled.h2`
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
`;

const ZoomImageIS = styled(ZoomImage)`
    cursor: pointer;
`;


export const ProductSection = () => {
    const [showSlider, setShowSlider] = useState(false);
    const handleProductImageClick = () => setShowSlider(!showSlider);
    const onSliderCloseHandler = () => setShowSlider(false);
    return (
        <EFSection id="products" title="Продукция">
            {products.map((product, i) => (
                <ProductIS key={`product-${i}`}>
                    <EFSlider
                        images={product.images}
                        show={showSlider}
                        onClose={onSliderCloseHandler}
                    >
                        <ZoomImageIS
                            width={4320}
                            height={3240}
                            src={`/images/products/${product.preview}`}
                            onClick={handleProductImageClick}
                        ></ZoomImageIS>
                    </EFSlider>
                    <ProductInfoIS>
                        <ProductTitleIS>{product.title}</ProductTitleIS>
                        <ProductTextIS
                            dangerouslySetInnerHTML={{ __html: product.html }}
                        />
                    </ProductInfoIS>
                </ProductIS>
            ))}
        </EFSection>
    );
};
