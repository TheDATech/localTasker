import React from 'react'
import FAQs from "../F&Q/FAQ";
import Head from 'next/head';

const FAQ = () => {
  return (
    <>
            <Head>
        <title>
         F&Q
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <FAQs/>
    </>
  )
}

export default FAQ