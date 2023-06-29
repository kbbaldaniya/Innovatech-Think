import Script from 'next/script'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Innovatech Think Pvt Ltd</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
