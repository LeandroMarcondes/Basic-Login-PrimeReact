import React,{useState,useEffect} from 'react';
import { LayoutProvider } from '../layout/context/layoutcontext';
import Layout from '../layout/layout';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';

export default function MyApp({ Component, pageProps }) {
    const [showChild, setShowChild] = useState(false);
    
    useEffect(() => {
        setShowChild(true);
    }, []);
    
   

    if (Component.getLayout) {   

        if (!showChild) {
            return null;
        }
        return <LayoutProvider>{Component.getLayout(<Component {...pageProps} />)}</LayoutProvider>;
    } else {
        return (
            <LayoutProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </LayoutProvider>
        );
    }
}
