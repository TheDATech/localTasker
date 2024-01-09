import React from 'react'
import Head from 'next/head';
import Page from '../Blog/page';

const Blog = () => {
  return (
    <>
             <Head>
        <title>
        Blogs     </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
    <Page/>
    </>
  )
}

export default Blog