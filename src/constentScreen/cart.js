import React from 'react';
import burger from '../burger';
import CartData from '../components/cartdata';


function Cart() {
    return (
        <div className='container'>
            <div className='row'>
                {
                    burger.map(props => {
                        return (
                            <div className='col'>
                                <CartData burger={props} />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Cart