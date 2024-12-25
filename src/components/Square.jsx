import styles from "@/app/sudo/sudo.module.css";
export default function Square(props) {
  return <div className={styles.square}>{props.value}</div>;
}
