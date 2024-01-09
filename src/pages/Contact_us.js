import Contact from '../Contact_us/Contact'
import React from 'react'
import Head from 'next/head';

const Contact_us = () => {
  return (
    <>
                <Head>
        <title>
        Contact us        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <Contact/>
    </>
  )
}

export default Contact_us