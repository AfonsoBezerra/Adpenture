import { LayoutProviderSide } from 'context/SideBar'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { LayoutProvider } from 'context/layout'
import { LayoutProviderNotification } from 'context/notification'
import 'swiper/css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Adventury</title>
      </Head>
      <LayoutProvider>
        <LayoutProviderSide>
          <LayoutProviderNotification>
            <Component {...pageProps} />
          </LayoutProviderNotification>
        </LayoutProviderSide>
      </LayoutProvider>
    </>
  )
}
