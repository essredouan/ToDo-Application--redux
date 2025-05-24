import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: [],
    filter: 'ALL',
  },
  reducers: {
    addTask: (state, action) => {
      state.taskList.push({
        id: uuidv4(),
        description: action.payload,
        isDone: false,
      });
    },
    toggleTask: (state, action) => {
      const task = state.taskList.find(t => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask: (state, action) => {
      const { id, newDescription } = action.payload;
      const task = state.taskList.find(t => t.id === id);
      if (task) task.description = newDescription;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTask, editTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
