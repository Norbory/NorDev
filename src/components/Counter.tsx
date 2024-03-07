import { useState } from "preact/hooks";

export function Counter (){
    const [counter, setCounter] = useState<number>(0);

    return(
        <>
            <span className="text-main text-xl mr-4">{counter}</span>
            <button className="border px-4 py-2 text-xl active:text-main" 
                onClick={()=> setCounter(counter => counter + 1)}
            >
                +
            </button>
            <button className="border px-4 py-2 text-xl active:text-main" 
                onClick={()=> setCounter(counter => counter - 1)}
            >
                -
            </button>
        </>
    )
}