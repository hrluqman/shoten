import Head from 'next/head'
import Main from '@/components/Main'
import { useState } from 'react'

export default function Home({ dataProps }) {
  const [data, setData] = useState(dataProps)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const paginateList = (e) => {
    setLoading(true);
    setCurrentPage(Number(e.target.id));
    var offset = (Number(e.target.id) - 1) * 8;
    fetch(`/api/getProducts?status=available&offset=${offset}`).then((res) => res.json())
    .then((resData) => {
        setData(resData);
        setLoading(false);
    })
}

  return (
    <>
      <Head>
        <title>Shoten</title>
        <meta name="description" content="Created by hrluqman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Main data={data} paginateList={paginateList} currentPage={currentPage} loading={loading} />
      </main>
    </>
  )
}

export async function getServerSideProps() {

  const res = await fetch(`https://shoten.hrluqman.com/api/getProducts?status=available&offset=0`)
  const dataProps = await res.json()

  return { props: { dataProps } }
}