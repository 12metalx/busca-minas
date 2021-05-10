import { useEffect, useState } from "react"
import Controls from "./modules/Controls"
import Help from "./modules/Help"
import Panel from "./modules/Panel"
import Scoreboard from "./modules/Scoreboard"
import Settings from "./modules/Settings"

interface Cell{
    state:number;
    outbreaks:number;
}
const App = () => {
    const [settingsView, setSettingsView] = useState<boolean>(false)
    const [helpView, setHelpView] = useState<boolean>(false)
    const [heigth, setHeigth] = useState<number>(9)
    const [width, setWidth] = useState<number>(9)
    const [outbreaks, setOutbreaks] = useState<number>(10)
    const [matrix, setMatrix] = useState<Cell[][]>([])
    useEffect( () => {
        return () => {
            
            setMatrix([])

            
        }
    }, [heigth,width,outbreaks])
    useEffect(() => {
 
        return () => {

            if(matrix.length === 0){
                var i:number
                var j:number
                const row:Cell[] = [];
                const cell:Cell = {state:0,outbreaks:0}
                const mat:Cell[][] = [[]]
                for(j=0;j<width;j++){
                    row.push(cell)
                }
                for(i=0;i<heigth;i++){
                   mat.push(row)
                }
                setMatrix(mat)
            }  
        }
    }, [matrix])
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
