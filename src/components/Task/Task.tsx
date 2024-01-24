import React, { FC, useState } from 'react';
import './Task.scss';
import { TaskModel } from '../../models/TaskModel';
import TaskList from '../TaskList/TaskList';

interface TaskProps {
  taskDetails: TaskModel
}


const Task = (props: TaskProps) => {

  const [task, setTask] = useState<TaskModel>(props.taskDetails);
  function setState() {
    debugger
    task.isDone = !task.isDone;
    task.date = new Date();
    setTask({ ...task });
  }
  function delTask() {
    task.description = "The task Canceled!"
    setTask({ ...task });
  }
  return <div className="card">
    <div className="card-body">
      <h5 className="user-name">{props.taskDetails.userName}</h5>
      <h6 className="date-to-do">date-to-do: {props.taskDetails.date.toLocaleDateString()}</h6>
      <p className="task-desc">{props.taskDetails.description}</p>
      <p className="is-done?">{task.isDone ? 'Done' : 'not Done'}</p>
      <button onClick={() => setState()}>set State</button>
      <button onClick={() => delTask()}>Delete</button>
    </div>
  </div>
}
export default Task;
