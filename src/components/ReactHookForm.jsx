import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react"

const signUpFormSchema = yup.object({
    email: yup.string().email("Enter a valid emmail").required("Email is Required"),
    name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters").max(20, "Name cannot be more than 20 characters"),
    password: yup.string().required("Password is required").min(6, "Password must be atleast 6 characters")
})

const SignUpForm = ()=>{
    const {register, handleSubmit,formState: {errors}} = useForm({
        resolver: yupResolver(signUpFormSchema)
    })
    const [isSigning, setIsSigning] = useState(false)
    const submitForm = async (data)=>{
        console.log(data);
    }
    return (
        <div>
          <h1>Signup</h1>
    
          <form onSubmit={handleSubmit(submitForm)}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John doe"
                {...register("name")}
              />
              <p className="text-red-700">{errors.name && errors.name.message}</p>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="joe@example.com"
                {...register("email")}
              />
              <p className="text-red-700">{errors.email && errors.email.message}</p>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="John doe"
                {...register("password")}
              />
              <p className="text-red-700">{errors.password && errors.password.message}</p>
            </div>
    
            <button disabled={isSigning}>
                {isSigning ? "signing up..." : "Submit"}
            </button>
          </form>
        </div>
      );
}

export default SignUpForm;