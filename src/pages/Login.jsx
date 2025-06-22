import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate()
    const [getusername, setusername] = useState("")
    const [getpassword, setpassword] = useState("")
    const [registereduser, setregestereduser] = useState(true)
    const users = props.users


   

    function enteredusername(evt) {
        setusername(evt.target.value)
    }
    function enteredpassword(evt) {
        setpassword(evt.target.value)

    }
    function userlogin() {
        var userfound = false

        users.forEach(function (item) {
            console.log(users)
            if (item.username === getusername && item.password === getpassword) {
                setusername("")
                setpassword("")
                userfound = true
                console.log("login successful")
                navigate("/Home" ,{state:{username:getusername}})
            }   
        })
         if(userfound==false){
                console.log("LoginFailed")
                setregestereduser(false)
            }
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-white p-4">
                <div>
                    <h1 className="text-3xl font-bold">Hey Hi!</h1>
                    {
                        registereduser ? <p>I help you manage your activities after you login</p> : <p className='text-red-500'>Please SignUp</p>
                    }
                </div>
                <div >
                    <input onChange={enteredusername} value={getusername} type="text" class="border border-black rounded p-1 mt-3" placeholder="username" /><br />
                    <input onChange={enteredpassword} value={getpassword} type="text" placeholder="password" class="border border-black rounded p-1 mt-3" /><br />
                    <button onClick={userlogin} className="bg-violet-500 rounded-md py-2 p-6 mt-3">Login</button>
                    <p>Don't Have a account? <Link to={"/SignUp"} className='underline'>SignUp</Link></p>
                </div>
            </div>

        </div>
    )
}
export default Login