import Whoare from '../Whoweare/Whoare'
import React from 'react'
import Head from 'next/head';

const Whoweare = () => {
  return (
    <>
             <Head>
        <title>
        Who we are
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <Whoare/>
    </>
  )
}

export default Whoweare