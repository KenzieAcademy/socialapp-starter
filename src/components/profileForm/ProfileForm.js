import React from 'react'

function ProfileForm(props){
    return 
    <form id="Profile-form" onSubmit={this.handleUpdateUser}>
<label htmlFor="displayName">displayName</label>
<input
  type="text"
  name="displayName"
  autoFocus
  required
  onChange={this.handleChange}
/>
<label htmlFor="password">Password</label>
<input
  type="password"
  name="password"
  required
  onChange={this.handleChange}
/>

<label htmlFor="about">About</label>
<input
  type="text"
  name="about"
  required
  onChange={this.handleChange}
/>
<button type="submit">
  Update User Info
</button>
</form>


}
export default ProfileForm;