import { useState } from "react"

export function AdviencyApp(){

    const [ gift , setGift ] = useState([ 'Prestobarba' , 'Axe Musk' , '100 pe' ])

    return(
        <>
            <h1>Adviency 2022</h1>
            <ul>
                {
                    gift.map( gift => (
                        <li key={ gift }> { gift } </li>
                    ) )
                }
            </ul>

                <hr />

            <section>
                <article>
                    <header>Descripción Día 1:</header>
                        <p>
                            Para calentar motores vamos a mantener las cosas simples, mostremos una lista de regalos, 3 elementos, fijos, sin nada más.
                        </p>
                        </article>
                        <article>
                            <header>Description Day 1:</header>
                            <p>
                            To warm up we are going to keep things simple, let's show a list of gifts, 3 elements, fixed, nothing else.
                            </p>
                </article>
            </section>
            


        </>

    )
}

