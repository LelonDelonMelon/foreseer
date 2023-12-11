import { useState } from "react";
import GetWeatherData from "./components/GetWeatherData";
import "./App.css";
import { Task } from "./components/Task";
const currentDate = new Date();

const prettiedDate = currentDate.toISOString().slice(0, 10);
const endDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

function App() {
  return (
    <div className="App bg-gray-400 min-h-screen overflow-x-hidden">
      <div className="Hero_container bg-gray-600">
        <div className="Hero text-4xl text-blue-300 text-center pt-5">
          <p>Foreseer</p>
        </div>
        <GetWeatherData startDate={prettiedDate} endDate={endDate} />
      </div>
      <div className="relative h-32 w-32 ">
       
       
          <>
          <Task taskDetails =" Frontend:
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
          
          
          
          " taskTitle="Blog Fixes: "

         />


<Task taskDetails =" Frontend:
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
          
          
          
          " taskTitle="Blog Fixes: "

         />
          </>       
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
