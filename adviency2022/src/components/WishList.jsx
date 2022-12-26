import { useState } from "react"
import { AddNewWish } from "./AddNewWhish"
import { WishItem } from "./WishItem"

export function Wishlist(){

  const [ wishList , setWishList ] = useState( [] )
  
  const AddNewItem = ( value ) =>{
    setWishList( [ ...wishList , value] )
  }

  const deleteItem = ( item ) => {
    console.log(item.target.parentNode.firstChild.textContent)
    const elementToSlice = item.target.parentNode.firstChild.textContent //asignamos el texto del regalo para filtrarlo de nuestra lista

    setWishList( 
      wishList.filter( wishItem => wishItem !== elementToSlice )
     )

  }

  const clearBag = () => {
    setWishList( [] )
  }
  
  return(

    <div className="flex flex-col">
        <AddNewWish AddNewItem={AddNewItem} wishList={wishList} clearBag={clearBag} />
        <div className="w-3/4 h-auto bg-slate-100 rounded-md mx-auto shadow-md shadow-red-700/40 md:w-2/4 md:my-2" >
         
          {
            wishList.map( wishListItem => (
              <WishItem key={wishListItem} wishListItem={wishListItem} deleteItem={deleteItem} />
            ) )
          }
         
        </div>

        {
          wishList.length !== 0 ? <button className="w-3/4 mx-auto rounded-md my-2 p-2 text-lg font-bold text-gray-50 bg-blue-500 md:w-2/4" onClick={clearBag}> Clear Bag </button> : null
        }

    </div>
  )
}