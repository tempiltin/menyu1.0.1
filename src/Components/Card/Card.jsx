import React from 'react'
import burger from "../../image/image-removebg-preview (4).png"
const Card = (props) => {
  return (
    <>
      <div className="card"  onClick={props.onSee}>
        <div className="card_img">
          <img src={ burger} alt="png" />
        </div>
        <div className="card_body">
          <h4>props.item.product_name </h4>
          <h6>rops.item.description </h6>

        </div>
      </div>
    </>
  )
}

export default Card;