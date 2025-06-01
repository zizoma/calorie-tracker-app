import { useState } from "react";
import RecordList from "./RecordList";
import styles from "./ListingSection.module.css";
export default function ListingSection(props) {
  const { allRecords, onDeleteRecord } = props;
  const [currentDate, setCurrentDate] = useState(new Date());
  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setCurrentDate(selectedDate);
  };
  const dateFilter = (record) => {
    return (
      record.date.getFullYear() === currentDate.getFullYear() &&
      record.date.getMonth() === currentDate.getMonth() &&
      record.date.getDate() === currentDate.getDate()
    );
  };
  return (
    <>
      <label className={styles["listing-picker-label"]} htmlFor="select-date">
        select date
      </label>
      <input
        type="date"
        className={styles["listing-picker-input"]}
        id="select-date"
        name="select-date"
        value={currentDate.toISOString().split("T")[0]}
        onChange={handleDateChange}
      />
      <RecordList
        records={allRecords.filter(dateFilter)}
        onDeleteRecord={onDeleteRecord}
      />
    </>
  );
}
