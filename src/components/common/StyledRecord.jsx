import styles from "./StyledRecord.module.css";

export default function StyledRecord(props) {
  return <div className={styles["styled-record"]}>{props.children}</div>;
}
