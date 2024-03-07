import { useState } from "react";

export const Grid = () => {

    const [option, setOption] = useState<number>(1);

    const showCard = (id: number) => {
        setOption(id);
    }

    return (
        <section className="grid md:grid-cols-6 grid-cols-1 gap-0 min-h-screen">
            <div 
                id="note-1" 
                className="grid grid-cols-subgrid gap-4 border-border border-2 md:h-full active:bg-contrast" 
                onClick={() => showCard(1)}
            >
                <div className="col-start-2">
                    <h2 className="text-end text-5xl px-1 py-5" style={{writingMode: "vertical-lr", textOrientation:"mixed"}}>
                        Academic Pursuits
                    </h2>
                </div>
            </div>
            <div 
                className={`grid grid-cols-subgrid gap-4 md:col-span-3 border-border border-2 md:h-full ${option === 1 ? 'block' : 'hidden'}`}
            >
                <div className="col-start-2">

                </div>
            </div>
            <div 
                id="note-2" 
                className="grid grid-cols-subgrid gap-4 border-border border-2 md:h-full active:bg-contrast" 
                onClick={() => showCard(2)}
            >
                <div className="col-start-2">
                    <h2 className="text-end text-5xl px-1 py-5" style={{writingMode: "vertical-lr", textOrientation:"mixed"}}>
                        Professional Endeavors
                    </h2>
                </div>
            </div>
            <div 
            className={`grid grid-cols-subgrid gap-4 md:col-span-3 border-border border-2 md:h-full ${option === 2 ? 'block' : 'hidden'}`}
            >
                <div className="col-start-2">

                </div>
            </div>
            <div 
                id="note-3" 
                className="grid grid-cols-subgrid gap-4 border-border border-2 md:h-full active:bg-contrast" 
                onClick={() => showCard(3)}
            >
                <div className="col-start-2">
                    <h2 className="text-end text-5xl px-1 py-5" style={{writingMode: "vertical-lr", textOrientation:"mixed"}}>
                        Hobbies
                    </h2>
                </div>
            </div>
            <div 
            className={`grid grid-cols-subgrid gap-4 md:col-span-3 border-border border-2 md:h-full ${option === 3 ? 'block' : 'hidden'}`}
            >
                <div className="col-start-2">

                </div>
            </div>
            
        </section>
    );

}