import React from 'react'
import { colors } from '../theme/colors'
import Category from './Category'
import Text from './Text'

export default function Categories() {
  return (
    <section className='mt-5'>
      <Text className="bold" style={{fontSize: "20px", color: colors.black }}>Categories</Text>
      <Category title="travel" amount="23"/>
      <Category title="photography" amount="21"/>
      <Category title="fashion" amount="13"/>
      <Category title="food" amount="2"/>
    </section>
  )
}
