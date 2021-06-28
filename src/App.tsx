import { useEffect, useState } from "react"
import Controls from "./modules/Controls"
import Help from "./modules/Help"
import Panel from "./modules/Panel"
import Scoreboard from "./modules/Scoreboard"
import Settings from "./modules/Settings"

interface Cell{
    state:number;
    outbreak:boolean;
}
const App = () => {
    const [settingsView, setSettingsView] = useState<boolean>(false)
    const [helpView, setHelpView] = useState<boolean>(false)
    const [heigth, setHeigth] = useState<number>(9)
    const [width, setWidth] = useState<number>(9)
    const [outbreaks, setOutbreaks] = useState<number>(10)
    const [matrix, setMatrix] = useState<Cell[][]>([])
    useEffect( () => {           
            const row:Cell[] = [];
            let i:number
            let j:number
            const cell:Cell = {state:0,outbreak:false}
            const mat:Cell[][] = []
            for(j=0;j<width;j++){
                row.push(cell)
            }
            for(i=0;i<heigth;i++){
                mat.push(row)
            }
            const size:number = width * heigth
            for(i=0;i<outbreaks;i++){
                const cellOutbreak:number = Math.floor(Math.random() * size)
                const row:number = Math.floor(cellOutbreak/(width)) 
                if(cellOutbreak%(width) === 0 ){
                     const column:number = width-1
                     console.log("Celda: "+cellOutbreak);
                
                     console.log("row: "+row+" column: "+column);
                     console.log(mat[row][column]);
                }else{
                     const column:number = cellOutbreak%(width)
                     console.log("Celda: "+cellOutbreak);
                
                     console.log("row: "+row+" column: "+column);
                     console.log(mat[row][column]);
                }
                
                
                //mat[row][column].outbreak ? i = i-1 :   mat[row][column].outbreak = true
                
                
            }

            setMatrix(mat)
            
      
        
            

    }, [heigth,width,outbreaks])
    /*useEffect(() => {
        const size:number = width * heigth
        let i:number
        for(i=0;i<outbreaks;i++){
            const cellOutbreak:number = Math.floor(Math.random() * size)
            const row:number = Math.floor(cellOutbreak/(width+1))
            const column:number = Math.floor(cellOutbreak%(width+1))
            console.log("Celda: "+cellOutbreak);
            
            console.log("row: "+row+" column: "+column);
            matrix[0][0].outbreak ? i=i-1: matrix[row][column].outbreak = true
           
        }
    }, [outbreaks])*/
   
    return (
        <>
        <Scoreboard outbreaks={outbreaks}/>
        <Controls 
        setSettingsView = {setSettingsView} 
        settingsView ={settingsView}
        helpView = {helpView}
        setHelpView = {setHelpView}
        />
        {settingsView ? <Settings setHeigth = {setHeigth}
        heigth = {heigth}
        setWidth = {setWidth}
        width = {width}
        setOutbreaks = {setOutbreaks}
        outbreaks = {outbreaks}/> : <></>}
        {helpView ? <Help/> : <></>}
        <Panel setMatrix ={setMatrix} matrix={matrix}/>
        </>
        
    )
}

export default App
