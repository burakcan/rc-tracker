import React, { Component, PropTypes } from 'react';
import Dashboard from 'components/Dashboard';
import { connect } from 'react-redux';

class DashboardContainer extends Component {
  static mapStateToProps(state) {
    return {
      weather: state.weather,
    };
  }

  render() {
    return <Dashboard weather={ this.props.weather } />;
  }
}

DashboardContainer.propTypes = {
  weather: PropTypes.object,
};

export default connect(
  DashboardContainer.mapStateToProps
)(
  DashboardContainer
);
