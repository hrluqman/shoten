import Head from 'next/head'
import Main from '@/components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shoten</title>
        <meta name="description" content="Created by hrluqman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Main />
      </main>
    </>
  )
}
