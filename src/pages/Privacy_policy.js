import React from 'react'
import Head from 'next/head';
import Privacy from '../Privacypolicy/Privacy';

const Privacy_Policy = () => {
  return (
    <>
           <Head>
        <title>
        Privacy Policy
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <Privacy/>
    </>
  )
}

export default Privacy_Policy