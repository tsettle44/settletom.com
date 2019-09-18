import React from 'react'
import { graphql } from 'gatsby'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Item, Label } from 'semantic-ui-react'
import './blog.css'

const SecondPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Container style={{ paddingTop: '20px', fontSize: '1rem' }}>
        <Item.Group link divided>
          {data.allPost.edges.map((post, index) => {
            if (post.node.status === 'PUBLISHED') {
              return (
                <Item key={index} href={post.node.slug}>
                  <Item.Image size="small" src={post.node.coverImage.url} />

                  <Item.Content>
                    <Item.Header>{post.node.title}</Item.Header>
                    <Item.Meta>
                      {post.node.dateAndTime} -- {post.node.readTime} read
                    </Item.Meta>
                    <Item.Description>{post.node.preview}</Item.Description>
                    <Item.Extra>
                      {post.node.tags.map((tag, i) => (
                        <Label key={i}>{tag}</Label>
                      ))}
                    </Item.Extra>
                  </Item.Content>
                </Item>
              )
            } else {
              return null
            }
          })}
        </Item.Group>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allPost {
      totalCount
      edges {
        node {
          status
          title
          readTime
          dateAndTime(formatString: "MMMM DD, YYYY")
          slug
          preview
          tags
          coverImage {
            url
          }
          authorPost {
            name
          }
        }
      }
    }
    allAuthor {
      edges {
        node {
          name
          avatar {
            url
          }
          bibliography
        }
      }
    }
  }
`

export default SecondPage
