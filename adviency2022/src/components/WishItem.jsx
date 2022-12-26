export function WishItem( {wishListItem , deleteItem} ){

    const handleDelete = (item) =>{
        console.log("deleteado");
        deleteItem( item )
    }

    return(
        <div key={wishListItem}  className="p-1 text-lg flex align-middle justify-between">
             <p className="w-5/6">{wishListItem}</p> 
            <button onClick={handleDelete} className="bg-blue-500 text-lg text-slate-100 font-bold px-2 rounded-md  mx-1">X</button>
        </div>
    )
}