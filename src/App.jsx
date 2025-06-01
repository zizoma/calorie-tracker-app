import { useState, useEffect } from "react";
import CalorieRecordEdit from "./components/edit/CalorieRecordEdit";
import ListingSection from "./components/calorieRecordsession/ListingSection";
import styles from "./App.module.css";
import Modal from "react-modal";

function App() {
  const [records, setRecords] = useState([]);
  const [nextId, setNextId] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      backgroundColor: "var(--theme-background-dark",
      transform: "translate(-50%, -50%)",
      borderRadius: "12px",
      padding: "32px",
      boxShadow: "0 4px 32px rgba(0,0,0,0.2)",
      border: "1px solid var(--theme-text-success)",
      minWidth: "320px",
      maxWidth: "90vw",
    },
  };

  function handleOpenModal() {
    setIsModalOpen(true);
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }

  const onDeleteRecord = (id) => {
    setRecords((prevRecords) =>
      prevRecords.filter((record) => record.id !== id)
    );
  };

  const INETIAL_RECORDS = [
    {
      id: 1,
      date: new Date(2025, 0, 5),
      meal: "Breakfast",
      content: "Beans",
      calories: 300,
    },
    {
      id: 2,
      date: new Date(2025, 0, 5),
      meal: "Lunch",
      content: "Chickens",
      calories: 380,
    },
    {
      id: 3,
      date: new Date(2025, 0, 5),
      meal: "Dinner",
      content: "Halwa",
      calories: 400,
    },
    {
      id: 4,
      date: new Date(2025, 0, 5),
      meal: "Snacks",
      content: "Chips",
      calories: 450,
    },
  ];

  useEffect(() => {
    setRecords(INETIAL_RECORDS);
  }, []);

  const formSubmitHandler = (record) => {
    const formattedRecord = {
      ...record,
      date: new Date(record.date),
      id: nextId,
    };

    setRecords((prevRecords) => [formattedRecord, ...prevRecords]);
    setNextId((lastValue) => lastValue + 1);
    handleCloseModal();
  };

  return (
    <>
      <header>
        <h1 className={styles.title}>Calorie Tracker</h1>
        <p className={styles.paragraph}> Track your daily calorie intake</p>
      </header>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Calorie Record Modal"
        style={modalStyles}
      >
        <CalorieRecordEdit
          onFormSubmit={formSubmitHandler}
          onCloseModal={handleCloseModal}
        />
      </Modal>
      <ListingSection allRecords={records} onDeleteRecord={onDeleteRecord} />
      <button className={styles.button} onClick={handleOpenModal}>
        Track New Meal
      </button>
      <footer className={styles.footer}>
        <p>
          © 2025 Calorie Tracker Made with ❤️ by Abdelaziz Deboo{" "}
          <a href="Abdelaziz Deboo"></a>
        </p>
      </footer>
    </>
  );
}

export default App;
