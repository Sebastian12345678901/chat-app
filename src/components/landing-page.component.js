import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import axios from "axios"





export default class LandingPage extends Component {
    constructor(props) {
        super(props);


        this.state = {

            userID: "",
            password: "",
            email: ""
        }
    }


    onChangeUsername = (e) => {
        this.setState({
            userID: e.target.value
        })

    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();

        const user = {
            userID: this.state.userID,
            password: this.state.password,
            email: this.state.email
        }

        axios.post("http://localhost:5000/users/reg", user)
            .then(res => console.log(res.data)).catch((error) => {
                console.log(error)
            });

        console.log(user);

        window.location.assign("https://localhost:3000/create");

    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label >
                            Username
                        </label>

                        <input
                            required
                            className="form-control"
                            value={this.state.userID}
                            onChange={this.onChangeUsername} />
                    </div>

                    <div className="form-group">
                        <label >
                            Password
                        </label>

                        <input
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword} />
                    </div>

                    <div className="form-group">
                        <label >
                            Email
                        </label>

                        <input
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create new user" className="btn btn-primary" />
                    </div>
                </form>
            </div>

        )
    }


}


