import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>第一篇文章</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  )
}