import React from 'react'
import Articles from '../components/Articles'
import Categories from '../components/Categories'
import SearchFelid from '../components/SearchFelid'
import Tags from '../components/Tags'


export default function RightSide() {
  return (
    <aside className='mt-5'>

      <SearchFelid />
      <Categories />
      <Articles />
      <Tags />
    </aside>
  )
}
