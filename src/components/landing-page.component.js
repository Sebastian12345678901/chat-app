import React, { Component } from "react"
//import { Link, Redirect } from "react-router-dom"
import axios from "axios"
import ChatBar from "../components/chat-bar.component"




export default class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stage: 0,
            userID: "",
            password: "",
            email: "",
            statusMessage: "",
            usernameLogin: "",
            passwordLogin: ""
        }
    }

    componentDidMount() {
        if (localStorage.getItem("user") !== null) {
            this.setState({ stage: 3 })
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

    onChangeUsernameLogin = (e) => {
        this.setState({
            usernameLogin: e.target.value
        })

    }
    onChangePasswordLogin = (e) => {
        this.setState({
            passwordLogin: e.target.value
        })
    }

    logout = () => {
        localStorage.removeItem("user");
        this.setState({ stage: 0 });
    }

    login = (e) => {
        e.preventDefault();
        axios.get("http://localhost:5000/users/").then(users => {

            users.data.forEach(user => {
                this.setState({ statusMessage: "" })
                if (user.userID === this.state.usernameLogin) {
                    if (user.password === this.state.passwordLogin) {

                        localStorage.setItem("user", user.userID);
                        this.setState({ stage: 3 });

                        this.setState({ statusMessage: "" })
                    } else {
                        this.setState({ statusMessage: "Wrong password!" })
                    }
                } else {
                    this.setState({ statusMessage: "Wrong username!" })
                }
            })

        }).catch(error => console.log(error))

    }

    onSubmit = (e) => {
        e.preventDefault();

        const user = {
            userID: this.state.userID,
            password: this.state.password,
            email: this.state.email
        }



        axios.post("http://localhost:5000/users/reg", user)
            .then(res => {
                console.log(res.data)
                this.setState({
                    statusMessage: "Success! you have been registered with username" + user.userID,
                    stage: 0,
                    password: "",
                    email: ""
                })
            }).catch((error) => {
                console.log(error);
                this.setState({
                    statusMessage: "SOMETHING WENT WRLY WRONG"
                })
            });

        console.log(user);


    }

    goToReg = () => {
        this.setState({
            stage: 1
        })
    }
    render() {
        return (
            <div>
                {this.state.stage === 0 &&
                    <div>
                        <label>Login</label><br></br>
                        {this.state.statusMessage}
                        <form onSubmit={this.login}>


                            <label>Username</label>
                            <input required className="form-control"
                                value={this.state.usernameLogin}
                                onChange={this.onChangeUsernameLogin} />
                            <div className="form-group">
                                <label >
                                    Password
                        </label>
                                <input
                                    required
                                    type="password"
                                    className="form-control"
                                    value={this.state.passwordLogin}
                                    onChange={this.onChangePasswordLogin}
                                />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-primary" value="Login" />
                            </div>
                        </form>
                        <button className="btn btn-secondary" onClick={this.goToReg}>REGME</button>
                        <ChatBar></ChatBar>
                    </div>
                    
                }
                {this.state.stage === 1 &&
                    <div>
                        {this.state.statusMessage}
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
                        <ChatBar ></ChatBar>
                    </div>
                }

                {this.state.stage === 3 &&

                    <div>

                        <div className="form-group">
                            <h3>Welcome {localStorage.getItem("user")}</h3>
                            <button onClick={this.logout} className="btn btn-primary"> Logout </button>
                        </div>
                        <ChatBar stage="3"></ChatBar>
                    </div>}
            </div>

        )
    }


}


