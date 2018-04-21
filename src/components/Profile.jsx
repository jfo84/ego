import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div display="flex" direction="row">
        <img
          src={process.env.PUBLIC_URL + "/profile_photo.jpeg"}
          style={{ maxWidth: '100%', display: 'block', borderRadius: '50%' }}
          alt=""
        />
      </div>
    );
  }
}

export default Profile;