import { useState } from "react"
import Controls from "./modules/Controls"
import Help from "./modules/Help"
import Scoreboard from "./modules/Scoreboard"
import Settings from "./modules/Settings"


const App = () => {
    const [settingsView, setSettingsView] = useState<boolean>(false)
    const [helpView, setHelpView] = useState<boolean>(false)
    return (
        <>
        <Scoreboard/>
        <Controls 
        setSettingsView = {setSettingsView} 
        settingsView ={settingsView}
        helpView = {helpView}
        setHelpView = {setHelpView}/>
        {settingsView ? <Settings/> : <></>}
        {helpView ? <Help/> : <></>}
        </>
    )
}

export default App
