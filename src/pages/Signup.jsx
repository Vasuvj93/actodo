import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function SignUp(props) {
    const navigate  = useNavigate()
    const users = props.users
    const setusers = props.setusers
    const [getusername, setusername] = useState("")
    const [getpassword, setpassword] = useState("")
    function enteredusername(evt) {
        setusername(evt.target.value)
    }
    function enteredpassword(evt) {
        setpassword(evt.target.value)

    }
    function usersignup(){
        
        setusers([...users,{username:getusername,password:getpassword}])
        setpassword("")
        setusername("")
        navigate("/")
    }


    return (
        <div className="bg-black p-10">
            <div className="bg-white p-4">
                <div>
                    <h1 className="text-3xl font-bold">Hey Hi!</h1>
                    <p>I help you manage your activities SignUp Here!</p>
                </div>
                <div className="mt-3 ">
                    <input onChange={enteredusername} value={getusername} type="text" class="border border-black rounded p-1 mt-3" placeholder="username" /><br />
                    <input onChange={enteredpassword} value={getpassword} type="text" placeholder="password" class="border border-black rounded p-1 mt-3" /><br />
                    <input type="text" placeholder="confirm password" class="border border-black rounded p-1 mt-3" /><br />
                    <button onClick={usersignup} className="bg-green-500 rounded-md py-2 p-6 mt-3">SignUp</button>
                    <p>Already Have an account? <Link to={"/"} className='underline' >Login</Link></p>
                </div>
            </div>

        </div>
    )
}
export default SignUp