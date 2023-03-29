import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={manrope.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
