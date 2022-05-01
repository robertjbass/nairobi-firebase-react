import "./App.css";
import BookSearch from "./components/BookSearch";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [modalIsActive, setModalIsActive] = useState(false);
  const toggleModal = () => setModalIsActive(!modalIsActive);

  return (
    <>
      {modalIsActive && <Modal toggleModal={toggleModal} />}
      <div className="App">
        <BookSearch toggleModal={toggleModal} />
      </div>
    </>
  );
}

export default App;
