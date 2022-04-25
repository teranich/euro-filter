import styled from 'styled-components';
import { ZoomImage } from '../zoomImage';
import { EFSection } from '../EFSection';

export const SertificateSection = () => {
    return (
        <EFSection id="sertificates" title="Сертификаты">
            <ZoomImage
                width={595}
                height={842}
                src={'/images/sertificate_001.jpg'}
            ></ZoomImage>
        </EFSection>
    );
};
