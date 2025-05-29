import { useContext, useState } from "react";
import { authContext } from "../context/AuthContext";

const SendPasswordResetMail = ()=>{
    const {isSigning, sendPassEmail} = useContext(authContext)
    const [formData, setFormData] = useState({
        email: ""
    })
    const handleInput = (e)=>{
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }
    const sendPasswordEmail = (e)=>{
        e.preventDefault()
        sendPassEmail(formData)
    }

    return (
        <div>
            <form onSubmit={sendPasswordEmail}>
                <div>
                    <label htmlFor="email">Enter your Email</label>
                    <input onChange={handleInput} type="email" name="email" />
                </div>
                <button className="font-semibold" disabled={isSigning} style={{color: "white",background: "blue", marginTop: "1rem"}} type="submit">{isSigning ? "sending reset email...." : "send reset email"}</button>
            </form>
        </div>
    )
} 
export default SendPasswordResetMail;