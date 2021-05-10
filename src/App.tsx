import { useState } from "react"
import Controls from "./modules/Controls"
import Help from "./modules/Help"
import Scoreboard from "./modules/Scoreboard"
import Settings from "./modules/Settings"


const App = () => {
    const [settingsView, setSettingsView] = useState<boolean>(false)
    const [helpView, setHelpView] = useState<boolean>(false)
    const [heigth, setHeigth] = useState<number>(9)
    const [width, setWidth] = useState<number>(9)
    const [outbreaks, setOutbreaks] = useState<number>(10)
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
        </>
    )
}

export default App
