import React from 'react'
import { FiX, FiMinus, FiPlus } from 'react-icons/fi'
import fro from '../../image/image-removebg-preview (4).png'
const ProdView = (props) => {

    return (
        <main className={props.state ? `ProdView main_rel` : "ProdViewFalse main_rel"}>
            <div className="name_div">
                <strong>{props.about.product_name}</strong>
                <h5>dona</h5>
                <h4> 0 so'm</h4>
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
                                    <button onClick={()=>props.Amount(index)} className='btn add_remove'><FiPlus /></button>
                                    <span className=''>{ props.newproduct.amount}</span>
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
                <button>Qo'shish</button>

            </div>
        </main>
    )
}

export default ProdView;