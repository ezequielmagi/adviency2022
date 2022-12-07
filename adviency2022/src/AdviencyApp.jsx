import { Wishlist } from "./components/WishList"

export function AdviencyApp(){
    return(
        <div className="w-screen h-screen bg-bg-mobile bg-cover bg-center flex flex-col justify-center">
            <h1 className="text-4xl text-slate-100 font-christmas font-bold mx-auto my-2 md:text-5xl">My Wishlist</h1>
            <Wishlist />
        </div>
    )
}