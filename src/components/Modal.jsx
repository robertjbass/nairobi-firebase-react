import Actions from "./Actions";

const Modal = ({ toggleModal }) => {
  return (
    <>
      <div
        onClick={toggleModal}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        className="h-screen w-screen bg-black top-0 left-0 absolute z-0 flex"
      >
        <div className="h-1/2 w-1/2 bg-white rounded-md z-50 flex justify-center m-auto">
          <Actions className="m-auto h-36" />
        </div>
      </div>
    </>
  );
};

export default Modal;
