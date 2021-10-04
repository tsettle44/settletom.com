import React from 'react'
import { Link } from 'gatsby'
import { Grid, Container, Header, Button } from 'semantic-ui-react'

const ContactLabel = () => (
  <div>
    <div style={{ height: '300px' }} />
    <div
      style={{ height: '200px', width: '100vw', backgroundColor: '#591995' }}
    >
      <Container>
        <Grid
          stackable
          centered
          columns={3}
          style={{
            borderRadius: '50px',
            position: 'relative',
            bottom: '100px',
            padding: '15px',
            backgroundColor: '#555',
            boxShadow:
              '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
        >
          <Grid.Column textAlign="center" verticalAlign="middle">
            <Header style={{ color: 'white', fontSize: '1.5rem' }}>
              Want to work together?
            </Header>
          </Grid.Column>
          <Grid.Column textAlign="center" verticalAlign="middle">
            <p style={{ color: 'white', fontSize: '1.25rem' }}>
              Shoot me a message and I will absolutely get back to you. Anything
              from help, advice, to a project proposal!
            </p>
          </Grid.Column>
          <Grid.Column textAlign="center" verticalAlign="middle">
            <Link to="/contact/">
              <Button
                inverted
                color="violet"
                style={{ fontSize: '1.25rem', borderRadius: '10px' }}
              >
                Contact me
              </Button>
            </Link>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  </div>
)

export default ContactLabel
