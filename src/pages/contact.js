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
            <form
              name="Contact Form"
              data-netlify="true"
              action="/success"
              method="POST"
              data-netlify-honeypot="bot-field"
              style={{ fontSize: '1.25rem', marginTop: '20px' }}
            >
              <input type="hidden" name="Contact Form" value="contact" />
              <p>
                <label>
                  Your Name: <input type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Your Email: <input type="email" name="email" />
                </label>
              </p>

              <p>
                <label>
                  Message: <textarea name="message" />
                </label>
              </p>
              <div data-netlify-recaptcha="true" />
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  </Layout>
)

export default Contact
