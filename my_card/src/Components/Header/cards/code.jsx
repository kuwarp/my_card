import React from 'react'
import TL from "../../../Images/TL.png"
import "./code.css"

// const codes=[
//     {bankName:'APNA BANK',cardNumber:'123 456 789 21', holderName:'Ashu',logo:URL(),expiry:'December/22'}
// ]
const Code = () => {
    
  return (
    <>
     <div className="card-box">
       <h1>Bank Of Mine</h1>
       <div className="image-block">
           <img src={TL} alt="" />
       </div>

     </div>
    </>
  )
}

export default Code