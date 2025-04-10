import { createSlice } from '@reduxjs/toolkit';

export const animationSlice = createSlice({
  name: 'animation',
  initialState: {
    ismodelLoaded: false,
    welcomeAnimationState: false,
    hero1:false,
    hero2:false,
    hero3:false,
    hero4:false,
    hero5:false,
  },
  reducers: {
    setModelLoaded: (state, actions) => {
      state.ismodelLoaded = actions.payload
    },
    setWelcomaeAnimationState: (state, actions) => {
        state.welcomeAnimationState = actions.payload
    },
    setHeros1State: (state, actions) => {
      state.hero1 = actions.payload
    }
  },
});

export const { setModelLoaded, setWelcomaeAnimationState, setHeros1State } = animationSlice.actions;
export default animationSlice.reducer;
