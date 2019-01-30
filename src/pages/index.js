import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Header } from 'semantic-ui-react'
import About from '../components/about'
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
              backgroundImage: 'linear-gradient(to bottom, #591995, #8c43ff)',
              width: '100vw',
              height: '60vh',
              position: 'relative',
              top: '-2px',
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
                <div style={{ fontSize: '2rem' }} />
              </Header>
            </div>
            <img
              style={{
                margin: '0',
                width: '100vw',
                position: 'absolute',
                bottom: '-2px',
              }}
              src={wave}
              alt="wave"
            />
          </div>
          <About />
        </Layout>
      </Title>
    )
  }
}

export default IndexPage
