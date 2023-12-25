import React from 'react';
import PropTypes from 'prop-types';
import UserHeader from "../UserHeader/UserHeader";

const ResponsiveContainerUser = ({children}) => {
    return (
        <>
            <UserHeader/>
            {children}
        </>
    )
}
ResponsiveContainerUser.propTypes = {
    children: PropTypes.node,
};
export default ResponsiveContainerUser;
