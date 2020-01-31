import React, { Component } from "react"
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"


export default class ChatBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: this.props.stage,
            chatMessage:"",
            messageBox:[]

        }
    }

    componentDidMount(){
        let ab = [];
        axios.get("http://localhost:5000/messages").then(messages => {
            messages.data.forEach(message =>{
                let date = new Date(message.createdAt);
                let h = date.getHours();
                let m = date.getMinutes();
                let ft = h + ":"+ m;
               let  messageObj = {
                    userName: message.userID,
                    text:message.message,
                    createdAt: ft
                }
                ab.push(messageObj)
             this.setState({
                messageBox:ab
             })
             
            })
            console.log(this.state.messageBox);
      })
    }


    messageList=()=>{
     return this.state.messageBox.map(currentMessage=>{
         return (<div>
     <b>{currentMessage.createdAt}</b>:<p>{currentMessage.userName}</p>:<b>{currentMessage.text}</b>
         </div>)
     })
    }

    SendToChat = (e) =>{
        e.preventDefault();

        const message = {
            userID:localStorage.getItem("user"),
            message:this.state.chatMessage

        }

        axios.post("http://localhost:5000/messages/messagePost", message)
        .then(res=>{
            console.log("Sended")
            this.setState({chatMessage:""})
        })
        .catch((error)=> {
            console.log(error);
        })

    }
    
    onChangeChatMessage = (e) => {
        this.setState({
            chatMessage: e.target.value
        })

    }
    render() {
        return (
            <div>
                {this.messageList()};
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