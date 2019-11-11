import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      notValid: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);

    const login = this.props.logIn(this.state);

    for (let pair of data.entries()) {
      console.log(pair[0], "<-- key value pair in login");
    }

    login
      .then(data => {
        if (data.status.message === "Success") {
          this.props.history.push("/profile");
        } else {
          this.setState({
            notValid: true
          });
          console.log(data, this.props);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Grid className="login" textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450, height: 1000 }}>
          <Header
            className="title"
            style={{ fontSize: "80px", color: "#c0c0c0" }}
            as="h2"
            textAlign="center"
          >
            Diagnosify
          </Header>
          <Form onSubmit={this.handleSubmit}>
            <Segment stacked>
              Username:
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="username"
                type="text"
                name="username"
                onChange={this.handleChange}
              />
              Password:
              <Form.Input
                flud
                icon="lock"
                iconPosition="left"
                placeholder="password"
                type="text"
                name="password"
                onChange={this.handleChange}
              />
              <Button fluid size="large" type="submit">
                Login
              </Button>
              {this.state.notvalid ? (
                <div style={{ fonSize: "20px", color: "red" }}>
                  Invalid username or password, please try again
                </div>
              ) : null}
              <Message>
                Not registered? <Link to="/register">Register Now</Link>
              </Message>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
