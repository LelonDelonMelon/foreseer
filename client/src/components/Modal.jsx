import Modal from "react-modal";
import React, { useState } from "react";

const UrgencyDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ["1 (the least urgency)", " 2", " 3", " 4", " 5 ( the most urgency)"];

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);

    // Call setUrgency from props to update the urgency state in the parent component
    props.setUrgency(option);
  };

  return (
    <div className="relative">
      <div
        className="cursor-pointer p-2 border border-gray-300 rounded"
        onClick={handleDropdownClick}
      >
        {selectedOption || "Select an option"}
      </div>
      {isOpen && (
        <ul className="absolute left-0 mt-2 p-2 bg-white border border-gray-300 rounded cursor-pointer">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              <label className=" hover:bg-blue-500">{option}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ModalGeneric = (props) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [urgency, setUrgency] = useState("");

  const handleCreateTask = () => {
    const task = {
      title: taskTitle,
      description: taskDetails,
      urgency: urgency,
    };
    console.log(task);
    props.handleCreateTask(task);
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onAfterOpen={props.onAfterOpen}
        onRequestClose={props.onRequestClose}
        style={props.style}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md"
        overlayClassName="fixed inset-0 bg-black opacity-90"
        ariaHideApp={true}
      >
        <form className="flex flex-col items-center">
          <div className="mb-4">
            <label className="mb-1 mr-2" htmlFor="input1">
              Task title:
            </label>
            <input
              className="p-2 border border-gray-300 rounded"
              type="text"
              id="input1"
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 mr-2" htmlFor="input2">
              Task details:
            </label>
            <input
              className="p-2 border border-gray-300 rounded"
              type="text"
              id="input2"
              onChange={(e) => setTaskDetails(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 mr-2" htmlFor="input3">
              Urgency:
            </label>
            {/* Pass setUrgency as a prop to UrgencyDropdown */}
            <UrgencyDropdown setUrgency={setUrgency} />
          </div>
        </form>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={props.onRequestClose}
        >
          Close
        </button>
        {/* Centered Create Task button */}
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mx-auto"
          onClick={handleCreateTask}
        >
          Create Task
        </button>
      </Modal>
    </div>
  );
};

export default ModalGeneric;
