import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ReactMarkdown from 'react-markdown'
import { Container, Label, Image, Item } from 'semantic-ui-react'

export default ({ data }) => {
  const post = data.post

  return (
    <Layout>
      <SEO title={post.title} />
      <Container style={{ padding: '50px' }}>
        <Item.Group>
          <Item>
            <Item.Image src={post.coverImage.url} />

            <Item.Content>
              <Item.Header>{post.title}</Item.Header>
              <Item.Meta>{post.createdAt}</Item.Meta>
              <Item.Extra>
                <Label image>
                  <img src={post.authorPost.avatar.url} />
                  {post.authorPost.name}
                </Label>
                <br />
                {post.tags.map(tag => (
                  <Label>{tag}</Label>
                ))}
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <div style={{ fontSize: '1.25rem' }}>
          <ReactMarkdown source={post.content} escapeHtml={false} />
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post(slug: { eq: $slug }) {
      title
      createdAt(formatString: "MMMM DD, YYYY, h:mm a")
      authorPost {
        name
        avatar {
          url
        }
      }
      content
      tags
      coverImage {
        url
      }
    }
  }
`
