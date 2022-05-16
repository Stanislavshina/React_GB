import React, { useState, useEffect } from "react";

export function ChatGb() {
  const [chatList, setChatList] = useState([]);
  const [msgValue, setMsgValue] = useState([]);
  //   let botTimeOut = setTimeout(botResponse, 5000);

  function getMsgValue(event) {
    setMsgValue(event.target.value);
  }

  function getChatList() {
    const message = { author: "User", message: msgValue };
    setChatList([...chatList, message]);
    setMsgValue([]);
  }

  function botResponse() {
    const botMsg = { author: "Chat-bot", message: "Hello, User" };
    setChatList([...chatList, botMsg]);
  }

  useEffect(() => {
    // console.log(chatList);
    const prevMsg = chatList[chatList.length - 1];
    if (prevMsg?.author === "User") {
      console.log("hell ye");
      setTimeout(botResponse, 5000);
    }
  }, [chatList]);

  return (
    <div>
      {chatList.map((msg) => (
        <div>
          <h5>{msg.author}</h5>
          <p>{msg.message}</p>
        </div>
      ))}
      <input type="text" value={msgValue} onChange={getMsgValue} />
      <button onClick={getChatList}>Send</button>
    </div>
  );
}
