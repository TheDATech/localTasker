import Becometasker from '../become_a_tasker/Becometasker'
import React from 'react'
import Head from 'next/head';

const become_a_tasker = () => {
  return (
    <>
           <Head>
        <title>
        Become a tasker      </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <Becometasker/>
    </>
  )
}

export default become_a_tasker