import styled from 'styled-components';
import { ZoomImage } from '../zoomImage';
import { EFSection } from '../EFSection';

const ContainerIS = styled.div`
    margin: 60px; 
`;

export const SertificateSection = () => {
    return (
        <EFSection id="sertificates" title="Сертификаты">
            <ContainerIS>
                <ZoomImage
                    width={297}
                    height={421}
                    scale={1.2}
                    src={'/images/sertificate_001.jpg'}
                ></ZoomImage>
            </ContainerIS>
        </EFSection>
    );
};
