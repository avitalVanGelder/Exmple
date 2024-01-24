import React,{useState,useEffect} from'react'
export default function CounterTimer(){
    const [counter,setCounter]=useState(4);
    const [timerId,setTimer]=useState<any>();
 

    //כל פעם שמתבצע רינדורר לקומפוננטה
    //גם כאשר הקומפוננטה עולה /מתעדכנת עי הפרופס או מתעדכנץ עי  סטייט
    // useEffect(()=>{
    //     console.log('the component render')
      
    // })

    //פונקציה כאשר הקומפוננטה שלי עולה
    
    useEffect(()=>{
        //איתחול טיימרים
        //קיראות שרת
         let timerId=setInterval(()=>{
            setCounter(prev=>prev-1)
         },1000)

         setTimer(timerId);

         //כאשר הקומפוננטה יורדת מהDOM
         return () => {
            window.clearInterval(timerId);
          };
 
     },[])

     //פונקציה שתופעל כאשר משתנה אחד מהמשתנים לדוגמא counter
     useEffect(()=>{
        if(counter==0){
            debugger
           clearInterval(timerId);
        }
     },[counter])

    return <div className='row'>
       {counter>0?
        <div style={{backgroundColor:'orange'}} className='col-sm-6 m-auto mt-5'>
        {counter}
        </div>:
        <h3>stop</h3>} 
     
        </div>
}