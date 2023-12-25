import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import ResponsiveContainerCareer from './ResponsiveContainerCareer';
import './UserLayout.css';
import '../UserLayout/UserLayout.css'

class UserHeaderNewSearchCareer extends Component {

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={(matchProps) => (
        <ResponsiveContainerCareer>
            <Component {...matchProps} />
        </ResponsiveContainerCareer>
      )} />
    );
  }
}

export default UserHeaderNewSearchCareer;
