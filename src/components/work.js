import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import 'semantic-ui-css/semantic.min.css'
import { Container, Reveal, Grid, Image, Button } from 'semantic-ui-react'
import Img from 'gatsby-image'

const Work = () => {
  return (
    <StaticQuery
      query={graphql`
        query project {
          allContentfulProject {
            edges {
              node {
                coverImage {
                  title
                  file {
                    url
                  }
                }
                description {
                  description
                }
                title
                sourceCode
                link
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          <Container style={{ paddingTop: '20px', fontSize: '1rem' }}>
            <div
              style={{
                paddingTop: '100px',
                textAlign: 'center',
              }}
            >
              <h2 style={{ fontSize: '2rem' }}>My recent work</h2>
            </div>
            <Grid stackable style={{ marginTop: '50px' }} divided="vertically">
              <Grid.Row columns={3}>
                {data.allContentfulProject.edges.map((project, index) => (
                  <Grid.Column key={index}>
                    <Reveal
                      style={{
                        borderRadius: '5px',
                        backgroundColor: '#8c43ff',
                        boxShadow:
                          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                      }}
                      animated="move up"
                    >
                      <Reveal.Content visible>
                        <Image
                          style={{ margin: '0' }}
                          alt={project.node.coverImage.title}
                          src={project.node.coverImage.file.url}
                        />
                      </Reveal.Content>
                      <Reveal.Content hidden>
                        <div
                          style={{
                            height: '236px',
                            textAlign: 'center',
                          }}
                        >
                          <p
                            style={{
                              padding: '10px',
                              paddingTop: '30px',
                              color: 'white',
                              fontSize: '1.1rem',
                            }}
                          >
                            {project.node.description.description}
                          </p>
                          <Button
                            style={{
                              fontSize: '1.25rem',
                              borderRadius: '1rem',
                            }}
                            inverted
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.node.link}
                          >
                            View Site
                          </Button>
                          <p style={{ marginTop: '5px' }}>
                            <a
                              style={{
                                color: 'white',
                                textDecoration: 'underline',
                              }}
                              target="_blank"
                              rel="noopener noreferrer"
                              href={project.node.sourceCode}
                            >
                              Source Code
                            </a>
                          </p>
                        </div>
                      </Reveal.Content>
                    </Reveal>
                  </Grid.Column>
                ))}
              </Grid.Row>
            </Grid>
            <div style={{ marginTop: '50px', textAlign: 'center' }}>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/tsettle44"
                inverted
                color="violet"
                style={{ fontSize: '1.25rem', borderRadius: '10px' }}
              >
                See more on Github
              </Button>
            </div>
          </Container>
        </div>
      )}
    />
  )
}

export default Work
