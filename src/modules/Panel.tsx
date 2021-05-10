interface Cell{
    state:number;
    outbreaks:number;
}
interface Props{
    setMatrix: (mat:Cell[][]) => void;
    matrix:Cell[][];
}
const Panel = ({setMatrix,matrix}:Props) => {
    return (
        <main>
            {matrix.map((cells:Cell[])=>{return(
                cells.map((cell:Cell)=>{
                    return(
                        <button>asasas</button>
                    )
                })
            )})}
        </main>
    )
}

export default Panel
