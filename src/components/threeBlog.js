import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import 'semantic-ui-css/semantic.min.css'
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
        <div>
          <Container
            style={{
              paddingTop: '20px',
              fontSize: '1rem',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                paddingTop: '100px',
                textAlign: 'center',
              }}
            >
              <h2 style={{ fontSize: '2rem' }}>Recent blog posts</h2>
            </div>
            <Grid stackable style={{ marginTop: '50px' }} divided="vertically">
              <Grid.Row columns={3}>
                {data.allPost.edges.map((post, index) => (
                  <Grid.Column key={index}>
                    <Card
                      style={{
                        margin: '0 auto',
                        minHeight: '440px',
                        boxShadow:
                          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                      }}
                      href={`/blog/${post.node.slug}`}
                    >
                      <Image src={post.node.coverImage.url} />
                      <Card.Content>
                        <Card.Header>{post.node.title}</Card.Header>
                        <Card.Meta>Read Time: {post.node.readTime}</Card.Meta>
                        <Card.Description>{post.node.preview}</Card.Description>
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
            <div style={{ marginTop: '50px', textAlign: 'center' }}>
              <Link to="/blog">
                <Button
                  inverted
                  color="violet"
                  style={{ fontSize: '1.25rem', borderRadius: '10px' }}
                >
                  See the Blog
                </Button>
              </Link>
            </div>
          </Container>
        </div>
      )}
    />
  )
}

export default threeBlog
