import React from 'react';

import Head from 'next/head'
import Footer from '../components/Footer'
import Whatsapp from './Whatsapp'
import TopMenu from '../components/TopMenu'

const Layout =({children}) =>{
    return(
        <>
            <Head>
                <title>KakiJalan</title>
                <link rel="icon" type="image/x-icon" href="/icons/down_button_gold.png"/>
            </Head>
            <TopMenu />
            <main>{children}</main>
            <Whatsapp />
            <Footer />
        </>
    )
}

export default Layout;
