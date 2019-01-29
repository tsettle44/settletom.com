import React from 'react'
import { Container, Header, Grid, Icon } from 'semantic-ui-react'

const About = () => (
  <div>
    <Container style={{ minHeight: '500px' }} textAlign="center">
      <Grid style={{ marginBotton: '100px' }} centered columns={1}>
        <Grid.Column textAlign="center">
          <Header
            style={{ color: '#8c43ff', marginTop: '5rem', fontSize: '3rem' }}
          >
            Hi, I'm Tom
          </Header>
        </Grid.Column>
        <Grid.Row centered columns={1}>
          <Grid.Column textAlign="center">
            <p style={{ color: '#8c43ff', fontSize: '1.5rem' }}>
              I am a self taught full stack developer with experience in Mobile,
              Web and PWA. I am an addict to learning and helping others learn.
              I currently work as a Technology Consultant and do freelance on
              the side{' '}
              <span role="img" aria-label="peace">
                😃
              </span>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <div
      style={{ width: '100vw', height: '1000px', backgroundColor: '#8c43ff' }}
    >
      <Container>
        <Grid
          stackable
          centered
          columns={3}
          style={{
            borderRadius: '5px',
            position: 'relative',
            bottom: '100px',
            height: '800px',
            backgroundColor: 'white',
            boxShadow:
              '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
        >
          <Grid.Column
            style={{
              borderRight: '1px solid #e6ecf8',
              borderBottom: '1px solid #e6ecf8',
              paddingTop: '20px',
            }}
            textAlign="center"
          >
            <Icon color="violet" name="database" size="huge" />
            <p style={{ marginTop: '15px', fontSize: '1.5rem' }}>
              Backend Development
            </p>
          </Grid.Column>
          <Grid.Column
            style={{
              borderRight: '1px solid #e6ecf8',
              borderBottom: '1px solid #e6ecf8',
              paddingTop: '20px',
            }}
            textAlign="center"
          >
            <Icon color="violet" name="computer" size="huge" />
            <p style={{ marginTop: '15px', fontSize: '1.5rem' }}>
              Frontend Development
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingTop: '20px' }} textAlign="center">
            <Icon color="violet" name="paint brush" size="huge" />
            <p style={{ marginTop: '15px', fontSize: '1.5rem' }}>Design</p>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  </div>
)

export default About
