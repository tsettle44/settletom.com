import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ReactMarkdown from 'react-markdown'
import { Container, Label, Item } from 'semantic-ui-react'

export default ({ data }) => {
  const post = data.post

  return (
    <Layout>
      <SEO title={post.title} />
      <Container
        style={{
          marginBottom: '50px',
          marginTop: '50px',
          padding: '10px',
          fontSize: '1.25rem',
        }}
      >
        <Item.Group>
          <Item>
            <Item.Image src={post.coverImage.url} alt="Cover Image" />

            <Item.Content>
              <Item.Header>{post.title}</Item.Header>
              <Item.Meta>{post.dateAndTime}</Item.Meta>
              <Item.Extra>
                <Label image>
                  <img alt="Author Picture" src={post.authorPost.avatar.url} />
                  {post.authorPost.name}
                </Label>
                <br />
                {post.tags.map((tag, i) => (
                  <Label key={i}>{tag}</Label>
                ))}
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <div style={{ marginBottom: '25px' }}>
          <ReactMarkdown source={post.content} escapeHtml={false} />
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post(slug: { eq: $slug }) {
      id
      title
      dateAndTime(formatString: "MMMM DD, YYYY, h:mm a")
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
