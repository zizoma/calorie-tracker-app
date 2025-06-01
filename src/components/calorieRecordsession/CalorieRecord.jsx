import styles from "./calorieRecordsession style/CalorieRecordStyle.module.css";
import CalorieRecordDate from "./CaloriRecordDate";
import StyledRecord from "../common/StyledRecord";

export default function CalorieRecord(props) {
  function deleteRecordHandler() {
    props.onDeleteRecord(props.id);
  }
  return (
    <ul className={styles.record}>
      <li>
        <CalorieRecordDate date={props.date} />
      </li>
      <li> {props.meal}</li>
      <li> {props.content}</li>
      <li className={styles["record-calories"]}>
        <StyledRecord>{props.calories} cal</StyledRecord>
      </li>
      <button
        onClick={deleteRecordHandler}
        className={styles["record-delete-btn"]}
      >
        Delete Record
      </button>
    </ul>
  );
}
