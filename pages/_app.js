import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import  Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
