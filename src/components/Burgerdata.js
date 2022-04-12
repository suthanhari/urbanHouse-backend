import React, { useState } from 'react'

function Burgerdata({ burger }) {
  const [quantity, setQuantity] = useState(1)
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);
 

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (

    <div className='card'>

      <img src={burger.image} alt='burger' onClick={handleShow} />

      <h3 className='card-tittle open' onClick={handleShow}>{burger.name}</h3>
      <div className='card-body'>
        <div className='varient'>
          <h4>Varients:</h4>
          <select value={varient} onChange={(e) => { setVarient(e.target.value) }}>
            {
              burger.varients.map(varient => {
                return (
                  <option value={varient}>{varient}</option>
                )
              })
            }
          </select>

        </div>
        <div className='quantity'>
          <h4>Quantity:</h4>
          <select value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>

            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>

          </select>

        </div>
      </div>
      <div className='card-footer'>

        <div className='price'>

          <h3>Price:
            {
              burger.price[0][varient] * quantity
            }</h3>

        </div>

        <div className='btn-foot'>
          <button >+Add</button>
        </div>
      </div>

      <dialog open={show} className="modal" >
        <div className='modal-content'>
          <p onClick={handleClose}>X</p>
          <h3>{burger.name}</h3>
          <img src={burger.image} alt='modalImg' />
          <h6>{burger.description}</h6>
          <button class="btn" onClick={handleClose}>Close</button>

        </div>
      </dialog>
    </div>





  )
}

export default Burgerdata;