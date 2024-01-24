
import React,{useState,useEffect} from'react'

type CounterProps={
max:number
}
export default function Counter(props:CounterProps) {
    const [counter,setCounter]=useState<any>(0);

    useEffect(()=>{
        console.log('the component render')    
    })

    useEffect(()=>{
        console.log('the component render on load')
    },[])

    //let counter=0
    const addItem=()=>{
        //counter++;
        setCounter(counter+1);
    }

    return <>
        <div className='row'>
            <div className='col-sm-6 m-auto'>
            <label>נבחרו : <strong>{counter}</strong> פריטים</label>
            <br></br>
            <button disabled={counter>props.max-1} className='btn btn-primary' onClick={addItem}>add item</button>
            </div>
        </div>
    </>
      
}