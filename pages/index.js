import Carousel from '../components/Carousel'
import SearchBar from '../components/Home/SearchBar'
// import HomeMidSection1 from '../components/Home/HomeMidSection1'
// import HomeMidSection2 from '../components/Home/HomeMidSection2'
// import OurPartners from '../components/Home/OurPartners'
import ArticleListing from '../components/Home/ArticleListing'
import Layout from '../components/Layout'
import Image from 'next/image';
import { TourProvider } from "../global/global_context";
import Head from 'next/head'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { lazy, Suspense } from 'react';
import Loading from '../components/Loading'

const HomeMidSection1 = lazy(() => import('../components/Home/HomeMidSection1'));
const HomeMidSection2 = lazy(() => import('../components/Home/HomeMidSection2'));
const OurPartners = lazy(() => import('../components/Home/OurPartners'));

// https://revnology.gitlab-page.revnology.com.my/kakijalan/index.html

export default function Home() {

  return (
    <>
      <Head>
        <title>KakiJalan</title>
        <link rel="icon" type="image/x-icon" href="/icons/down_button_gold.png"/>
      </Head>
      <Layout>
        <Carousel />
        <SearchBar />

        <div className="position-relative" id="paper_divider_div" style={{background: "url(/images/paper_divider.png)", height: "146px", zIndex: 1, marginTop: "-150px"}}></div>
        
        <Suspense fallback={<Loading />}>
          <HomeMidSection1 />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <HomeMidSection2 />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <OurPartners />
        </Suspense>

        <ArticleListing />


      </Layout>
      
    </>
  )
}
