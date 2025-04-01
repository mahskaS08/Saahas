import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './components/Projects'


const App = () => {
  return (
    <>

    <div className='w-full overflow-hidden'>
      <Header></Header>
    </div>
    <Projects></Projects>
    <Footer />

    </>
  )
}

export default App


