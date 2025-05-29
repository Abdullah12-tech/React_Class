import { useContext, useState } from "react";
import { authContext } from "../context/AuthContext";
// import {toast} from 'sooner'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const {signup, isSigning} = useContext(authContext)


  // handle input
  const handleInput = (e) => {
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name]:value}))
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formatedData = {
      name: formData.name,
      email: formData.email.toLowerCase(),
      password: formData.password
    }
    signup(formatedData)
  };

  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="joe@example.com"
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John doe"
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="John doe"
            onChange={handleInput}
          />
        </div>

        <button disabled={isSigning}>
            {isSigning ? "signing up..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
