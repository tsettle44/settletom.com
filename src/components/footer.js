import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Icon, Button } from 'semantic-ui-react'

const Footer = ({ siteTitle }) => (
  <div
    style={{
      background: `#591995`,
      height: '200px',
    }}
  >
    <Container
      textAlign="center"
      style={{
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <a
        style={{ marginRight: '10px' }}
        target="_blank"
        href="https://www.instagram.com/tbsett"
        rel="noopener noreferrer"
      >
        <Button inverted circular style={{ padding: '10px' }}>
          <Icon
            style={{ margin: '0', padding: '0' }}
            name="instagram"
            size="large"
          />
        </Button>
      </a>
      <a
        style={{ marginRight: '10px' }}
        target="_blank"
        href="https://twitter.com/tsettle44"
        rel="noopener noreferrer"
      >
        <Button inverted circular style={{ padding: '10px' }}>
          <Icon
            style={{ margin: '0', padding: '0' }}
            name="twitter"
            size="large"
          />
        </Button>
      </a>
      <a
        style={{ marginRight: '10px' }}
        target="_blank"
        href="https://medium.com/@tsettle44"
        rel="noopener noreferrer"
      >
        <Button inverted circular style={{ padding: '10px' }}>
          <Icon
            style={{ margin: '0', padding: '0' }}
            name="medium m"
            size="large"
          />
        </Button>
      </a>
      <a
        style={{ marginRight: '10px' }}
        target="_blank"
        href="https://www.linkedin.com/in/settletom/"
        rel="noopener noreferrer"
      >
        <Button inverted circular style={{ padding: '10px' }}>
          <Icon
            style={{ margin: '0', padding: '0' }}
            name="linkedin"
            size="large"
          />
        </Button>
      </a>
      <p style={{ color: 'white', marginTop: '4rem' }}>
        © {new Date().getFullYear()}, Built by me with ❤️ and
        {` `}
        <a
          style={{ color: 'white', textDecoration: 'underline' }}
          href="https://www.gatsbyjs.org"
        >
          Gatsby
        </a>
      </p>
    </Container>
  </div>
)

export default Footer
