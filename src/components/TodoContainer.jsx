import AddtodoForm from "./AddtodoForm"
import Todolist from "./Todolist"
import { useState } from "react"

function TodoContainer(){

     const [activitylist,setactivitylist] = useState([
        {
        id:1,
        activity:"Go for a walk"
       },
       {
        id:2,
        activity:"Have a Lunch"
       }

    ])

    return(
    <div className="flex gap-5 flex-wrap">
        <AddtodoForm activitylist = {activitylist} setactivitylist = {setactivitylist}/>
        <Todolist activitylist = {activitylist} setactivitylist = {setactivitylist}/>
    </div>
    ) 
}
export default TodoContainer