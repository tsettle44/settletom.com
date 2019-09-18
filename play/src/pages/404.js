import React from 'react'
import { Link } from 'gatsby'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ height: '100vh', textAlign: 'center', marginTop: '100px' }}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">
        <p style={{ color: '#8c43ff', textDecoration: 'underline' }}>
          Take me home
        </p>
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
