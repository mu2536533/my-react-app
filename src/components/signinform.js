import { useState } from "react";

export default function SignInForm() {
    const [email,setEmail] =useState("");
    const[password, setPassword]=useState("");
const[myform, setMyform] = useState({});

    const handleSummit = (e)=> {
email.preventDefault();
console.log("Email:",email);
console.log("Password:",password);
    };
    return (
        <div className="signinform">
            <h2>SignInForm</h2>
            <form onSubmit={handleSummit}>
                <input type="email"
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}/>
                <br/>
                <input type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                <br />
                <button type="summit">sign in</button>
                <h1>myform</h1>
                <p>Email:{myform.email} </p>
                <p>password:{myform.password} </p>
            </form>
        </div>
    )
}