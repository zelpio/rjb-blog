import * as React from "react"
import { Link, graphql } from "gatsby"

import PostJob from "../components/postJobDialog"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageNav from '../components/PageNav'

const BlogIndex = props => {

  const {data, location, pageContext} = props
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <PostJob />
        <p>
          No blog posts found.
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <PostJob />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <Link className="text-xl block font-black py-4" to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  <div className="text-sm opacity-70">{post.frontmatter.date}</div>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                    className="text-md opacity-70"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
      <PageNav pageContext={pageContext}/>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All thoughts" />

export const pageQuery = graphql`
  query ($limit: Int!, $skip: Int!){
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
