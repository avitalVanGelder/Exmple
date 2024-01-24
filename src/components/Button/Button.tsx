import './Button.scss'

type ButtonProp={
    children:React.ReactNode
    //קבלת פונקציה לקומפוננטה מהאבא השלא מחזירה ערכים
    myFun:()=>void
    myFunWithReturn?:()=>{}
}
export default function Button(props:ButtonProp){

    const click=()=>{
        props.myFun();
    }

    return <button onClick={click}>{props.children}</button>
}