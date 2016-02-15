import App from 'containers/App';
import Dashboard from 'containers/Dashboard';
import Entity from 'containers/Entity';
import Settings from 'containers/Settings';

import EntityList from 'components/EntityFlow/List';
import EntityAddForm from 'components/EntityFlow/AddForm';

export default [{
  path: '/',
  component: App,
  indexRoute: {
    component: Dashboard,
  },
  childRoutes: [{
    path: 'entities/:category(/:type)',
    component: Entity,
    indexRoute: {
      component: EntityList,
    },
    childRoutes: [{
      path: 'new',
      component: EntityAddForm,
    }],
  }, {
    path: 'settings',
    component: Settings,
  }],
}];
