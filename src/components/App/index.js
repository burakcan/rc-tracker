import React from 'react';
import Sidebar from 'components/Sidebar';
import Pane from 'components/ui/Pane';
import './style';

export default function (props) {
  return (
    <Pane fullScreen>
      <Pane width="200px">
        <Sidebar items={[
          {
            title: 'DASHBOARD',
            to: '/',
            icon: 'dashboard',
            isIndex: true,
          }, {
            title: 'INVENTORY',
            to: '/entities/inventory/all',
            icon: 'inventory',
          }, {
            title: 'LOGS',
            to: '/entities/logs/all',
            icon: 'logs',
          }, {
            title: 'SETTINGS',
            to: '/settings',
            icon: 'settings',
          },
        ]}
        />
      </Pane>
      <Pane size="1">
        { props.children }
      </Pane>
    </Pane>
  );
}
