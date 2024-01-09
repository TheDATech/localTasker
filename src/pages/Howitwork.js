import React from 'react'
import HowItWorks from '../Howitworks/HowItWorks';
import Head from 'next/head';

const Howitwork = () => {
  return (
    <>
        <Head>
        <title>
          How it works
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
    <HowItWorks/>
    </>
  )
}

export default Howitwork