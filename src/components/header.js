import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Container } from 'semantic-ui-react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#490b72`,
    }}
  >
    <Container
      style={{
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <span role="img" aria-label="peace">
            👱‍♂️
          </span>{' '}
          {siteTitle}
        </Link>
        <Link
          style={{
            float: 'right',
            color: '#8440b2',
            textDecoration: 'underline',
          }}
          to="/blog/"
        >
          Blog
        </Link>
      </h1>
    </Container>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
