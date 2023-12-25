import React from 'react';
import PropTypes from 'prop-types';
import UserHeader from "../UserHeader/UserHeader";
import UserFooter from '../UserFooter/UserFooter';

const ResponsiveContainerUser = ({children}) => (
    <>
        <UserHeader/>
        {children}
        <UserFooter/>
    </>
);
ResponsiveContainerUser.propTypes = {
    children: PropTypes.node,
};
export default ResponsiveContainerUser;
