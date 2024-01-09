import Etiquette from '../EtiquetteGuide/Etiquette'
import React from 'react'
import Head from 'next/head';

const EtiquetteGuide = () => {
  return (
    <>
          <Head>
        <title>
        Etiquette Guidelines        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <Etiquette/>
    </>
  )
}

export default EtiquetteGuide