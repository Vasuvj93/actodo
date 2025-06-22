 
function TodoItem(props){

    const activitylist = props.activitylist
    const setactivitylist = props.setactivitylist

   

   function activitydelete(deleteid){

       var temactivitylist = activitylist.filter(function(item){
          if(item.id == deleteid){
               return false
          }
          else{
               return true
          }
       })
       setactivitylist(temactivitylist)
   }

   return(
    <div className="flex justify-between">
         <p>{props.index+1}.{props.item.activity}</p>
         <button onClick={()=>activitydelete(props.id)} className="text-red-400" >delete</button>
    </div>
   )   
}
export default TodoItem  