import React, { Component } from "react";
import "./Overview.css";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks } = this.props;
    return (
      <div className='taskList'>
      <h3>{this.props.title}</h3>
        {tasks.map((task) => {
          return (
            <div className='taskListItem card'>
              <div className='taskText' onClick={this.props.editTask} key={task.id}>{task.text}</div>
              <button type="button" key="btn" className="btn btn-success" onClick={this.props.complete} value={task.text}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
</svg>
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Overview;
