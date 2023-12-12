import React from "react";
import Modal from "react-modal";

const ModalGeneric = (props) => {
  console.log(props);
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onAfterOpen={props.onAfterOpen}
        onRequestClose={props.onRequestClose}
        style={props.style}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md"
        overlayClassName="fixed inset-0 bg-black opacity-80"
      >
        <form className="flex flex-col items-center">
          <div className="mb-4">
            <label className="mb-1" htmlFor="input1">
              Deneme 1
            </label>
            <input
              className="p-2 border border-gray-300 rounded"
              type="text"
              id="input1"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1" htmlFor="input2">
              Deneme 2
            </label>
            <input
              className="p-2 border border-gray-300 rounded"
              type="text"
              id="input2"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1" htmlFor="input3">
              Deneme 3
            </label>
            <input
              className="p-2 border border-gray-300 rounded"
              type="text"
              id="input3"
            />
          </div>
        </form>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={props.onRequestClose}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ModalGeneric;
