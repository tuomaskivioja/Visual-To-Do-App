import "./App.css";
import React, { Component } from "react";
import Overview from "./Overview";
import Nav from "./Nav";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: { text: "" },
      tasks: [],
      id: uniqid(),
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  formHandler = (e) => {
    e.preventDefault();
    let message = ''
    const input = document.getElementById('Input')
  
    if (input.value === '') {
      message = 'Please enter task'
      document.getElementById('errorDiv').innerHTML = message
      return true
    }

  };

  onSubmit = (e) => {
    if (this.formHandler(e)) {
      return 1
    }
    document.getElementById('errorDiv').innerHTML = ''
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "" },
      id: uniqid(),
    });
  };

  complete = (e) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => {
        return task.text !== e.target.value;
      }),
    });
  };

  toggleDropdown = (itemClass) => {

    console.log(itemClass)
    const elements = document.querySelectorAll(`.${itemClass}`);
    elements.forEach(function(element) {

      if (element.classList.contains("invisible")) {
        element.classList.remove("invisible");
        element.classList.add("visible");
      }
      else {
        element.classList.add("invisible")
      };
    });
  };



  render() {
    const { task, tasks } = this.state;

    return (
      <div className="App">
      <Nav toggleMenu = {this.toggleDropdown}/>
        <form id='form' onSubmit={this.onSubmit} className='form'>
        <div id='errorDiv'></div>
          <label className='form-label' htmlFor="Input">Enter Task</label>
          <input autocomplete="off" className='form-control textfield'
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="Input"
          ></input>
          <button className='btn btn-primary' type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} complete={this.complete} />
      </div>
    );
  }
}

export default App;
