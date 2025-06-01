import StyledRecord from "../common/StyledRecord";
import styles from "./calorieRecordsession style/CalorieRecordStyle.module.css";
function CalorieRecordDate(props) {
  const day = props.date.getDate();
  let month = props.date.toLocaleString("defualt", { month: "long" });
  let year = props.date.getFullYear();
  return (
    <StyledRecord>
      <div className={styles.month}>{month}</div>
      <div className={styles.day}>{day}</div>
      <div className={styles.year}>{year}</div>
    </StyledRecord>
  );
}
export default CalorieRecordDate;
