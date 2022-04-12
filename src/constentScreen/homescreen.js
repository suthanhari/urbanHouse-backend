import React from 'react';
import burger from '../burger';
import Burgerdata from '../components/Burgerdata';


function Homescreen() {
    return (
        <div className='container'>

            <div className='row'>

                {

                    burger.map(props => {
                        return (
                            <div className='col'>
                                <Burgerdata burger={props} />
                                
                            </div>


                        )
                    })



                }
            </div>
        </div>
    )
}

export default Homescreen