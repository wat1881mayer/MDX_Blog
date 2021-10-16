import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import Paginated from '../components/Paginated'
import Layout from '../components/Layout'

const BlogList = props => {
  const posts = props.data.allMdx.nodes
  console.log(props.pageContext)
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title="all posts" pageContext={props.pageContext} />
       
    </Layout>
  )
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          title
          author
          category
          readTime
          slug
          date(formatString: "MMMM,Do YYYY")
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        excerpt
      }
    }
  }
`

export default BlogList
