import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>sean hart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="SXSW Photo Team Application" />
        <p className="description">
          Photos
        </p>

        <img src="/imgs/IMG_1031.JPG" alt="#1"></img>
        <img src="/imgs/IMG_1481.JPG" alt="#2"></img>
        <img src="/imgs/IMG_1734.JPG" alt="#3"></img>
        <img src="/imgs/IMG_1801.JPG" alt="#4"></img>
        {/* <img src="/imgs/IMG_1816.JPG" alt="#5"></img> */}
        <img src="/imgs/IMG_1821.JPG" alt="#6"></img>
        {/* <img src="/imgs/IMG_1841.JPG" alt="#7"></img>
        <img src="/imgs/IMG_1843.JPG" alt="#8"></img> */}
        <img src="/imgs/IMG_1844.JPG" alt="#9"></img>
        {/* <img src="/imgs/IMG_1845.JPG" alt="#10"></img> */}
        <img src="/imgs/IMG_2561.JPG" alt="#10"></img>

      </main>
      <Footer />
    </div>
  )
}
