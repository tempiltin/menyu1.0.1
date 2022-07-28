import React from 'react'
import { FiX,FiMinus, FiPlus } from 'react-icons/fi'
import fro from '../../image/image-removebg-preview (4).png'
const ProdView = () => {
    return (
        <main className='ProdView'>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-auto">
                        <img className='imgview' src={fro} alt="png" />
                    </div>
                    <div className="col-auto">
                        <button className='fix'><FiX /></button>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-around">

                    <div className="col-auto">
                        <button className='btn_add add_remove'><FiPlus/></button>
                    </div>
                    <div className="col-auto">
                        <strong className='btn_add asd'>1</strong>
                    </div>
                    <div className="col-auto">
                        <button className='btn_add add_remove'><FiMinus/></button>
                    </div>
                    
                </div>

            </div>
        </main>
    )
}

export default ProdView;