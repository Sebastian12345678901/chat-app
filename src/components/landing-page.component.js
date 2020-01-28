import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import axios from "axios"





export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage : 0,
            userID: "",
            password: "",
            email: "",
            statusMessage:""
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
            .then(res => {console.log(res.data)
                this.setState({
                    statusMessage:"Success! you have been registered with username" + user.userID,
                    stage:0,
                    password:"",
                    email:""
                })}).catch((error) => {
                console.log(error);
                this.setState({
                    statusMessage:"SOMETHING WENT WRLY WRONG"
                })
            });

        console.log(user);


    }

    goToReg = () => {
        this.setState({
            stage:1
        })
    }
    render() {
        return (
            <div>
            {this.state.stage == 0 &&
            <div>
                <label>Login</label><br></br>
                {this.state.statusMessage}
            <form onSubmit={this.login}>
                
                
                <label>Username</label>
                <input required className="form-control"
                value = {this.state.userID}
                onChange = {this.onChangeUsername}/>
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
            </form>
            <button class = "btn btn-primary" onClick={this.goToReg}>REGME</button>
            </div>
            }
             {this.state.stage == 1 && 
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
                </div>
                }
            </div>

        )
    }


}


