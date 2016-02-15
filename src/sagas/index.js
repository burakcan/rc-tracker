import { take, fork, put } from 'redux-saga';
import weatherService from 'services/weather';
import activityService from 'services/activity';
import * as actions from 'actions';

/* eslint-disable no-loop-func, no-constant-condition */

// ACTIVITY WATCHERS
function *watchActivityStart() {
  while (true) {
    const activity = yield take(actions.ASYNC_ACTIVITY_STARTED);
    activityService.start(activity);

    yield put(actions.createAsyncActivitySet(
      activityService.getActivities()
    ));
  }
}

function *watchActivityEnd() {
  while (true) {
    const activity = yield take(actions.ASYNC_ACTIVITY_ENDED);
    activityService.end(activity);

    yield put(actions.createAsyncActivitySet(
      activityService.getActivities()
    ));
  }
}

function *watchActivity() {
  yield fork(watchActivityStart);
  yield fork(watchActivityEnd);
}

// WEATHER CHECKER
function *weather(interval) {
  let firstLaunch = true;

  while (true) {
    const _interval = firstLaunch ? 0 : interval;
    firstLaunch = false;

    const activity = yield new Promise(resolve => {
      setTimeout(() =>
        resolve(
          actions.createAsyncActivityStart(activityService.generatePid())
        )
      , _interval);
    });

    yield put(activity);

    const result = yield new Promise(resolve => {
      weatherService
      .fetch()
      .then(resolve)
      .catch(err => {
        resolve(err);
      });
    });

    yield put(actions.createWeatherSuccess(result));
    yield put(actions.createAsyncActivityEnd(activity));
  }
}

/* eslint-enable */

export default function *() {
  yield fork(watchActivity);
  yield fork(weather, 1000000000);
}
