import React from 'react'
import './Crads.css'
import { CardsData } from '../../Data/Data.js'
import Card from '../Card/Card'


const Crads = () => {
  return (
    <>
    <div className='Cards'>
        {CardsData.map((card,id)=>{
            return(
                <div className='parentContainer'>
                  <Card
                    title={card.title}
                    color={card.color}
                    barValue={card.barValue}
                    value={card.value}
                    png={card.png}
                    series={card.series}
                    />

                </div>
            )
        })}

    </div>
    </>
  )
}

export default Crads