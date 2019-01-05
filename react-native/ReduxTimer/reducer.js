// import needs

// Actions
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_TIMER = "ADD_TIMER";
// ActionCreate
const startTimer = () => {
  return {
    type: START_TIMER
  };
};

const restartTimer = () => {
  return {
    type: RESTART_TIMER
  };
};

const addTimer = () => {
  return {
    type: ADD_TIMER
  };
};

//reducer

const TIME_DURATION = 1500;

const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timeDuration: TIME_DURATION
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state, action);
    case RESTART_TIMER:
      return applyRestartTimer(state, action);
    case ADD_TIMER:
      return applyAddTimer(state, action);
    default:
      return state;
  }
};

//action을 보낼 떄마다 자동으로 리듀서를 실행합니다.
// 리덕스는 자동으로 액션을 리듀서로 보낼꺼야
// Reducer Functions

const applyStartTimer = state => {
  return {
    ...state,
    isPlaying: true
  };
};

const applyRestartTimer = state => {
  return {
    ...state,
    isPlaying: false,
    elapsedTime: 0
  };
};

const applyAddTimer = state => {
  if (state.elapsedTime < TIME_DURATION) {
    return {
      ...state,
      elapsedTime: state.elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false
    };
  }
};

//Export ActionCreators
export const actionCreators = {
  startTimer,
  restartTimer,
  addTimer
};

export default reducer;

// import needs

// Actions
// const START_TIMER = "START_TIMER";
// const RESTART_TIMER = "RESTART_TIMER";
// const ADD_TIMER = "ADD_SECOND";
// // ActionCreate
// function startTimer() {
//   return {
//     type: START_TIMER
//   };
// }

// function restartTimer() {
//   return {
//     type: RESTART_TIMER
//   };
// }

// function addTimer() {
//   return {
//     type: ADD_TIMER
//   };
// }
// // Reducer
// const TIME_DURATION = 1500;

// const initialState = {
//   isPlaying: false,
//   elapsedTime: 0,
//   timeDuration: TIME_DURATION
// };
// //action을 보낼 떄마다 자동으로 리듀서를 실행합니다.
// // 리덕스는 자동으로 액션을 리듀서로 보낼꺼야
// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case START_TIMER:
//       return applyStartTimer(state, action);
//     case RESTART_TIMER:
//       return applyReStartTimer(state, action);
//     case ADD_TIMER:
//       return applyAddSecond(state, action);
//     default:
//       return state;
//   }
// }

// // Reducer Functions
// function applyStartTimer(state) {
//   return {
//     ...state,
//     isPlaying: true
//   };
// }

// function applyReStartTimer(state) {
//   return {
//     ...state,
//     isPlaying: false
//   };
// }

// function applyAddSecond(state) {
//   if (state.elapsedTime < TIME_DURATION) {
//     return {
//       ...state,
//       elapsedTime: state.elapsedTime + 1
//     };
//   } else {
//     return {
//       ...state,
//       isPlaying: false
//     };
//   }
// }
// //Export ActionCreators
// export const actionCreators = {
//   startTimer,
//   restartTimer,
//   addTimer
// };

// // Export Reducer
// export default reducer;
