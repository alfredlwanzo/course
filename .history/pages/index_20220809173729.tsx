import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '@src/components/Footers/Footer'
import ContentSection from '@src/components/sections/Content'
import HomeSection from '@src/components/sections/Home'
import PricingSection from '@src/components/sections/Pricing'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Innov | Bootcamp pour devenir fullStack developpeur</title>
        <meta name="description" content="Une machine pour vous transformer en développeur Full-Stack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
       <section className="bg-primary pt-12 md:pt-28 pb-14 md:pb-28">
        {/* section Home */}
        <HomeSection/>
       </section>

       {/* section content */}
       <section className="py-6 md:py-20">
        <ContentSection/>
       </section>

       {/* Section pricing */}
       <section>
        <PricingSection/>
       </section>
       <section>
        <Image src="/assets/images/affiche1.jpg" alt="" width={3315} height={1614}/>
       </section>
      </main>

      <Footer/>
    </div>
  )
}

export default Home
