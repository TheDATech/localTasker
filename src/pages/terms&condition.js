import Terms from '../terms&condition/Terms'
import React from 'react'
import Head from 'next/head';

const Termscondition = () => {
  return (
    <>
              <Head>
        <title>
         Terms & condition
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <Terms/>
    </>
  )
}

export default Termscondition