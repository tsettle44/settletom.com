import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ReactMarkdown from 'react-markdown'
import { Container, Label, Item } from 'semantic-ui-react'
import { Disqus, DiscussionEmbed, CommentCount } from 'disqus-react'

export default ({ data }) => {
  const post = data.post

  const disqusShortname = 'settletom'
  const disqusConfig = {
    url: `https://www.settletom.com/blog/${post.slug}`,
    identifier: post.id,
    title: post.title,
  }

  return (
    <Layout>
      <SEO title={post.title} />
      <Container style={{ padding: '50px', fontSize: '1.25rem' }}>
        <Item.Group>
          <Item>
            <Item.Image src={post.coverImage.url} alt="Cover Image" />

            <Item.Content>
              <Item.Header>{post.title}</Item.Header>
              <Item.Meta>{post.createdAt}</Item.Meta>
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
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post(slug: { eq: $slug }) {
      id
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
