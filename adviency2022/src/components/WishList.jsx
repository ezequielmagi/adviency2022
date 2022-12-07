import { useState } from "react"

export function Wishlist(){

  const [ wishList , setWishList ] = useState( ['papas', 'fritas', 'cheddar', 'dasdsad'] )
  
  return(
    <div className="w-3/4 h-auto bg-slate-100 rounded-md p-2 mx-auto shadow-md shadow-red-700/40 md:w-2/4 md:my-2">
      <ul>
        {
          wishList.map( wishListItem => (
            <li key={wishListItem} className="p-1 text-lg border-b-2">{wishListItem}</li>
          ) )
        }
      </ul>
    </div>
  )
}