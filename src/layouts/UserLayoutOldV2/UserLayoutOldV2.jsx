import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import ResponsiveContainer from './ResponsiveContainerUser';
import './UserLayoutOldV2.css';

class UserLayoutOldV2 extends Component {

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={(matchProps) => (
        <ResponsiveContainer>
            <Component {...matchProps} />
        </ResponsiveContainer>
      )} />
    );
  }
}

export default UserLayoutOldV2;
