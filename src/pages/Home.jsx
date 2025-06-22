import Header from "../components/Header";
import Card from "../components/card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom";

function Home(){
    const data = useLocation()
    return (
    <div className="bg-black p-16 ">
      <div className="bg-[#EFEFEF] p-10 border rounded-md" >
        <Header name = {data.state.username}></Header>
        <div className="flex justify-between gap-7 my-5 flex-wrap" >
          <Card bgColor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Card bgColor={"#FD6663"} title={"December"} subtitle={"20"} />
          <Card bgColor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
        </div>
        <div>
          <TodoContainer></TodoContainer>
        
        </div>
       
      </div>
    </div>

  );
}
export default Home