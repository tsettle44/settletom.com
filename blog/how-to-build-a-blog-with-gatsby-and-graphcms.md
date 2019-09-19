---
path: /blog/how-to-gatsby-and-graphcms-blog
date: 2019-02-10T18:28:03.291Z
title: 'How to: Build a blog with Gatsby and GraphCMS'
readTime: 7 min
author: Tom Settle
authorImage: /assets/img_3915.jpg
coverImage: /assets/graphcmsteaser.png
preview: >-
  Gatsby is a blazing fast static website generator perfect for the modern day.
  Easy for building progressive web apps, mobile-friendly sites, and super quick
  desktop sites. This tutorial is written using Gatsby V2 and GraphCMS (a
  headless CMS - similar to WordPress)...
tags:
  - Tutorial
  - Gatsby
  - JavaScript
  - GraphCMS
---
## I want to show you how easy it can be to create an extremely fast and customizable blog site using some of the newest and greatest technologies in JavaScript today.

### Technologies we will be using

- Gatsby
- React
- GraphQL
- GraphCMS

### 1. Getting Started (Installations)

We will be installing all packages using npm so please make sure you have Node.js installed and updated; you can do so here if you have not. --  [Node.js](https://nodejs.org/en/)

Next, we will install and use the Gatsby CLI, this is a great tool that lets us do everything we need to do with Gatsby including creating a new site from a template or completely from scratch.
#### **Gatsby CLI**

Open your terminal of choice and enter

`npm install --global gatsby-cli`

Gatsby has a huge library of starters that can be used when you first create the site, today it makes the most sense to use their [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) template. To do this we add the repo link to the end of the `gatsby new` command.
Other starts can be found [here](https://www.gatsbyjs.org/starters/?v=2)

Next, let's create the site and `cd` into it. We can call it `blog-tut`, run

`gatsby new blog-tut https://github.com/gatsbyjs/gatsby-starter-blog && cd blog-tut`

Now that our site and folder are created make sure you are in your sites directory and run
`gatsby develop`

This creates a web server instance on localport:8000 and will open in your browser

![starter-blog](https://media.graphcms.com//5czxMb9DTYSBmmS8QhjH)

That was super easy... this blog site is using static markdown files that are saved directly in the sites folder we want to manage all this content from a CMS. This would most likely be the case if you were making something like this for a client because most people will not want to be writing raw markdown files.

### 2. Setting up and Plugins

#### **First lets do some cleanup**
Starting with the author header, let's go ahead and update that without information. This will also give you a better idea of how the file structure works.

Navigate to `gatsby.config.js`

The top of the file shows an object called **siteMetadata** this is where the bio page is pulling the data from so go ahead and update your information here
```javascript
siteMetadata: {
    title: 'Gatsby Starter Blog',
    author: 'Tom Settle',
    description: 'A starter blog demonstrating what Gatsby can do.',
    siteUrl: 'https://gatsby-starter-blog-demo.netlify.com/',
    social: {
      twitter: 'tsettle44',
    },
  }
```

Go ahead and save `gatsby.config.js` and navigate to 
``` javascript
-- src
  |-- components
     |-- Bio.js
```

At the bottom of the file the `const bioQuery` is the GraphQL query that is running locally to grab that data, you can also see that this is where is it grabbing the profile image which is located in the content folder in the root. You can also change the supporting text of the Bio component in the `<p>` tag to update the city it displays.

Great! now our bio component is updated. Next, let's go ahead and connect GraphCMS and get some dynamic blog posts in there.

#### **Connect GraphCMS**
<br>
Create a GraphCMS account or login [here](https://graphcms.com/)
<br>
<br>
Once you login create a new project. Give it a name, description, and select the region with the lowest latency. Select the developer plan, it is free and has everything we will need.

#### **Creating Post Schema**

On the left navigation bar go to Schema and add a new Model named Post.

Here we will add all the fields that we will query from our client site.

**Add Fields**
<br>

- Title - Single Line Text
- Slug - Single Line Text
- Date - Date
- Preview - Multi-Line Text
- Body - Markdown

**Add Content**
<br>
Next, we will go ahead and add some dummy posts. Rather than quickly writing up 3 blog posts go ahead and use this [site](https://sneeit.com/spotdummy-blogger-demo-data-generator-for-template-developers/) and copy the raw text. On GraphCMS navigate to the content section and add a Post and fill out each of the inputs. (Slug is going to be the title all lowercase with no spaces; this will act as the URL placeholder eg - "blog-post-example"
<br>
When finished your Post content should have three published blogs. To check that your API is working you can use GraphCMS's native GraphQL playground called API Explorer.
<br>
Try the query.
```
{ 
  posts {
    title
    slug
    date
    body
  }
}
```
This should return all your posts and each field that we queried for in our GraphQL request!
<br>
<br>
Great so now we have the content and know that the API is working, let's go ahead and connect that to our client.

#### **Gatsby GraphCMS plugin**

In order to connect our CMS we need to install a plugin to our client-side Gatsby site. To do this in your terminal enter `npm i gatsby-source-graphcms`

With this plugin, we can add some simple code into the `gatsby-config.js` file and boom that API data is now accessible on our client.

Add this object to your plugins array.
```
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `graphql_endpoint`,
        query: `{
            posts(orderBy: date_DESC) {
              id
              title
              slug
              date
              preview
              body
            }
        }`,
      },
    },
```
Replacing the `graphql_endpoint` with the respective string from your GraphCMS Dashboard.

#### **Creating pages**

Once the sire renders we want to create pages and paths for each blog post using the slug field pulled from the CMS. To do this we just need to modify the `gatsby.node.js` file a little.

Go ahead and replace the `gatbsy.node.js` file with this code.

```
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  return graphql(
    `
      {
        allPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allPost.edges;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.slug,
        component: blogPost,
        context: {
          slug: post.node.slug,
          previous,
          next
        }
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

```

This will like I said create a page for each of the blog posts using the slug as the path name!

#### **Client side pages**

Lastly, let's go ahead and update `index.js` to query from our API and display the content on the page.

At the bottom of the file, let's replace the `const pageQuery` with our query.

```
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allPost {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
          preview
          body
        }
      }
    }
  }
`;
```

Next lets update the JSX to render that data. Replce the `const post` with `const post = data.allPost.edges`
<br>
Then lastly, replace the post.map function with this...

```
    {posts.map(({ node }) => {
          const title = node.title || node.slug;
          return (
            <div key={node.id}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4)
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.date}</small>
              <p>{node.preview}</p>
            </div>
          );
        })}
```

And Boom refresh and we have our homepage should now be populated with the data from our CMS!

![Blog page](https://media.graphcms.com//M1v5abL4QiOZguys3sAW)

Awesome, so the last thing we have to do is update the `blog-post.js` so when we click on the blog link it will take us to the full blog. This will be easy.
<br>
Navigate to `blog-post.js` and replace the query at the bottom with...

```
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    post(slug: { eq: $slug }) {
      id
      title
      slug
      preview
      date(formatString: "MMMM DD, YYYY")
      body
    }
  }
`;
```

Next replace the `render()` statement with...

```
render() {
    const post = this.props.data.post;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.title} description={post.preview} />
        <h1>{post.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1)
          }}
        >
          {post.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
```

**We are basically done! Everything should work now, but we need to add a package to render our markdown from GraphCMS as HTML**

To do this install `npm i react-markdown`

Now at the top of `blog-post.js` import `ReactMarkdown from 'react-markdown'`, and then replace the `div` where we insert the `post.body` with `<ReactMarkdown source={post.body} />`
<br>

![Blog Post](https://media.graphcms.com//9de0GKaCTiqvYLubs8Sb)

There you have it! A quick and easy blog template using a headless CMS! The major advantage here is now that we have the skeleton you can customize this however you like and always just pull the data in from the same place. Thanks so much for following along!
