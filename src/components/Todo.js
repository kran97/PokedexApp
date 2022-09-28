import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import Card from "./ui/Card";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function onDelete() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    // <div className="card">
    <Card>
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={onDelete}>
          Delete
        </button>
      </div>
      {modalIsOpen ? (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      ) : null}
      {modalIsOpen ? <Backdrop onCancel={closeModalHandler} /> : null}
      {/* </div> */}
    </Card>
  );
}

export default Todo;
