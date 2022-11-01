import React from 'react'
import { useState } from 'react'

function Login() {

    const [user, setUser] = useState({
        name: "", email :"" , Passward : ""
    })
    let name;
    let value;
    const handleInput = (e) => {
        console.log(e)
        
        name  = e.target.name;
        value = e.target.value;
        setUser({...user , [name]:value})

    }
    

    return (
        <>
            <div className="container my-5">
                <form>
                    <div className="mb-3">
                        <input type="text" name='name' className="form-control" placeholder='Enter Your Name' value={user.name} onChange={ handleInput} />
                    </div>

                    <div className="mb-3">
                        <input type="email" name='email' className="form-control" placeholder='Enter Your Email' value={user.email} onChange={ handleInput}/>
                    </div>

                    <div className="mb-3">
                        <input type="password" name='Passward' className="form-control" placeholder='Enter Your Passward' value={user.Passward} onChange={ handleInput} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.Passward}</p>
            
        </>
    )
}

export default Login