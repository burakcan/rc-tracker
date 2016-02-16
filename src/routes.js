import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import App from 'containers/App';
import Dashboard from 'containers/Dashboard';
import Entity from 'containers/Entity';
import Settings from 'containers/Settings';

import EntityList from 'components/EntityFlow/List';
import EntityAddForm from 'components/EntityFlow/AddForm';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Dashboard } />
    <Route path="dashboard" component={ Dashboard } />
    <Route path="entities/:category" component={ Entity }>
      <IndexRedirect to="all" />
      <Route path=":type">
        <IndexRoute component={ EntityList } />
        <Route path="new" component={ EntityAddForm }/>
      </Route>
    </Route>
    <Route path="settings" component={ Settings } />
  </Route>
);

// export default [{
//   path: '/',
//   component: App,
//   indexRoute: {
//     component: Dashboard,
//   },
//   childRoutes: [{
//     path: 'entities/:category(/:type)',
//     component: Entity,
//     indexRoute: {
//       component: EntityList,
//     },
//     childRoutes: [{
//       path: 'new',
//       component: EntityAddForm,
//     }],
//   }, {
//     path: 'settings',
//     component: Settings,
//   }],
// }];
