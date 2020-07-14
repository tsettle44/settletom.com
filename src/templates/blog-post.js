import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Label, Item } from 'semantic-ui-react'
import { Disqus } from 'gatsby-plugin-disqus'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import Img from 'gatsby-image'

import './blog.css'

export default ({ data }) => {
  let disqusConfig = {
    url: `https://www.settletom.com/blog/${data.contentfulBlog.slug}`,
    identifier: data.contentfulBlog.title,
    title: data.contentfulBlog.title,
  }
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const fixed = data.allContentfulAsset.nodes.find(
          n => n.file.url === node.data.target.fields.file['en-US'].url
        ).fixed
        return (
          <div className="imageWrapper2">
            <Img
              className="blogImage2"
              fixed={fixed}
              title={node.data.target.fields.title['en-US']}
            />
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <SEO title={data.contentfulBlog.title} />
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
            <Item.Image className="blogImage1">
              <Img
                className="imageWrapper1"
                key={data.contentfulBlog.coverImage.title}
                fluid={data.contentfulBlog.coverImage.fluid}
              ></Img>
            </Item.Image>

            <Item.Content>
              <Item.Header>{data.contentfulBlog.title}</Item.Header>
              <Item.Meta>{data.contentfulBlog.date}</Item.Meta>
              <Item.Extra>
                <Label image>
                  Written by: {data.contentfulBlog.author.name}
                </Label>
                <br />
                {data.contentfulBlog.tags.map((tag, i) => (
                  <Label key={i}>{tag}</Label>
                ))}
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <div className="blog-post-content">
          {documentToReactComponents(data.contentfulBlog.body.json, options)}
        </div>

        <Disqus config={disqusConfig} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query blogQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      coverImage {
        fluid {
          ...GatsbyContentfulFluid
        }
        title
      }
      author {
        name
      }
      date(formatString: "MMMM Do, YYYY")
      body {
        json
      }
      tags
    }
    allContentfulAsset {
      nodes {
        file {
          url
        }
        fixed(width: 1000, quality: 100) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
    }
  }
`
