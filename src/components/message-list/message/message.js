import styles from "./message.module.css";

export const Message = ({ msg }) => {
  return (
    <li className={styles.message}>
      <h5 className={styles.title}>{msg.author}</h5>
      <p>{msg.message}</p>
      <hr />
      <p>{msg?.date}</p>
    </li>
  );
};
