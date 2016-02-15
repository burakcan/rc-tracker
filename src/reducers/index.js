import { combineReducers } from 'redux';
import application from 'reducers/application';
import userEntities from 'reducers/userEntities';
import weather from 'reducers/weather';

export default combineReducers({
  application,
  userEntities,
  weather,
});
