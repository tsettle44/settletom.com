import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import './layout.css'

class Layout extends React.Component {
  state = { path: '' }

  componentDidMount() {
    this.setState({ path: window.location.pathname })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header
              blog={this.state.path === '/blog/' ? true : false}
              siteTitle={data.site.siteMetadata.title}
            />
            <div>
              {this.props.children}
              <Footer />
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
