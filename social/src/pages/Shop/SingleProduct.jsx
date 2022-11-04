import React from 'react';
import { Modal } from 'react-bootstrap';

const SingleProduct = ({ single, handleSingleHide }) => {
   

  return (

        <Modal show={ single } onHide={ handleSingleHide } animation={ true } centered size='lg'> 
            <Modal.Body>
                <div className="single-product">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://www.bhphotovideo.com/images/images2500x2500/sony_ilce7sm3_b_alpha_a7s_iii_mirrorless_1577838.jpg" alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="single my-5">
                                <h2>Sony A7s iii</h2>
                                <h3>$1200 </h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste recusandae ipsa earum! Optio, placeat eum.</p>
                                <button className='btn btn-lg btn-dark'>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>


  )
};

export default SingleProduct;