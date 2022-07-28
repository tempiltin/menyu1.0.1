import React from 'react'
import { FiX, FiMinus, FiPlus } from 'react-icons/fi'
import fro from '../../image/image-removebg-preview (4).png'
const ProdView = (props) => {
    console.log(props.about.amount);
    return (
        <main className={props.state ? `ProdView main_rel` : "ProdViewFalse main_rel"}>
            <div className="name_div">
                <strong>{props.about.product_name}</strong>
                <h5>LTR</h5>
                <h4>45 000 so'm</h4>
            </div>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-auto">
                        <img className='imgview' src={fro} alt="png" />
                    </div>
                    <div className="col-auto">
                        <button className='fix btn' onClick={props.removeButton}><FiX /></button> {/* props.removeButton about page fixed */}
                    </div>
                </div>


                <div className="flex-dddd">
                    {props.about.amount ?
                        props.about.amount.map((item, index) => (
                            <div className="seeCard" key={index}>
                                <div className="cardPrice">
                                    <li>{item.price}</li>
                                    <li>{item.amount}</li>
                                </div>
                                <div className="btn_body">
                                    <button onClick={props.Amount} className='btn add_remove'><FiPlus /></button>
                                    <span className=''>{props.amount}</span>
                                    {
                                        props.amount === 0
                                            ? ""
                                            : <button onClick={props.removeAmount} className='btn btn_add add_remove'><FiMinus /></button>
                                    }
                                </div>

                            </div>
                        ))
                        : ""
                    }

                </div>

            </div>
        </main>
    )
}

export default ProdView;