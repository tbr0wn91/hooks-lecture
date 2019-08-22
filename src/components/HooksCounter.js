import React, {useState} from 'react';

export default function HooksCounter(props){

    const [counter, setCounter] = useState(0)
    console.log(counter)
    return(
        <div className='counter'>
        <h1>{ counter }</h1>
        <div>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(counter + 1) }>+</button>
        </div>
    </div>
    )
}