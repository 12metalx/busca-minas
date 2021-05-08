import {useState} from 'react'


const Scoreboard = () => {
    const [mines, setMines] = useState<number>(10)
    const [lose, setLose] = useState<boolean>(false)
    const [count, setCount] = useState<number>(0)
    return (
        <section>
           <label>{mines}</label>
           {lose ?<span>😨</span> : <span>😃</span>}
           <label>{count}</label>
        </section>
    )
}

export default Scoreboard
