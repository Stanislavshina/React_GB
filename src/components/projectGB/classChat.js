import React from "react";

export class ChatGb extends React.Component {
  /**
   * @param {any} props
   */
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      msgValue: "",
    };
    // this.msgValue = "";
    this.bot = null;
  }

  _getMsgValue = (event) => {
    // this.msgValue = event.target.value;
    this.setState((state) => ({
      msgValue: (state.msgValuee = event.target.value),
    }));
  };

  getMSGList = () => {
    const msgObj = { author: "User", msg: this.state.msgValue };
    this.setState([this.state.messageList.push(msgObj)]);
    this.setState((s) => ({
      msgValue: (s.msgValue = ""),
    }));
    // this.msgValue = "";
    // console.log(this.msgValue);
    // console.log(this.state);
  };

  _setBotResponse = () => {
    this.bot = setTimeout(() => {
      const botMsg = { author: "Chat-bot", msg: "Hello, User!" };
      this.setState([this.state.messageList.push(botMsg)]);
    }, 5000);
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log("updated!!!!");
    let prev = prevState.messageList[this.state.messageList.length - 1];
    if (prev?.author === "User") {
      // console.log(`Wow ur name is ${prev.author}`);
      // console.log(this.state.messageList);
      // setTimeout(this._setBotResponse, 5000);
      this._setBotResponse();
    }
  }

  render() {
    return (
      <div>
        {this.state.messageList.map((message) => (
          <div>
            <h4>{message.author}</h4>
            <p>{message.msg}</p>
          </div>
        ))}
        <input
          type="text"
          value={this.state.msgValue}
          onChange={this._getMsgValue}
        />
        <button onClick={this.getMSGList}>add new msg</button>
      </div>
    );
  }
}
