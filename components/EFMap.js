import Script from 'next/script';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const factoryGeo = [56.242384, 42.176576];
export const EFMap = () => {
    return (
        <div>
            <Script src="https://unpkg.com/react-yandex-maps/dist/production/react-yandex-maps.umd.js" />
            <YMaps>
                <h3>Наш адрес</h3>
                <Map defaultState={{ center: factoryGeo, zoom: 16 }}>
                    <Placemark geometry={factoryGeo} />
                </Map>
            </YMaps>
        </div>
    );
};
