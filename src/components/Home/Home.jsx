import React from 'react'
import './Home.css'
import Cards from '../Cards/Crads'
import Table from '../Table/Table'



const Home = () => {
  return (
    
    <div className='Home'>
        <h1>DashBoard</h1>
        <Cards/>
        <Table/>

        {/* hello */}
    </div>
    
  )
}

export default Home


