import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Grid, Button, Form, TextArea } from 'semantic-ui-react'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div style={{ height: '100vh' }}>
      <Container style={{ paddingTop: '50px' }}>
        <Grid centered columns={2}>
          <Grid.Column
            style={{
              border: '1px solid #e6ecf8',
              borderRadius: '10px',
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            }}
          >
            <h2 style={{ textAlign: 'center', color: '#8c43ff' }}>
              Contact Me
            </h2>
            <Form
              data-netlify="true"
              action="/success"
              method="POST"
              style={{ fontSize: '1.25rem', marginTop: '20px' }}
            >
              <Form.Field required>
                <label style={{ color: '#8c43ff' }}>First Name</label>
                <input placeholder="First Name" />
              </Form.Field>
              <Form.Field required>
                <label style={{ color: '#8c43ff' }}>Last Name</label>
                <input placeholder="Last Name" />
              </Form.Field>
              <Form.Field required>
                <label style={{ color: '#8c43ff' }}>Email</label>
                <input type="email" placeholder="joe.schmoe.com" />
              </Form.Field>
              <Form.Field required id="form-textarea-control-opinion">
                <label style={{ color: '#8c43ff' }}>Message</label>
                <TextArea />
              </Form.Field>
              <div data-netlify-recaptcha="true" />
              <Form.Field type="submit" control={Button} content="Send" />
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  </Layout>
)

export default Contact
