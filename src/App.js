import "./App.css";
import React, { Component } from "react";
import Overview from "./Overview";
import Nav from "./Nav";
import uniqid from "uniqid";

const testTask = {text: 'Hello World', priority: 'high', project: "Proj2"}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: ["Proj1", "Proj2", "Proj3"],
      task: {
        text: "", priotity: "high", project: "" 
      },
      tasks: [testTask],
      id: uniqid(),
    };
  }

  handleChange = (e) => {

    const input = document.getElementById('Input')
    const select = document.getElementById('projectSelect')
    this.setState({
      task: {
        text: input.value,
        id: this.state.task.id,
        project: select.value,
      },
    });
  };

  formHandler = (e) => {
    e.preventDefault();
    let messages = []
    const input = document.getElementById('Input')
    const select = document.getElementById('projectSelect')
  
    if (input.value === '') {
      messages.push('Please enter task')
    }

    if (select.value === '') {
      messages.push('Please select project')
    }

    console.log(messages)

    if (messages.length > 0) {
      document.getElementById('errorDiv').innerHTML = messages.join(' and ')
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
      task: { text: "" , project: ""},
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

  editTask = (e) => {

    let text = e.target

    const taskListItem = e.target.parentElement
    const inputField = document.createElement('INPUT')
    inputField.setAttribute("type", "text")
    inputField.setAttribute("value", text.innerHTML)

    taskListItem.insertBefore(inputField, taskListItem.firstChild);
    text.remove()
  }



  render() {
    const { task, tasks } = this.state;

    return (
      <div className="App">
      <Nav toggleMenu = {this.toggleDropdown}/>
        <form id='form' onSubmit={this.onSubmit} className='form'>
        <div id='errorDiv'></div>
          <label className='form-label' htmlFor="Input">Enter Task</label>
          <input autoComplete="off" className='form-control textfield'
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="Input"
          ></input>
          <label htmlFor="projectSelect">Choose Project:</label>
          <select name="projectSelect" className='form-select' id="projectSelect" onChange={this.handleChange}>
            <option disabled selected value=''> -- select project -- </option>
            {this.state.projects.map((value) => <option key={uniqid()} value={value}>{value}</option>)}
          </select>
          <button className='btn btn-primary' id='submitbutton' type="submit">Add Task</button>
        </form>
        <div className='projects'>
        {this.state.projects.map((project) => 
          <Overview title= {project} editTask={this.editTask} tasks={tasks.filter((task) => {return task.project === project})} complete={this.complete} />
        )}
        </div>
      </div>
    );
  }
}

export default App;
