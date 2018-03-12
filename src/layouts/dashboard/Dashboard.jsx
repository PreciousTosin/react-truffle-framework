/* eslint react/prop-types: 'off', react/no-unescaped-entities: 'off',
no-param-reassign: 'off', no-unused-vars: 'off' */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.authData = this.props.authData;
  }

  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p>
              <strong>Congratulations {this.props.authData.name}!</strong>
              If you're seeing this page, you've logged in with your own smart
              contract successfully.
            </p>
          </div>
        </div>
      </main>
    );
  }
}

// export default Dashboard;
export default connect(state => ({ authData: state.user.data }))(Dashboard);
