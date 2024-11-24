import React from 'react'
import backgroundImage from './assets/assets/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Movies from './components/Movies'
import Features from './components/Features'
import Questions from './components/Questions'
function App() {

  return (
    <>
    <div >
        <div className="" style={{width:"100%",height:"100vh",backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), URL(${backgroundImage})`,backgroundSize:"cover"}}>
          <Header/>
          <Content/>
          <Movies/>
          <Features/>
          <Questions/>
          <Footer/>

          </div>
    </div>
    </>
  )
}

export default App
