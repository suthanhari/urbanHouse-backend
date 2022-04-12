import React from 'react'


function CartData({burger}) {
    return (
        
                    <ol class="list-group">
                        <li class="list-group-content ">
                            <div class="list-item">
                                <div class="bold">{burger.name}</div>
                               {burger.description}
                            </div>
                            <span class="rounded-pill">14</span>
                        </li>
                        <li class="list-group-content ">
                            <div class="list-item">
                                <div class="bold">Subheading</div>
                                Cras justo odio
                            </div>
                            <button class="rounded-pill">14</button>
                        </li>
                    </ol>

            
    )
}

export default CartData;