import Head from 'next/head'
import Link from 'next/link'

import Layout, {siteTitle} from '../components/layout'
import Date from '../components/date'
import Alert from '../components/alert'

import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

const AlertType = 'success'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props : {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
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
        <Alert type={AlertType}>成功</Alert>
        <ul className ={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) =>(
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
            ))}
        </ul>

    </Layout>
    )
}