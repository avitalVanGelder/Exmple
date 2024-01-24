import React, { FC } from 'react';
import './TaskList.scss';
import { TaskModel } from '../../models/TaskModel';
import Task from '../Task/Task';

interface TaskListProps { }
const TaskList = () => {
  let d=new Date()
  let taskList: TaskModel[] = [{ description: "do hw", isDone: false, userName: "Dvora", date: d },
  { description: "wash dishes", isDone: true, userName: "Dvora", date: d }]
  return <div className="TaskList">
    <h1 style={{background:'orange',color:'white',textAlign:'center'}}>-Tasks List-</h1>
    {taskList.map((t,index) => {
      return <Task key={index} taskDetails={t}></Task>
    })}
  </div>
};
export default TaskList;
