import React from 'react';
import Layout from '../layout';
import styled from 'styled-components';
import Button from '../styled-components/button';

const Title = styled.h1`
  color: ${props => props.theme.primary};
`

const IndexPage = () => {

  return(
    <Layout >
      <div>
        <Title>
          Index page
        </Title>
        <Button>Start</Button>
      </div>
    </Layout>
  )
}

export default IndexPage;