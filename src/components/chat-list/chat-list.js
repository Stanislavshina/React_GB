import { useState } from "react";
import { Chat } from "./chat";
import styles from "./chatList.module.css";

export function ChatList() {
  const [chatList, setChatList] = useState(["chat1", "chat2", "chat3"]);

  return (
    <ul className={styles.chatList}>
      {chatList.map((chat) => (
        <Chat title={chat} />
      ))}
    </ul>
  );
}
