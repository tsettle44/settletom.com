import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import 'semantic-ui-css/semantic.min.css'
import wave from '../images/wave.png'
import { Container, Card, Grid, Image, Button, Label } from 'semantic-ui-react'

const threeBlog = () => {
  return (
    <StaticQuery
      query={graphql`
        query three {
          allPost(limit: 3) {
            edges {
              node {
                title
                slug
                preview
                readTime
                tags
                coverImage {
                  url
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div style={{ position: 'relative' }}>
          <div
            style={{
              backgroundImage: 'linear-gradient(to bottom,#8c43ff, #591995)',
              marginTop: '50px',
              paddingBottom: '250px',
            }}
          >
            <Container
              style={{
                paddingTop: '20px',
                fontSize: '1rem',
                textAlign: 'center',
                zIndex: '99',
              }}
            >
              <div
                style={{
                  paddingTop: '50px',
                  textAlign: 'center',
                }}
              >
                <h2 style={{ fontSize: '2rem', color: 'white' }}>
                  Recent blog posts
                </h2>
              </div>
              <Grid
                stackable
                style={{ marginTop: '50px' }}
                divided="vertically"
              >
                <Grid.Row columns={3}>
                  {data.allPost.edges.map((post, index) => (
                    <Grid.Column key={index}>
                      <Card
                        style={{
                          width: '95%',
                          margin: '0 auto',
                          minHeight: '470px',
                          boxShadow:
                            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        }}
                        href={`/blog/${post.node.slug}`}
                      >
                        <Image src={post.node.coverImage.url} />
                        <Card.Content>
                          <Card.Header>{post.node.title}</Card.Header>
                          <Card.Meta>Read Time: {post.node.readTime}</Card.Meta>
                          <Card.Description>
                            {post.node.preview}
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          {post.node.tags.map((tag, i) => (
                            <Label key={i}>{tag}</Label>
                          ))}
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                  ))}
                </Grid.Row>
              </Grid>
            </Container>
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
      )}
    />
  )
}

export default threeBlog
