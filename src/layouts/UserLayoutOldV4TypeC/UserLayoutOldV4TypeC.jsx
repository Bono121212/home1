import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import ResponsiveContainer from './ResponsiveContainerUser';
import './UserLayoutOldV4TypeC.css';

class UserLayoutOldV4TypeC extends Component {

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

export default UserLayoutOldV4TypeC;
