import React from 'react'
import { Container, Header, Grid, Icon } from 'semantic-ui-react'

const About = () => (
  <div>
    <Container style={{ minHeight: '500px' }} textAlign="center">
      <Grid style={{ marginBotton: '200px' }} centered columns={1}>
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
              I currently work as a Technology Consultant and do freelance
              development on the side{' '}
              <span role="img" aria-label="peace">
                😃
              </span>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <div
      style={{ width: '100vw', minHeight: '700px', backgroundColor: '#8c43ff' }}
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
            backgroundColor: 'white',
            boxShadow:
              '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
        >
          <Grid.Column
            style={{
              borderRight: '1px solid #e6ecf8',
              borderBottom: '1px solid #e6ecf8',
            }}
            textAlign="center"
          >
            <Icon color="violet" name="database" size="huge" />
            <p
              style={{
                marginTop: '15px',
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              Backend Development
            </p>
            <p style={{ marginTop: '25px', fontSize: '1rem', padding: '15px' }}>
              Secure RESTful API's built to receive, send, update, and delete
              data that can be integrated with a client-side website and a
              database to securely save your data.
            </p>
            <p
              style={{
                marginTop: '25px',
                fontSize: '1.25rem',
                color: '#8c43ff',
              }}
            >
              Languages/Tech
            </p>
            <p>Nodejs</p>
            <p>Expressjs</p>
            <p>MongoDB</p>
            <p>GraphQL</p>
            <p
              style={{
                marginTop: '25px',
                fontSize: '1.25rem',
                color: '#8c43ff',
              }}
            >
              Tools
            </p>
            <p>GraphCMS (Headless CMS)</p>
            <p>Mlab</p>
            <p>OAuth</p>
            <p>Postman</p>
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
            <p
              style={{
                marginTop: '15px',
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              Frontend Development
            </p>
            <p style={{ marginTop: '25px', fontSize: '1rem', padding: '15px' }}>
              I am a framework/library lover. Currently obsessed with React and
              Gatsby
              <br />
              <br />
              <br />
            </p>
            <p
              style={{
                marginTop: '25px',
                fontSize: '1.25rem',
                color: '#8c43ff',
              }}
            >
              Languages/Tech
            </p>
            <p>React</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Vanila JavaScript</p>
            <p
              style={{
                marginTop: '25px',
                fontSize: '1.25rem',
                color: '#8c43ff',
              }}
            >
              Tools
            </p>
            <p>VSCode</p>
            <p>Git</p>
            <p>Hyper</p>
            <p>Bootstrap</p>
            <p>Gatsby</p>
          </Grid.Column>
          <Grid.Column style={{ paddingTop: '20px' }} textAlign="center">
            <Icon color="violet" name="paint brush" size="huge" />
            <p
              style={{
                marginTop: '15px',
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              Design
            </p>
            <p style={{ marginTop: '25px', fontSize: '1rem', padding: '15px' }}>
              I love to dabble in design and keep my mind creative. I have a
              great appreciaiton for simple website/app design and bright colors
              <br />
              <br />
            </p>
            <p
              style={{
                marginTop: '25px',
                fontSize: '1.25rem',
                color: '#8c43ff',
              }}
            >
              Design Specialties
            </p>
            <p>UI/UX</p>
            <p>Web</p>
            <p>iOS/Android</p>
            <p>Logos</p>
            <p
              style={{
                marginTop: '25px',
                fontSize: '1.25rem',
                color: '#8c43ff',
              }}
            >
              Tools
            </p>
            <p>Adobe Illustrator</p>
            <p>Adobe Photoshop</p>
            <p>Adobe Xd</p>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  </div>
)

export default About
