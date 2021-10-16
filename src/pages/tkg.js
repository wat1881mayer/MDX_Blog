import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import {RegVideo} from '../components/Complete'

const IndexPage = ({data}) => {
  const {allMdx:{nodes:posts}} = data
  return (
    <Layout>
      <Hero showPerson/>
      <Posts posts={posts} title="最近の投稿"/>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(limit: 3, sort: {fields: frontmatter___date, order: DESC}) {
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

export default IndexPage
