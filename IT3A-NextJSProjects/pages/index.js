import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>My Nextjs Blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>10 Things that Require Zero Talent: </p>
        <ul>
          <li>Punctuality</li>
          <li>Exerting Effort and Hard Work</li>
          <li>Being Enthusiastic</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}