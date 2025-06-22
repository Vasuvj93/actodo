import { useState } from "react"


function AddtodoForm(props){

    const activitylist = props.activitylist
    const setactivitylist = props.setactivitylist
    const [newactivity,setactivity] =  useState("")

    function addactivitylist(event){
        setactivity(event.target.value)
        

    }
    function addactivity(){
        setactivitylist([...activitylist,{id:activitylist.length+1,activity:newactivity}])
        setactivity("")
    }

    return(
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input value={newactivity} onChange={addactivitylist} type="text" className="border border-black bg-transparent p-1" placeholder="Nextactivity?" />
            <button onClick={addactivity} className="bg-black text-white p-1 border border-black">Add</button>
            </div>
        </div>

    )
}
export default AddtodoForm