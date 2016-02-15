import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import App from 'components/App';
import ActivityIndicator from 'components/ActivityIndicator';

class AppContainer extends Component {

  static mapStateToProps(state) {
    return {
      application: state.application,
    };
  }

  render() {
    const { children, application } = this.props;

    return (
      <div>
        <App>
          { children }
        </App>
        <ActivityIndicator activities={ application.activities } />
      </div>
    );
  }
}

AppContainer.propTypes = {
  application: PropTypes.object,
  location: PropTypes.object,
};

export default connect(
  AppContainer.mapStateToProps
)(
  AppContainer
);
