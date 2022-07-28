import React from 'react'
import burger from "../../image/image-removebg-preview (4).png"
const Card = (props) => {
  return (
    <>
      <div className="card" onClick={props.onIndex}>
        <div className="card_img">
          <img src={ props.item.url_photo  ? burger : ''} alt="png" />
        </div>
        <div className="card_body">
          <h4>{props.item.product_name }</h4>
          <h6>{props.item.description }</h6>
          {/* <div className="but">
            <button onClick={props.onIndex} className='btn-but' type='button'>Add +</button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Card;