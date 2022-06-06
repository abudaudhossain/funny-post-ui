import React from 'react'
import Footer from '../components/Footer'
import Menubar from '../components/Menubar'

import '../assets/styles/leftSide.css'

export default function LeftSide() {

  return (
    <aside className='leftSide' >
      <Menubar />
      <Footer />
    </aside>
  )
}
