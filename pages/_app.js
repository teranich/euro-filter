import '../styles/globals.css';
import ScrollToTop from 'react-scroll-to-top';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <ScrollToTop smooth />
        </>
    );
}

export default MyApp;
