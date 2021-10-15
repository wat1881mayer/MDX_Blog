import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import Pagination from '../components/Pagination'
import Layout from '../components/Layout'

const BlogList = props => {
  const posts = props.data.allMdx.nodes
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title="all posts" />
      <Pagination props={props}/>
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
      }
    }
  }
`

export default BlogList
