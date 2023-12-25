import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import ResponsiveContainer from './ResponsiveContainerUser';
import './UserLayoutOldV4Global.css';

class UserLayoutOldV4Global extends Component {

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

export default UserLayoutOldV4Global;
