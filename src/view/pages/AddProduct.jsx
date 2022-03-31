import React from 'react'
import {MdAddShoppingCart} from "react-icons/md"
export const AddProduct = () => {
    return (
        <form>
            <div className="form-control pl-24 ">
            
                    <input type="text" placeholder="Poduct Name" className="m-1 input input-bordered" />
          
                <input type="text" placeholder="Price" className="m-1 input input-bordered" />
               
                <textarea class="textarea textarea-secondary" placeholder="Description"></textarea>
              <div className="bts p-2">
            <button className="btn btn-primary btn-sm "><MdAddShoppingCart/>Button</button>
              </div>
            </div>
        </form>
    )
}
