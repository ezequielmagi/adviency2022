import { useState } from "react"
import { Wishlist } from "./WishList"

export function AddNewWish( { AddNewItem } ){
  
  const [ inputValue , setInputValue ] = useState('')
  
  const handleChange = ( { target } ) => {
    console.log( target.value )
    setInputValue(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    AddNewItem(inputValue)
    setInputValue('')
  }

  return(
    <div>
    <form onSubmit={handleSubmit}
    className="w-full flex flex-col md:flex"
    >
      <input 
        autoFocus
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-red-500 block w-3/4 mx-auto rounded-md sm:text-sm focus:ring-1 md:w-2/4 md:text-2xl"
        type="text" 
        placeholder="Add a wish!"
        value={inputValue}
        onChange={handleChange}
      />
      <button className="w-3/4 mx-auto rounded-md my-2 p-2 text-lg font-bold text-gray-50 bg-green-600 md:w-2/4">
        Add
      </button>
    </form>
    </div>
  )
}