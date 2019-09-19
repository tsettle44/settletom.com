import React from 'react'
import { graphql } from 'gatsby'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Item, Label } from 'semantic-ui-react'
import './blog.css'

const SecondPage = ({ data }) => {
  const { allMarkdownRemark } = data

  return (
    <Layout>
      <SEO title="Blog" />
      <Container style={{ paddingTop: '20px', fontSize: '1rem' }}>
        <Item.Group link divided>
          {allMarkdownRemark.nodes.map((post, index) => {
            if (post.frontmatter.tags) {
              return (
                <Item key={index} href={post.frontmatter.path}>
                  <Item.Image size="small" src={post.frontmatter.coverImage} />

                  <Item.Content>
                    <Item.Header>{post.frontmatter.title}</Item.Header>
                    <Item.Meta>
                      {post.frontmatter.date} -- {post.frontmatter.readTime}{' '}
                      read
                    </Item.Meta>
                    <Item.Description>
                      {post.frontmatter.preview}
                    </Item.Description>
                    <Item.Extra>
                      {post.frontmatter.tags.map((tag, i) => (
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
    allMarkdownRemark {
      nodes {
        frontmatter {
          author
          authorImage
          coverImage
          date(formatString: "MMMM DD, YYYY")
          path
          preview
          readTime
          tags
          title
        }
        html
      }
    }
  }
`

export default SecondPage
