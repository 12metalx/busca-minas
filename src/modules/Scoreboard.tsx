import {useState} from 'react'
interface Props{
    outbreaks:number;
}

const Scoreboard = ({outbreaks}:Props) => {
    const [lose, setLose] = useState<boolean>(false)
    const [count, setCount] = useState<number>(0)
    return (
        <section>
           <label>{outbreaks}</label>
           {lose ?<span>😨</span> : <span>😃</span>}
           <label>{count}</label>
        </section>
    )
}

export default Scoreboard
