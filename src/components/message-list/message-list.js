// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import { Message } from "./message";
import { TextField, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { nanoid } from "nanoid";
import { format } from "date-fns";
import styles from "./messageList.module.css";

export function MessageList() {
  const [msgList, setMsgList] = useState([]);
  const [msgValue, setMsgValue] = useState("");
  const ref = useRef();
  const date = new Date();

  function getDate() {
    return format(date, "MMMM/dd HH:mm");
  }

  function getMsgValue(event) {
    setMsgValue(event.target.value);
  }

  function getMsgList() {
    if (msgValue) {
      const message = {
        author: "User",
        message: msgValue,
        date: getDate(),
        msgID: nanoid(),
      };
      setMsgList([...msgList, message]);
      setMsgValue("");
    }
  }

  function handlePressInput({ code }) {
    if (code === "Enter") {
      getMsgList();
    }
  }

  function botResponse() {
    const botMsg = {
      author: "Chat-bot",
      message: "Hello, User",
      msgID: nanoid(),
    };
    setMsgList([...msgList, botMsg]);
  }

  useEffect(() => {
    ref.current?.focus();
  }, []);

  useEffect(() => {
    // console.log(chatList);
    const prevMsg = msgList[msgList.length - 1];
    let timerBotId = null;
    if (prevMsg?.author === "User") {
      // console.log("hell ye");
      timerBotId = setTimeout(botResponse, 5000);
    }
    return () => {
      clearInterval(timerBotId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [msgList]);

  return (
    <div className={styles.msgBlock}>
      <ul className={styles.msgList}>
        {msgList.map((message) => (
          <Message msg={message} key={message.msgID} />
        ))}
      </ul>
      <TextField
        InputProps={{
          autoFocus: true,
          value: msgValue,
          onChange: getMsgValue,
          onKeyDown: handlePressInput,
          color: "secondary",
          endAdornment: (
            <InputAdornment position="end">
              {msgValue && (
                <SendIcon color={"secondary"} onClick={getMsgList} />
              )}
            </InputAdornment>
          ),
        }}
        className={styles.msgInput}
        fullWidth={true}
        size={"small"}
        id="standard-basic"
        label="type ur message..."
        variant="standard"
        color={"secondary"}
      />
    </div>
  );
}
