import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import EntityFlow from 'components/EntityFlow';

class EntityContainer extends Component {
  getSidebarItems() {
    if (this.props.params.category === 'inventory') {
      return [
        {
          title: 'All',
          to: '/entities/inventory/all',
        },
        {
          title: 'Vehicles',
          to: '/entities/inventory/vehicles',
        }, {
          title: 'Motors',
          to: '/entities/inventory/motors',
        }, {
          title: 'ESCs',
          to: '/entities/inventory/escs',
        }, {
          title: 'Transmitters',
          to: '/entities/inventory/transmitters',
        }, {
          title: 'Receivers',
          to: '/entities/inventory/receivers',
        },
      ];
    }

    return [
      {
        title: 'All',
        to: '/entities/logs/all',
      },
      {
        title: 'Run',
        to: '/entities/logs/run',
      }, {
        title: 'Maintenance',
        to: '/entities/logs/maintenance',
      },
    ];
  }

  static mapStateToProps(state) {
    return {
      userEntities: state.userEntities.all,
    };
  }

  render() {
    const { userEntities, params, children } = this.props;

    return (
      <EntityFlow
        secondarySidebarItems={ this.getSidebarItems() }
        userEntities={ userEntities }
        category={ params.category }
        type={ params.type }
      >
        { children }
      </EntityFlow>
    );
  }
}

EntityContainer.propTypes = {
  params: PropTypes.object,
  userEntities: PropTypes.array,
};

export default connect(
  EntityContainer.mapStateToProps
)(
  EntityContainer
);
