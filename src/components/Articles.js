import React from 'react'
import UsePost from '../hooks/UsePost'
import { colors } from '../theme/colors'
import Article from './Article'
import Text from './Text'

export default function Articles() {
  const { posts } = UsePost();

  console.log(posts)
  return (
    <div className='mt-5'>
      <Text className="bold" style={{ fontSize: "20px", color: colors.black }}>Articles</Text>
      {
        posts && (posts.slice(5, 10).map((post, index) => (
          <Article key={index} post={post} />
        )))
      }
    </div>
  )
}
