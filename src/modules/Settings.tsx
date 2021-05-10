import React from "react"

interface Props{
    setHeigth: (heigth:number) => void;
    heigth:number;
    setWidth: (width:number) => void;
    width:number;
    setOutbreaks: (outbreaks:number) => void;
    outbreaks:number;
}
const Settings = ({setWidth,width,setHeigth,heigth,setOutbreaks,outbreaks}:Props) => {
    const changeWidth = (e:React.FormEvent<HTMLInputElement>) => {
        setWidth(parseInt(e.currentTarget.value))
        maxOutbreaks()
    }
    const changeHeigth = (e:React.FormEvent<HTMLInputElement>) => {
        setHeigth(parseInt(e.currentTarget.value))
        maxOutbreaks()
    }
    const changeOutbreaks = (e:React.FormEvent<HTMLInputElement>) =>{
        setOutbreaks(parseInt(e.currentTarget.value))
    }
    const maxOutbreaks = () => {
        const max = Math.ceil((width*heigth)/5) 
        if(max < outbreaks){
            setOutbreaks(max)
        }
    
    }
    const setEasy = () => {
        setWidth(9)
        setHeigth(9)
        setOutbreaks(10)
    }
    const setNormal = () => {
        setWidth(16)
        setHeigth(16)
        setOutbreaks(40)
    }
    const setHard = () => {
        setWidth(16)
        setHeigth(30)
        setOutbreaks(99)
    }

    return (
        <div>
            <h3>Settings</h3>
            <button onClick={setEasy}>Easy</button>
            <button onClick={setNormal}>Normal</button>
            <button onClick={setHard}>Hard</button>
            <button>Custom - {width}x{heigth} / {outbreaks} Outbreaks
                <form>
                <label>Width</label>
                <input type="range" name="width" id="" min='9'max='50' step='1' value={width} onChange={changeWidth} />
                
                <label>Heigth</label>
                <input type="range" name="heigth" id="" min='9' max='50' step='1'value={heigth} onChange={changeHeigth}/>
                <label>Outbreaks</label>
                <input type="range" name="outbreaks" id="" min ='1' max={Math.ceil((width*heigth)/5)} step='1' value={outbreaks} onChange={changeOutbreaks} />
                </form>
            </button>
        </div>
    )
}

export default Settings
