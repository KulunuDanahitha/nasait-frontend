import React from 'react'
import './changepassword.css'



const ChangePassword = () => {
  return (
    <div>
      <div>
        <div className="changepassword">
          <div className="form-container">
            <h2 className="edit-account"> Change Password </h2>
            <div className="input-group">
              <label htmlFor="currentpassword" className="label-left">
                Current Password
              </label>
              <input
                type="password"
                id="currentpassword"
                name="currentpassword"
                className="input-right"
                defaultValue="John1234"
              />
            </div>
            <div className="input-group">
              <label htmlFor="newpassword" className="label-left">
                New Password
              </label>
              <input
                type="password"
                id="newpassword"
                name="newpassword"
                className="input-right"
                defaultValue="Perera12"
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirmpassword" className="label-left">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                className="input-right"
                defaultValue="Matara12"
              />
            </div>

            <div className="button-group">
              <button className="cancel-button"> Cancel </button>
              <button className="save-changes-button"> Change  </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword
