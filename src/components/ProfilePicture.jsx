import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <img
        src={process.env.PUBLIC_URL + "/profile_photo.jpeg"}
        style={{ maxWidth: '100%', borderRadius: '50%'}}
        alt=""
      />
    );
  }
}

export default Profile;