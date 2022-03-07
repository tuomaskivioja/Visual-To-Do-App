import React, { Component } from "react";
import "./Overview.css";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks } = this.props;
    return (
      <div>
        {tasks.map((task) => {
          return (
            <div className='taskList'>
              <div className='card task' key={task.id}>{task.text}</div>
              <button key="btn" className='btn btn-danger' onClick={this.props.complete} value={task.text}>
                Completed
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Overview;
