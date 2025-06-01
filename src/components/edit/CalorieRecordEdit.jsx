import { useState } from "react";
import styles from "./CalorieRecordEdit.module.css";
// import styled from "styled-components";
// import ClickBtn from "../calorieRecordsession/Clickbtn";

// const Form = styled.form`
//   background-color: #d4e0ff;
//   padding: 20px;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;

//   & label {
//     color: #333;
//     margin-right: 30px;
//     margin-bottom: 10px;
//     text-align: left;
//   }
//   & input[type="”text”"],
//   & input[type="”number”"],
//   & input[type="”date”"] {
//     margin: 5px;
//     background-color: #333;
//     color: #fff;
//     border: none;
//     padding: 10px;
//     border-radius: 5px;
//     width: 100%;
//     min-width: 255px;
//     margin-bottom: 20px;
//     font-size: 16px;
//     display: block;
//     box-sizing: border-box;
//   }
/////  dynamic component style  /////
//   & #calories {
//     ${(props) =>
//       props.caloriesCount < 0 && {
//         color: "red",
//         fontSize: "14px",
//         border: "1px solid red",
//         backgroundColor: "#fdd",
//       }}
//   }
//   & select {
//     background-color: #333;
//     color: #fff;
//     border: none;
//     padding: 10px;
//     border-radius: 5px;
//     width: 100%;
//     min-width: 255px;
//     margin-bottom: 20px;
//     display: block;
//     box-sizing: border-box;
//   }
//   & .footer {
//     display: flex;
//     margin-top: 10px;
//   }
//   & .footer button {
//     background-color: white;
//     color: #012367;
//     display: block;
//     border: 3px solid #012367;
//     border-radius: 15px;
//     padding: 10px;
//     cursor: pointer;
//     flex-grow: 1;
//   }
// `;

export default function CalorieRecordEdit(props) {
  const DEFAULT_VALUE = {
    date: "",
    meal: "Breakfast",
    content: "",
    calories: "",
  };
  const [mealObject, setmealObject] = useState(DEFAULT_VALUE);
  function handleDateInput(event) {
    setmealObject({ ...mealObject, date: event.target.value });
  }
  function contantInputHandle(event) {
    setmealObject({ ...mealObject, content: event.target.value });
  }
  function mealInputHandle(event) {
    setmealObject({ ...mealObject, meal: event.target.value });
  }
  function calorieInputHandle(event) {
    setmealObject({ ...mealObject, calories: Number(event.target.value) });
  }
  // previus state
  // const [clickcounter, setClickCounter] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault(); // تمنع الفورم من أنها تعمل ريفريش
    console.log(mealObject);
    console.log("Form submission prevented!");
    props.onFormSubmit(mealObject);
    setmealObject(DEFAULT_VALUE);
  };
  const handleCloseModal = () => {
    props.onCloseModal();
    setmealObject(DEFAULT_VALUE);
  };
  return (
    <form
      className={styles.form}
      caloriesCount={mealObject.calories}
      onSubmit={handleSubmit}
    >
      {/* <label htmlFor="click"> i got clicked {clickcounter} times</label> */}
      <label htmlFor="date">date</label>
      <input
        value={mealObject.date}
        onChange={handleDateInput}
        type="date"
        name="data"
        id="date"
      />
      <label htmlFor="meal">Meal</label>
      <select
        name="meal"
        id="meal"
        value={mealObject.meal}
        onChange={mealInputHandle}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Launch">Launch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snacks">Snacks</option>
      </select>

      <label htmlFor="content">content</label>
      <input
        value={mealObject.content}
        onChange={contantInputHandle}
        type="text"
        name="content"
        id="content"
      />
      <label htmlFor="calories">Calories</label>
      <input
        type="number"
        name="calories"
        id="calories"
        value={mealObject.calories}
        onChange={calorieInputHandle}
        className={`${styles.caloriesInput} ${
          mealObject.calories < 0 ? styles.error : ""
        }`}
      />
      <div className={styles.footer}>
        <button>Add Record</button>
        <button type="button" onClick={handleCloseModal}>
          Cancel
        </button>
        {/* <ClickBtn setClickCounter={setClickCounter} /> */}
      </div>
    </form>
  );
}
