import styles from "./header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export function Header() {
  return (
    <header className={styles.header}>
      <MenuIcon color="primary" fontSize="large" />
      <AccountCircleIcon color="primary" fontSize="large" />
    </header>
  );
}
