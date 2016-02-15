import { WEATHER_SUCCESS } from 'actions';

const initialState = {
  _initial: true,
};

export default function (state = initialState, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case WEATHER_SUCCESS:
      newState = action.payload;
      break;

    default:
      newState = state;
  }

  return newState;
}
