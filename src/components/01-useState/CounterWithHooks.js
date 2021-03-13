
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithHooks = ()=>{

    const { state,increment,decrement,reset } =  useCounter(100)
    return (
        <>
                <h1>Counter:  { state }</h1>
                <hr />

                <button onClick={ increment } className="btn">+1</button>
                <button  onClick = {decrement } className="btn">-1</button>
                <button  onClick = {reset } className="btn">Reset</button>

        </>
    )

}