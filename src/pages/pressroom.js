import Pressroom from '../pressroom/Pressroom'
import React from 'react'
import Head from 'next/head';

const pressroom = () => {
  return (
    <>
           <Head>
        <title>
         Press room
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <Pressroom/>
    </>
  )
}

export default pressroom