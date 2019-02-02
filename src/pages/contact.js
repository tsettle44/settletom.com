import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Grid } from 'semantic-ui-react'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div style={{ height: '100vh' }}>
      <Container style={{ paddingTop: '50px' }}>
        <Grid style={{ padding: '20px' }} centered columns={1}>
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
              <input type="hidden" name="form-name" value="Contact Form" />
              <p>
                <label>Your Name</label>
              </p>
              <p>
                <input
                  style={{
                    border: '1px solid #e6ecf8',
                    borderRadius: '5px',
                    width: '100%',
                  }}
                  type="text"
                  name="name"
                />
              </p>
              <p>
                <label>Your Email</label>
              </p>
              <p>
                <input
                  style={{
                    border: '1px solid #e6ecf8',
                    borderRadius: '5px',
                    width: '100%',
                  }}
                  type="email"
                  name="email"
                />
              </p>
              <p>
                <label>Message</label>
              </p>
              <p>
                <textarea
                  style={{
                    border: '1px solid #e6ecf8',
                    borderRadius: '5px',
                    width: '100%',
                  }}
                  type="text"
                  name="message"
                />
              </p>
              <div data-netlify-recaptcha="true" />
              <p style={{ textAlign: 'center' }}>
                <button
                  style={{
                    border: '1px solid #e6ecf8',
                    borderRadius: '5px',
                    padding: '10px',
                  }}
                  type="submit"
                >
                  Send
                </button>
              </p>
            </form>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  </Layout>
)

export default Contact
