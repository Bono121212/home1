import React from 'react';
import PropTypes from 'prop-types';
import UserHeaderCareer from "../UserHeaderCareer/UserHeaderCareer";
import UserFooter from '../UserFooter/UserFooter';

const ResponsiveContainerCareer = ({children}) => (
    <>
        <UserHeaderCareer/>
        {children}
        <UserFooter/>
    </>
);
ResponsiveContainerCareer.propTypes = {
    children: PropTypes.node,
};
export default ResponsiveContainerCareer;
