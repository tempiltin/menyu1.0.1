import React from 'react'
import burger from "../../image/image-removebg-preview (4).png"
const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card_img">
          <img src={burger} alt="" />
        </div>
        <div className="card_body">
          <h4>{props.title}</h4>
          <h6>Chicken Patty and special sauce</h6>

          <div className="but">
            <button onClick={props.onview} className='btn-but' type='button'>Add +</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;