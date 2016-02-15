export const WEATHER_SUCCESS = 'WEATHER_SUCCESS';

export function createWeatherSuccess(payload) {
  return {
    type: WEATHER_SUCCESS,
    payload,
  };
}

export const ASYNC_ACTIVITY_STARTED = 'ASYNC_ACTIVITY_STARTED';
export const ASYNC_ACTIVITY_ENDED = 'ASYNC_ACTIVITY_ENDED';
export const ASYNC_ACTIVITY_SET = 'ASYNC_ACTIVITY_SET';

export function createAsyncActivityStart(pid) {
  return {
    type: ASYNC_ACTIVITY_STARTED,
    pid: pid || Math.random(),
  };
}

export function createAsyncActivityEnd(activity) {
  return {
    type: ASYNC_ACTIVITY_ENDED,
    pid: activity.pid,
  };
}

export function createAsyncActivitySet(activities) {
  return {
    type: ASYNC_ACTIVITY_SET,
    activities,
  };
}
