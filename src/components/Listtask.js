import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { setFilter } from '../redux/taskSlice';

const Listtask = () => {
  const { taskList, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = taskList.filter(task => {
    if (filter === 'DONE') return task.isDone;
    if (filter === 'NOT_DONE') return !task.isDone;
    return true; // ALL
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter('ALL'))}>All</button>
        <button onClick={() => dispatch(setFilter('DONE'))}>Done</button>
        <button onClick={() => dispatch(setFilter('NOT_DONE'))}>Not Done</button>
      </div>
      <div>
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Listtask;
