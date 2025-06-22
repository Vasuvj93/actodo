
import TodoItem from "./TodoItem"

function Todolist(props){

    
    const activitylist = props.activitylist
    const setactivitylist = props.setactivitylist
   
    return(
          <div className="bg-[#BDB4EA] border rounded-md flex-grow p-1">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            
            {activitylist.length === 0?<p>you have not added any activity yet</p>:""}
            {
                activitylist.map(function(item,index){
                    return <TodoItem id={item.id} item = {item} index = {index} activitylist = {activitylist} setactivitylist = {setactivitylist}/>
                })
            }
        </div>
    )
}
export default Todolist