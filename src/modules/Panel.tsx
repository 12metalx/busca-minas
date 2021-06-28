interface Cell{
    state:number;
    outbreak:boolean;
}
interface Props{
    setMatrix: (mat:Cell[][]) => void;
    matrix:Cell[][];
}
const Panel = ({setMatrix,matrix}:Props) => {
    return (
        <main>
            {matrix.map((cells:Cell[])=>{return(
                
                <div className="row">
                {
                cells.map((cell:Cell)=>{
                    return(
                        <button>asasas</button>
                    )
                    
                })}

                </div>
            )})}
        </main>
    )
}

export default Panel
