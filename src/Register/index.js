import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Register extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async(e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("username", this.state.username);
        data.append("email", this.state.email);
        data.append("password", this.state.password);

        console.log(data.entries(), "<--this is data from register");

        for(let pair of data.entries()) {
            console.log(pair[0], ", " pair[1], "<--each key value pair")
        }
        console.log(data, "data before register function")
        const registerFunction = this.props.register(data);

        registerFunction.then((data) => {
            console.log(data, "data in register function");
            if(data.status.message === "Success") {
                this.props.history.push("/profile")
            } else {
                console.log(data, "<--error message in registerFunction");
            }
        })
    }

    render() {
        return (
            <Grid className="login" textAlign="center" verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450, height: 1000 }} >
                    <Header className="title" style={{ fontSize: "80px", color: "c0c0c0" }} as="h2" textAlign="center" >
                        Diagnosify
                    </Header>
                    <Form onSubmit={this.handleSubmit} >
                        <Segment stacked>
                            Username:
                            <Form.Input fluid icon="user" iconPosition="left" placeholder="username" type="text" name="username" onChange={this.handleChange} />
                            Password:
                            <Form.Input fluid icon="lock" iconPosition="left" placeholder="password" type="text" name="password" onChange={this.handleChange} />
                            <Button fluid size="large" type="submit">Register</Button>
                            <Message>
                                Already a member?<Link to="/">Login</Link>
                            </Message>
                        </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Register;
