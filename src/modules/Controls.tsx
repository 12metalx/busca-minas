
interface Props{
    setSettingsView: (flag:boolean) => void;
    settingsView:boolean;
    setHelpView: (flag:boolean) => void;
    helpView:boolean;
    
}
const Controls = ({setSettingsView,settingsView,setHelpView,helpView}:Props) => {
    const showSettings = () => {
        setSettingsView(!settingsView)
    }
    const showHelp = () => {
        setHelpView(!helpView)
    }
    return (
        <section>
            <button onClick={showHelp}>Help</button>
            <button>New Game</button>
            <button onClick={showSettings}>Settings</button>
        </section>
    )
}

export default Controls
