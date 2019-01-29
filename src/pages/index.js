import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Header } from 'semantic-ui-react'
import Type from '../components/Type'
import posed from 'react-pose'
import wave from '../images/wave.png'

const Title = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
})

class IndexPage extends React.Component {
  state = { isVisible: false }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isVisible: true,
      })
    }, 1000)
  }
  render() {
    return (
      <Title pose={this.state.isVisible ? 'visible' : 'hidden'}>
        <Layout>
          <SEO title="Home" keywords={[`Tom Settle`, `Blog`, `Portfolio`]} />
          <div
            ref="canvas"
            style={{
              backgroundImage: 'linear-gradient(to bottom, #490b72, #791bb7)',
              width: '100vw',
              height: '60vh',
              position: 'relative',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '45vh',
              }}
            >
              <Header
                style={{
                  color: 'white',
                  fontSize: '6rem',
                }}
                size="huge"
              >
                tom settle
                <br />
                <span style={{ fontSize: '2rem' }}>
                  <Type />
                </span>
              </Header>
            </div>
            <img
              style={{
                margin: '0',
                width: '100vw',
                position: 'absolute',
                bottom: '0',
              }}
              src={wave}
              alt="wave"
            />
          </div>
          <Container>
            <div />
          </Container>
        </Layout>
      </Title>
    )
  }
}

export default IndexPage
