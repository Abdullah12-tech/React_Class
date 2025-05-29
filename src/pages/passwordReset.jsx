import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const PasswordReset = ()=>{
    const {token} = useParams()
    const {verifyAndChangePass, isSigning} = useContext(authContext)
    const [formData, setFormData] = useState({
        password: ""
    })

    const handleInput = (e)=>{
        const {name,value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }
    const resetPass = (e)=>{
        e.preventDefault()
        verifyAndChangePass(formData,token)
    }
    return (
        <div>
            <form onSubmit={resetPass}>
                <input onChange={handleInput} type="password" placeholder="Enter your password"/>
                <button type="submit" disabled={isSigning} style={{color: "black",background: "blue",marginTop: "1rem"}}>{isSigning ? "changing password" : "change password"}</button>
            </form>
        </div>
    )
}
export default PasswordReset;