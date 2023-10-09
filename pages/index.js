import Carousel from '../components/Carousel'
import SearchBar from '../components/Home/SearchBar'
import HomeMidSection1 from '../components/Home/HomeMidSection1'
import HomeMidSection2 from '../components/Home/HomeMidSection2'
import OurPartners from '../components/Home/OurPartners'
import ArticleListing from '../components/Home/ArticleListing'
import Layout from '../components/Layout'
import Image from 'next/image';
import { TourProvider } from "../global/global_context";
import Head from 'next/head'


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

        <HomeMidSection1 />
        <HomeMidSection2 />
        <OurPartners />
        <ArticleListing />

      </Layout>
      
    </>
  )
}
