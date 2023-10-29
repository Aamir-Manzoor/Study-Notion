import React, {useState} from 'react'
import {useSelector} from 'react-redux'

const ForgotPassword = () => {
  const {loading} = useSelector( (state) => state.auth);
  const [email, setEmail] = useState("")

  const [emailSent, setEmailSet] = useState(false);

  return ( 
    <div>
      {
        loading ? (
          <div className='spinner'>Loading....</div>
        ) : (
          <div>
          <h1>
          {
            !emailSent ? "Reset your Password" : "Check Your Email"
          }
          </h1>
          <p>
          {
            !emailSent ? " Have no fear. We'll email you instructions to reset your password.If you dont have access to your email we can try account recovery"
             : ` We have sent the reset email to ${email}`
          }
          </p>
          

          <form action="">
          {
            !emailSent&& (
              <label>
              <p>Email Address*</p>
              <input 
              required
              type="email"
              name="email"
              value={email}
              onChange={(e)=> setEmailSet(e.target.value)}
              placeholder= 'Enter Your Email Address'
            />
              </label>
            )
          }
          
          
          </form>
          </div>
        )
      }
    </div>
  )
}

export default ForgotPassword
