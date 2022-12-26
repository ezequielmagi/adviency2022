import { Wishlist } from "./components/WishList"

export function AdviencyApp(){
    return(
        <div className="w-screen h-screen bg-bg-arg bg-cover bg-center flex flex-col justify-center">
           <div className="w-5/6 py-2 mx-auto backdrop-opacity-10 backdrop-invert bg-white/30">
                <Wishlist />
           </div>
        </div>
    )
}