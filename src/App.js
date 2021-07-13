import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form'
import Results from './components/Results'
import { useState } from 'react';

function App() {
  //makes a fake DB
  const [listOfTasks, setTasks] = useState([]);
  const addTask = myForm =>{
    //This is the function where the adding takes place
    //This is lifting state from form to access the data in resuts
    console.log("This is coming from App.js' add character function")
    console.log(myForm);
    setTasks([...listOfTasks, myForm]);
  }


  return (
    <div className="container">
      <h1 className="jumbotron">To-Do List</h1>
        <div className="row">
          <Form addTask={addTask}/>
          <Results myList = {listOfTasks} setMyList={setTasks}/>
        </div>
    </div>
  );
}

export default App;
