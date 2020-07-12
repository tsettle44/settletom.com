---
path: gatsby-image-with-contentful-cms
date: 2020-07-12T03:22:22.262Z
title: Using gatsby-image with Contentful
readTime: 5 min
author: Tom Settle
authorImage: assets/img_3915.jpg
coverImage: assets/1_xfoeidc-tbq8wnh0gtkn8g.png
preview: Recently I have been building a new site similar to a blog-style site
  (more of a news site), and am of course using Gatsby and then switching my CMS
  to the more popular Contentful...
tags:
  - Gatsby
  - Contentful
---
## Why `gatsby-image` is so good and why you should be using it.

Recently I have been building a new site similar to a blog-style site (more of a news site), and am of course using [Gatsby](https://www.gatsbyjs.org/) and then switching my CMS to the more popular [Contentful](https://www.contentful.com/). I was able to easily set up all the content and pull it into front-end, but my site was performing poorly on the lighthouse audit because all my images where being dynamically loaded directing into a `<img src={}/>.`

This caused the page on load to stutter into loading all the images and it felt choppy. I had always seen [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) but honestly, I could never get passed what was given to me in the gatsby-starter and was only using it for local image files like logos or any image saved directly to my codebase.

But let me show you my struggle of getting to use gatsby-image with dynamically loaded images from a CMS and truly how easy it is.

### My old GraphQl query

```
allContentfulBlog(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          coverImage {
            file {
              url
            }
            title
         }
      }
   }
}
```

The `coverImage` is the image I am grabbing and was just directly referencing the file url. Like I said before this was resulting in poor performance and was not taking advantage of the Lazy load feature of `gatsby-image`.

### Adding gatsby-image

First, make sure `gatsby-image` is installed on your project (it should be with most all gatsby starters). 

If not `npm i gatsby-image`.

Next, simply on the page that you are rendering the image elements... 

`import Img from "gatsby-image"`

**Change your query to use gatsby-image**

Contentful is one of the handfuls of CMS that gatsby-image supports directly so this is very painless. Instead of using `file { url }` we will use `fluid { ...GatsbyContentfulFluid }`

```
allContentfulBlog(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          coverImage {
            fluid(maxWidth: 980) {
              ...GatsbyContentfulFluid
            }
            title
         }
      }
   }
}
```

The fluid tag is for images that are fluid to their containers you can also use fixed and a range of others found in the gatsby-image [docs](https://www.gatsbyjs.org/packages/gatsby-image/).

Lastly, using this query you can map through the results and add to the `<Img />` component we imported. It will look something like this.

```
{allContentfulBlog.edges[0].node.tags.map(tag => (
   <Img 
        fluid={allContentfulBlog.edges[0].node.coverImage.fluid}
        key={allContentfulBlog.edges[0].node.coverImage.fluid.src}
        alt={allContentfulBlog.edges[0].node.coverImage.title}
   >
   </Img>
))}
```

These are the necessary props for the component, `key={}, fluid={}, alt={}` 

Once those are all populated, your images will now be loaded using gatsby-image! and it makes such a great difference I am in the process of changing all my images to use this because the performance difference seriously is insane.