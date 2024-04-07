import React from 'react'
import './Product.css'
import Price_comp from './Price_comp'
import Images from './Images'
const Product = ({title , desc , indx}) => {
  let oldPrice = ["12,999","70,000","58,999","95,000"];
  let newPrice = ["12,000","68,000","58,000","93,000"];
  let images= 
  ["https://tse4.mm.bing.net/th?id=OIP.q9xukKilqceBKIzYjbPSKwAAAA&pid=Api&P=0&h=220",
  "https://tse1.mm.bing.net/th?id=OIP.TQjux5rNxgUR9-BnEH7QTwHaI5&pid=Api&P=0&h=220",
   "https://tse3.mm.bing.net/th?id=OIP.1W1x7YUlXu-YmxypdNeuVAHaE8&pid=Api&P=0&h=220",
  "https://tse2.mm.bing.net/th?id=OIP.gJRLpy344X7SU9rAnX8EUwHaHa&pid=Api&P=0&h=220"]
  let description = [
    ["8,000 DPI","5 Programmable Buttons"],
    ["intuitative surface","Slim and Weighless device "],
    ["designed for iPad","iPad with keyboard"],
    ["wireless","Beautiful 32 inches LCD"]
  ]
  return (
    <div className='main-comp'>
      <h3>{title}</h3>  
      <p style={{fontStyle:'oblique' , fontWeight:'500'}}>{description[indx][0]}</p>
      <p style={{fontWeight:'500',fontStyle:'oblique'}}>{description[indx][1]}</p>
      <Price_comp oldPrice={oldPrice[indx]} newPrice={newPrice[indx]}/>
      <Images image={images[indx]}/>
    </div>
  )
}
export default Product
