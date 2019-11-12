import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      username: ""
    };
  }

  render() {
    return (
      <Grid stackable columns={2} padded className="profile">
        <Grid.Row>
          <Grid.Column width={8}>
            {this.props.userInfo.loading ? (
              "Loading..."
            ) : (
              <h1>User information</h1>
            )}
          </Grid.Column>
          <Grid.Column width={8}>
            {this.props.userInfo.loading ? null : <h1>User data</h1>}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Profile;
