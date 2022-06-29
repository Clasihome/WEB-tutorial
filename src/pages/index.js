import React from 'react';
import Layout from '../layout';
import Hero from '../sections/home/hero';
import PropertyDetails from '../sections/home/property-details';

const IndexPage = () => {

  return(
    <Layout >
      <Hero />
      <PropertyDetails />
    </Layout>
  )
}

export default IndexPage;