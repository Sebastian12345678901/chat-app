import React, { Component } from "react"
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"


export default class ChatBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: this.props.stage,
            chatMessage:""

        }
    }
    SendToChat = (e) =>{
        e.preventDefault();

        

    }
    
    onChangeChatMessage = (e) => {
        this.setState({
            chatMessage: e.target.value
        })

    }
    render() {
        return (
            <div>
                {this.state.loggedIn == 3 &&
                    <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-4">
                            <form onSubmit={this.SendToChat}>
                                <input 
                                required 
                                   value={this.state.chatMessage}
                                   onChange={this.onChangeChatMessage} />
                                    <input type="submit" className="btn btn-primary" value="send" />
                               
                            </form>


















                        </div>
                        <div className="col-md-4">

                        </div>
                    </div>


























                }







                {this.state.loggedIn != 3 &&
                    <h1>BLA</h1>
                }

            </div>
        );
    }


}