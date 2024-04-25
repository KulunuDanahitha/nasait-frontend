import React from 'react'
import './editProfile.css'

const EditProfile = () => {
  return (
    <div>
      <div className="edit-account-container">
        <div className="form-container">
          <h2 className="edit-account">Edit Profile</h2>
          <div className="input-group">
            <label htmlFor="firstName" className="label-left">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="input-right"
              defaultValue="John"
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName" className="label-left">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="input-right"
              defaultValue="Perera"
            />
          </div>
          <div className="input-group">
            <label htmlFor="address" className="label-left">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="input-right"
              defaultValue="Matara"
            />
          </div>
          <div className="input-group">
            <label htmlFor="telephone" className="label-left">
              Telephone Number:
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              className="input-right"
              defaultValue="0714533876"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="label-left">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-right"
              defaultValue="John@gmail.com"
            />
          </div>

          <div className="button-group">
            <button className="cancel-button">Cancel</button>
            <button className="save-changes-button"> Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile
