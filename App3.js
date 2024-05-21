import React from 'react'
import Content from './Content'
import { Content1 } from './Content1'
import Footer from './Footer'
import Header from './Header'

function App3() {
  return (
    <div>
       <Header/>
      <Footer/>
      <Content name="nivetha" age="26" isMarried={true}/>
      <Content name="adhi" age={22} isMarried={true}/>
      <Content name="anu" age={23} isMarried={false}/> 
      <Content1/>
    </div>
  )
}

export default App3