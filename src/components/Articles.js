import React from 'react'
import { colors } from '../theme/colors'
import Article from './Article'
import Text from './Text'

export default function Articles() {
  return (
    <div className='mt-5'>
      <Text className="bold" style={{ fontSize: "20px", color: colors.black }}>Articles</Text>
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  )
}
