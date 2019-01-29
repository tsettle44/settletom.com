import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Markdown from 'react-markdown'
import { Container } from 'semantic-ui-react'

export default ({ data }) => {
  const post = data.post

  return (
    <Layout>
      <Container>
        <div>
          <h1>{post.title}</h1>
          <img src={post.coverImage.url} alt="Post Cover" />
          <h4>{post.createdAt}</h4>
          <p>Written by: {post.authorPost.name}</p>
          <Markdown source={post.content} escapeHtml={false} />
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
      }
      content
      coverImage {
        url
      }
    }
  }
`
