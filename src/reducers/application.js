import { ASYNC_ACTIVITY_SET } from 'actions';

const initialState = {
  activities: [],
};

export default function (state = initialState, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case ASYNC_ACTIVITY_SET:
      newState.activities = action.activities;
      break;

    default:
      newState = state;
  }

  return newState;
}
