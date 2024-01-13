import { useState } from "react";
import GetWeatherData from "./components/GetWeatherData";
import "./App.css";
import { Task } from "./components/Task";
import GetTime from "./components/GetTime";
import ModalGeneric from "./components/Modal";
const currentDate = new Date();


const prettiedDate = currentDate.toISOString().slice(0, 10);
const endDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "95%",
    height: "40%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#f2dedc",

    // Other styles for the modal content

    // Overlay styles to make it darker
   
  },
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [urgency, setUrgency] = useState("");

  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function createTaskModal(taskProp){

      const newTask = {
        taskTitle: taskProp.title,
        taskDetails: taskProp.description,
        urgency: taskProp.urgency,
      };
      setTasks([...tasks, newTask]);
      console.log("newTask: ", newTask);
      closeModal();
  }

  return (
    <div className="App bg-gray-400 min-h-screen overflow-x-hidden overflow-y-auto">
      <div className="Hero_container bg-gray-600">
        <div className="Hero text-4xl text-blue-300 text-center pt-5">
          <p>Foreseer</p>
        </div>
        <GetWeatherData startDate={prettiedDate} endDate={endDate} />
      </div>
      <div className="relative h-32 w-32 grid grid-rows-4 ">
        <button
          className="w-24 ml-5 bg-blue-500 text-white  -my-4 p-2   rounded hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
          onClick={openModal}
        >
          Add new task
        </button>
        <ModalGeneric
          isOpen={isModalOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          shouldCloseOnEsc = {true}
          shouldReturnFocusAfterClose={true}
          handleCreateTask = {createTaskModal}
          setUrgency = {setUrgency}

        />
        <div className="grid grid-cols-2 gap-4 w-screen gap- ">
          
          {tasks && tasks.map((val, idx) => {


            return <div className=""> 
               <Task className=" " taskDetails = {val.taskDetails} taskTitle = {val.taskTitle} urgency = {val.urgency} />
            </div>
          })}
          
          <Task
            taskDetails=" Frontend:
            - Separate the admin panel from the login route.
            - Fix the Sign Out button in the admin panel to route to the index page.
            - Find a way to store the jwt's securely. (cookies, HTTPOnly, Secure tags)
        
          Backend:
            - Find a way to create unique jwt secret keys.
            - Create a generalized error handler that returns proper error messages to different situations.
            - Maybe carry the login route to the /auth endpoint as well.
            
            
        Blog todos:
        
          - Like, comment and share posts.
          - Individual profile's for writers. 
          - Follow different writers.
          - Endless feed from different writers.
          
          
          
          "
            taskTitle="Blog Fixes: "
          />

          <Task
            taskDetails=" Frontend:
            - Separate the admin panel from the login route.
            - Fix the Sign Out button in the admin panel to route to the index page.
            - Find a way to store the jwt's securely. (cookies, HTTPOnly, Secure tags)
        
          Backend:
            - Find a way to create unique jwt secret keys.
            - Create a generalized error handler that returns proper error messages to different situations.
            - Maybe carry the login route to the /auth endpoint as well.
            
            
        Blog todos:
        
          - Like, comment and share posts.
          - Individual profile's for writers. 
          - Follow different writers.
          - Endless feed from different writers.
          
          
          
          "
            taskTitle="Blog Fixes: "
            urgency ="3"
          />
        </div>
        <footer className="absolute inset-x-0 bottom-0 h-16">
          {/* <a target="_blank" href="https://icons8.com/icon/6Z2mGj6qDVv4/sun">
            Sun
          </a>
          
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>  */}
        </footer>
      </div>
    </div>
  );
}

export default App;
