import CalorieRecord from "./CalorieRecord";
import styles from "./calorieRecordsession style/CalorieRecordStyle.module.css";

export default function RecordList(props) {
  return props.records?.length ? (
    <ul className={styles["record-list"]}>
      {props.records.map((record) => (
        <li key={record.id}>
          <CalorieRecord
            id={record.id}
            date={record.date}
            meal={record.meal}
            content={record.content}
            calories={record.calories}
            onDeleteRecord={props.onDeleteRecord}
          />
        </li>
      ))}
    </ul>
  ) : (
    <p className={styles["no-records-message"]}>
      No records found for this date.
    </p>
  );
}
