import Image from 'next/image';
import styled from 'styled-components';
import { Theme } from './../theme';
import { EFSection } from '../EFSection'

const SectionIS = styled.div`
    display: flex;

    flex-direction: column;
    position: relative;
    font-size: 1.6rem;
`;
const FeatureIS = styled.div`
    padding: 0 16.7rem;
    line-height: 1.6;
    margin-bottom: 3.2rem;

    li {
        font-weight: 600;
        color: #575b5d;
        padding-top: 1.6rem;
        padding-left: 4.8rem;        
        background-image: url(/images/check-mark.svg);
        background-position: 0 50%;
        background-size: 3.2rem;
        background-repeat: no-repeat;
    }
`;
const FeautureContentIS = styled.div`
    display: flex;
    flex-direction: column;
`;
const FeatureTitleIS = styled.h2`
    
    text-transform: uppercase;
`
const ImageIS = styled(Image)`
    filter: ${Theme.mainColorFilter};
`
const features = [
    {
        title: 'Качество производства',
        image: '/images/quality-medal.svg',
        html: `
        <ul>
            <li>
                Современная сборочная линия, отвечающая всем европейским
                стандартам и способная обеспечить любую потребность рынка
            </li>
            <li>
                Основой нашего фильтра стала бумага J.C. Binzer 1536VH134
                сделанная в Германии и по праву считающуюся одной из лучших
            </li>
            <li>
                Для верхней и нижней части каркаса фильтра был выбран
                высококачественный мягкий полиуретан, призванный
                обеспечивать максимально плотное прилегание к крышке
                корпуса.
            </li>
        </ul>`,
    },
    {
        title: 'Инновации',
        image: '/images/idea.svg',
        html: `
        <ul>
            <li>
                На основе данных, полученных в ходе исследования, мы пришли
                к выводу, что в российских условиях эксплуатации
                автомобилей на фильтр необходимо ставить «предфильтр»,
                защищающий бумагу от крупных частиц грязи, песка, частичек
                покрышек и т.п. Таким «предфильтром» стал уникальный
                защитный слой из полипропилена. Он защищает фильтр от
                крупных частиц, тем самым увеличивая срок его службы и
                позволяет мотору Вашего автомобиля дольше «дышать» чистым
                воздухом.
            </li>
            <li>
                На дорогах нашей Родины можно встретить любые виды осадков,
                чтобы фильтрующая бумага всегда могла выполнять свои
                функции, мы обработали ее специальной акриловой пропиткой,
                что позволит фильтру дольше вам служить.
            </li>
        </ul>        
        `,
    },
    {
        title: 'Возможности',
        image: '/images/strength.svg',
        html: `
        <ul>
            <li>
                Конкурентная цена на наше изделие для Вашей возможности
                выбора.
            </li>
            <li>
                В современном мире, люди зачастую упускают свои возможности
                по тем или иным причинам, наша компания стремится всеми
                силами сохранить их для Вас. Зачем покупать фильтр, в сборе
                с пластиковым коробом, если можно купить без? Это позволит
                сохранить Вам деньги и время для установки фильтрующего
                элемента, которые Вы можете потратить на новые дела,
                которые откроют для Вас новые горизонты возможностей. Мы
                постараемся и впредь придерживаться нашей стратегии,
                анализировать новые потребности рынка и условия
                эксплуатации автомобилей для своевременного реагирования,
                принятия нужных и правильных решений.
            </li>
        </ul>        
        `,
    },
];
export const FeatureSection = () => {
    return (
        <EFSection id="features" title="Наши преимущества">
            <SectionIS>
            {features.map((f, i) => (
                <FeatureIS key={`feature_${i}`}>
                    <FeatureTitleIS>{f.title}</FeatureTitleIS>
                    <FeautureContentIS>
                        <ImageIS width={128} height={128} src={f.image} />
                        <div
                            dangerouslySetInnerHTML={{
                                __html: f.html,
                            }}
                        ></div>
                    </FeautureContentIS>
                </FeatureIS>
            ))}
            </SectionIS>
        </EFSection>
    );
};
