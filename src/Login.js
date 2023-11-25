import React, { useState } from 'react'
const Login = () => {
    const [userName,setUserName] = useState("");
    const [password, setPassword] = useState("")
    function cancel(){
        setUserName("");
        setPassword("");
    }
    return (
        <div>
            <div id="id01" className="modal">
                <form className="modal-content animate" action="">
                    <h2 style={{ textAlign: "center" }}>Login</h2>
                    <div className="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}} placeholder="Enter Username" name="uname" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" name="psw" required />

                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" name="remember" /> Remember me
                        </label>
                    </div>

                    <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                        <button type="button" onClick={cancel} className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot <a href="/">password?</a></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
