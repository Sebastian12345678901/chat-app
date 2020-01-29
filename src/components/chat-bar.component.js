import React, { Component } from "react"
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"


export default class ChatBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        }
    }

    componentDidMount() {
        if (typeof localStorage.getItem("user") === "string") {
            this.state.loggedIn = true;
        }
    }


    render() {
        return (
            <div>
                {this.state.loggedIn === true &&
                    <h3>Hello!!!</h3>

                }

                {console.log(this.state.loggedIn)}
            </div>
        );
    }


}