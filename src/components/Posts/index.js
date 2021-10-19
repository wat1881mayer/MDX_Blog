import React from 'react'
import Post from './Post'
import Banner from '../Banner'
import Paginated from '../Paginated'
const Posts = ({ posts, title ,pageContext}) => {
  return (
    <section className="posts">
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        <article>
          {/* posts column */}
          {posts.map(post =>{
            return <Post key={post.id} {...post} />
          })}
        
        {/* banner column */}
        <div className="jss1">
          <Paginated pageContext={pageContext} />
        </div>
        </article>
        <article >
          <Banner />
        </article>
      </div>
    </section>
  )
}

export default Posts
