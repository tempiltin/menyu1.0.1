import React from 'react'
import { FiX,FiMinus, FiPlus } from 'react-icons/fi'
import fro from '../../image/image-removebg-preview (4).png'
const ProdView = (props) => {
    console.log(props.about.product_name);
    return (
        <main className={props.state ? `ProdView` : "ProdViewFalse"}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-auto">
                        <img className='imgview' src={fro} alt="png" />
                    </div>
                    <div className="col-auto">
                        <button className='fix btn' onClick={props.removeButton}><FiX /></button> {/* props.removeButton about page fixed */}
                    </div>
                </div>
                <hr />
                <div className="row justify-content-around">
                    <div className="col-auto">
                        <button onClick={props.Amount} className='btn btn_add add_remove'><FiPlus/></button>
                    </div>
                    <div className="col-auto">
                        <strong className='btn_add asd'>{props.amount}</strong>
                    </div>
                    <div className="col-auto">
                       {
                        props.amount === 0 ?  "" : <button onClick={props.removeAmount} className='btn btn_add add_remove'><FiMinus/></button>
                       }
                    </div>
                    
                </div>

            </div>
        </main>
    )
}

export default ProdView;