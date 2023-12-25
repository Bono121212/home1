import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import ResponsiveContainer from './ResponsiveContainerUser';
import './UserLayout.css';
import '../UserLayout/UserLayout.css'

class UserLayoutMain extends Component {

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

export default UserLayoutMain;
