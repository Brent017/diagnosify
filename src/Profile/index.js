import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import ProfileContainer from "../ProfileContainer";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      username: "",
      answer: ""
    };
  }

  render() {
    return (
      <Grid stackable columns={2} padded className="profile">
        <Grid.Row>
          <Grid.Column width={4}>
            {this.props.userInfo.loading ? (
              <h1>Loading...</h1>
            ) : (
              <h1>Hello {this.props.userInfo.username}</h1>
            )}
          </Grid.Column>
          <Grid.Column width={8}>
            {this.props.userInfo.loading ? null : <ProfileContainer />}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Profile;
