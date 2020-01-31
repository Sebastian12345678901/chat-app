import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChatBar from "./components/chat-bar.component"
import Navbar from "./components/navbar.component"
// import ExercisesList from "./components/exercise-list.component"
// import EditExercise from "./components/edit-exercise.component"
// import CreateExercise from "./components/create-exercise.component"
// import CreateUser from "./components/create-user.component"
import LandingPage from "./components/landing-page.component"
import { isCompositeComponent } from 'react-dom/test-utils';





function App() {



  function test() {
    console.log("somehting")
  }

  return (
    <Router>

      {test()}
      <Navbar />
      <LandingPage />
     
      <br />






      {/* <Route path="/chatBar" component={EditExercise} /> */}
      {/* <Route path="/edit/:id" component={EditExercise} /> */}
      {/* <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} /> */}

    </Router>
  );
}

export default App;
