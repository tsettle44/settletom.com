import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container } from 'semantic-ui-react'

const SecondPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <h1>Hi welcome to the Blog</h1>
        {data.allAuthor.edges.map((author, index) => (
          <div style={{ marginBottom: '5rem' }} key={index}>
            <img
              style={{
                height: '4rem',
                borderRadius: '2rem',
                display: 'inline',
                float: 'left',
              }}
              src={author.node.avatar.url}
              alt="Author Avatar"
            />
            <p>
              Written by{' '}
              <span style={{ fontWeight: '700' }}>{author.node.name} </span>
              <br />
              <span>{author.node.bibliography}</span>
            </p>
          </div>
        ))}
        {data.allPost.edges.map((post, index) => (
          <Link key={index} to={`/blog/${post.node.slug}`}>
            <h3>{post.node.title}</h3>
            <p>{post.node.createdAt}</p>
          </Link>
        ))}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query data {
    allPost {
      totalCount
      edges {
        node {
          title
          createdAt(formatString: "MM-DD-YYYY")
          slug
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
