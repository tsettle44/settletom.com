import React from 'react'
import { graphql } from 'gatsby'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Item, Label } from 'semantic-ui-react'
import Img from 'gatsby-image'
import './blog.css'

const SecondPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Container
        style={{ paddingTop: '20px', fontSize: '1rem', paddingBottom: '20px' }}
      >
        <Item.Group link divided>
          {data.allContentfulBlog.edges.map((post, index) => {
            if (post.node.tags) {
              return (
                <Item key={index} href={`/blog/${post.node.slug}`}>
                  <Item.Image className="blogImage">
                    <Img
                      className="imageWrapper"
                      key={post.node.coverImage.title}
                      fluid={post.node.coverImage.fluid}
                    ></Img>
                  </Item.Image>

                  <Item.Content>
                    <Item.Header>{post.node.title}</Item.Header>
                    <Item.Meta>
                      {post.node.date} -- {post.node.readTime} read
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
    allContentfulBlog(sort: { fields: date, order: DESC }) {
      edges {
        node {
          author {
            authorImage {
              title
            }
            name
          }
          coverImage {
            title
            file {
              url
            }
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          date(formatString: "MMMM Do, YYYY")
          readTime
          tags
          title
          slug
        }
      }
    }
  }
`

export default SecondPage
