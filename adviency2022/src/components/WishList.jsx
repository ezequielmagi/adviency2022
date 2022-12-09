import { useState } from "react"
import { AddNewWish } from "./AddNewWhish"

export function Wishlist(){

  const [ wishList , setWishList ] = useState( [] )
  
  const AddNewItem = ( value ) =>{
    setWishList( [ ...wishList , value] )
  }
  
  return(

    <div>
        <AddNewWish AddNewItem={AddNewItem}/>
        <div className="w-3/4 h-auto bg-slate-100 rounded-md mx-auto shadow-md shadow-red-700/40 md:w-2/4 md:my-2" >
         <ul>
          {
            wishList.map( wishListItem => (
              <li key={wishListItem} className="p-1 text-lg ">{wishListItem}</li>
            ) )
          }
         </ul>
  
      </div>
    </div>
  )
}