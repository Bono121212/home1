import React from 'react';
import PropTypes from 'prop-types';

import TeacherHeader from "../TeacherHeader/TeacherHeader";
import TeacherFooter from "../TeacherFooter/TeacherFooter";
//import Quick from "../Quick/Quick";


const ResponsiveContainerUser = ({children}) => (
    <>
        <TeacherHeader/>
        {children}
        <TeacherFooter/>
    </>
);

ResponsiveContainerUser.propTypes = {
    children: PropTypes.node,
};

export default ResponsiveContainerUser;
