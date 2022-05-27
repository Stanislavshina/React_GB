import styles from "./chat.module.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
export function Chat({ title }) {
  return (
    <li className={styles.listItem}>
      <AccountBoxIcon />
      <div className={styles.about}>
        <h4 className={styles.text}>{title}</h4>
        <h4 className={styles.text}>Last msg. Date</h4>
      </div>
    </li>
  );
}
