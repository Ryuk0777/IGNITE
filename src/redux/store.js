import { configureStore } from '@reduxjs/toolkit';
import animationReducer from './animation/animationSlice';

const store = configureStore({
  reducer: {
    animation: animationReducer,
  },
});

export default store;
