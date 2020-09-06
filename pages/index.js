import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Alert from '../components/alert'
import Link from 'next/link'

const AlertType = 'success'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          (This is a sample website - you'll be building a site like this on {' '}
          <a herf="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
        <Link href="/posts/first-post">
          <a>Link to first post</a>
        </Link>
        <Alert type={AlertType}>成功</Alert>
    </Layout>
    )
}