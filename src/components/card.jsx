function Card(props){
    return(
        <div style={{backgroundColor:props.bgColor}} className="p-10 py-5 border rounded-md flex-grow text-center"> 
          <h1 className="font-medium text-2xl">{props.title}</h1>
          <p>{props.subtitle}</p>
        </div>
    )
}
 export default Card