import { createSlice } from '@reduxjs/toolkit';

export const animationSlice = createSlice({
  name: 'animation',
  initialState: {
    ismodelLoaded: false,
    welcomeAnimationState: false,
    rotation: 4.8,
    hero2: false,
    hero3: false,
    hero4: false,
    hero5: false,
  },
  reducers: {
    setModelLoaded: (state, actions) => {
      state.ismodelLoaded = actions.payload;
    },
    setWelcomaeAnimationState: (state, actions) => {
      state.welcomeAnimationState = actions.payload;
    },
    setRotation: (state, actions) => {
      state.rotation = actions.payload;
    },

    setHerosState: (state, { payload }) => {
      const { name, value } = payload;
      if (state.hasOwnProperty(name)) {
        state[name] = value;
      }
    }
  },
});

export const {
  setModelLoaded,
  setWelcomaeAnimationState,
  setRotation,
  setHerosState,
} = animationSlice.actions;

export default animationSlice.reducer;
