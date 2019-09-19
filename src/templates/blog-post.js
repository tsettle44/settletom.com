import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Label, Item } from "semantic-ui-react"

import "./blog.css"

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Container
        style={{
          marginBottom: "50px",
          marginTop: "50px",
          padding: "10px",
          fontSize: "1.25rem",
        }}
      >
        <Item.Group>
          <Item>
            <Item.Image src={frontmatter.coverImage} alt="Cover" />

            <Item.Content>
              <Item.Header>{frontmatter.title}</Item.Header>
              <Item.Meta>{frontmatter.date}</Item.Meta>
              <Item.Extra>
                <Label image>
                  <img alt="Author" src={frontmatter.authorImage} />
                  {frontmatter.author}
                </Label>
                <br />
                {frontmatter.tags.map((tag, i) => (
                  <Label key={i}>{tag}</Label>
                ))}
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        authorImage
        coverImage
        preview
        tags
      }
    }
  }
`
