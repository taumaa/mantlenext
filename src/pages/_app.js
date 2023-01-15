import '@/styles/globals.css'
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
      <div>
            <Head>
                <title>Mantle Punks</title>

            </Head>

            <Component {...pageProps} />
      </div>
  )
}
