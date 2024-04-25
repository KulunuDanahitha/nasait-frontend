import React from 'react'
import './addSupplier.css'
//import './createAccount.css'

const CreateAccount = () => {
  return (
    <div>
      <div className='createAccount'>
        

        <div className="form-container">
        <h2 className='create-account'>Create Account</h2>
        <div className="input-group">
          <label htmlFor="firstName" className="label-left">First Name:</label>
          <input type="text" id="firstName" name="firstName" className="input-right" />
        </div>
        <div className="input-group">
          <label htmlFor="lastName" className="label-left">Last Name:</label>
          <input type="text" id="lastName" name="lastName" className="input-right" />
        </div>
        <div className="input-group">
          <label htmlFor="telephone" className="label-left">Telephone Number:</label>
          <input type="tel" id="telephone" name="telephone" className="input-right" />
        </div>
        <div className="input-group">
          <label htmlFor="email" className="label-left">Email:</label>
          <input type="email" id="email" name="email" className="input-right" />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="label-left">Password:</label>
          <input type="password" id="password" name="password" className="input-right" />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword" className="label-left">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" className="input-right" />
        </div>


        <div className="input-group">
          <label htmlFor="userType" className="label-left"> User Type </label>
          {/* user type using radio button */}
          <div className='userType'> 
            <div className="radio-container"> <input type="radio" id="admin" name="userType" value="admin" /> Admin <br/> </div>
            <div className="radio-container"> <input type="radio" id="cashier" name="userType" value="cashier" /> Cashier <br/> </div>
          </div>
        </div>

        <div className="button-group">
          <button className="cancel-button">Cancel</button>
          <button className="create-account-button">Create Account</button>
        </div>
          
        
      </div>
      </div>


        
      </div>

      
  )
}

export default CreateAccount
