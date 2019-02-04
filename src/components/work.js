import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import 'semantic-ui-css/semantic.min.css'
import { Container, Reveal, Grid, Image, Button } from 'semantic-ui-react'

const Work = () => {
  return (
    <StaticQuery
      query={graphql`
        query project {
          allProject {
            edges {
              node {
                name
                description
                link
                displayImage {
                  url
                }
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
                {data.allProject.edges.map((project, index) => (
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
                          src={project.node.displayImage.url}
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
                              paddingTop: '50px',
                              color: 'white',
                              fontSize: '1.1rem',
                            }}
                          >
                            {project.node.description}
                          </p>
                          <Button
                            style={{
                              fontSize: '1.25rem',
                              borderRadius: '1rem',
                            }}
                            inverted
                            target="_blank"
                            href={project.node.link}
                          >
                            View Site
                          </Button>
                        </div>
                      </Reveal.Content>
                    </Reveal>
                  </Grid.Column>
                ))}
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      )}
    />
  )
}

export default Work
