import React from 'react'
import Header from './Components/Header'
import Offers from './Components/Offers'
import Populars from './Components/Populars'
import News from './Components/News'

function Home() {
  return (
    <div className='pb-[10vh]'>
    <Header/>
    <Offers/>
    <Populars/>
    <News/>
    </div>
  )
}

export default Home