import styled from 'styled-components';
import { EFMap } from '../EFMap';
import { EFFeedback } from '../EFFeedback';
import { EFSection } from '../EFSection';

const EFMapIS = styled(EFMap)`
    width: 100%;
`;

const AdressIS = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Contacts = () => {
    return (
        <EFSection id="contacts" title="Контакты">
            <AdressIS>
                <EFMapIS />
                <div>
                    Владимирская область, город Вязники, улица Фатьянова д.6.
            <EFFeedback />

                </div>

            </AdressIS>
        </EFSection>
    );
};
