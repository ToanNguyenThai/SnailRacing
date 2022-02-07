import '../styles/globals.css'
import '../styles/header.css'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'



import Head from "next/head";
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="http://fonts.cdnfonts.com/css/hey-comic" rel="stylesheet"></link>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;