import Career from '../career/Career';
import React from 'react'
import Head from 'next/head';

const career = () => {
  return (
    <>
             <Head>
        <title>
        Career     </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <Career/>
    </>
  )
}

export default career