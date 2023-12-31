import { useState } from "preact/hooks";

export function Counter (){
    const [counter, setCounter] = useState<number>(0);

    return(
        <>
            <span class="text-main text-xl mr-4">{counter}</span>
            <button class="border px-4 py-2 text-xl active:text-main" 
                onClick={()=> setCounter(counter => counter + 1)}
            >
                +
            </button>
            <button class="border px-4 py-2 text-xl active:text-main" 
                onClick={()=> setCounter(counter => counter - 1)}
            >
                -
            </button>
        </>
    )
}