import React from 'react'
import { Link } from 'gatsby'
import { Icon } from 'semantic-ui-react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Success = () => (
  <Layout>
    <SEO title="Success" />
    <div
      style={{
        height: '100vh',
        textAlign: 'center',
        maxWidth: '300px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          padding: '20px',
          marginTop: '100px',
          border: '1px solid #e6ecf8',
          borderRadius: '10px',
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
      >
        <Icon name="check circle" size="massive" color="green" />
        <h2>Success! Message was sent.</h2>
        <Link to="/">
          <p>Back home.</p>
        </Link>
      </div>
    </div>
  </Layout>
)

export default Success
