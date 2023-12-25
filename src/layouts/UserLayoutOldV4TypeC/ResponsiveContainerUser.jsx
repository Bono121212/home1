import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    Responsive,
} from 'semantic-ui-react';

import UserHeader from "../UserHeaderOldV4TypeC/UserHeaderOldV4TypeC";
import UserFooter from "../UserFooterOld/UserFooterOld";
import Quick from "../Quick/Quick";


const ResponsiveContainerUser = ({children}) => (
    <>
        <DesktopContainer>{children}</DesktopContainer>
        <TabletContainer>{children}</TabletContainer>
        <MobileContainer>{children}</MobileContainer>
    </>
);

ResponsiveContainerUser.propTypes = {
    children: PropTypes.node,
};

// DesktopContainer
class DesktopContainer extends Component {

    render() {
        const {children} = this.props;

        return (
            <Responsive {...Responsive.onlyComputer}>
                <UserHeader/>
                {children}
                <Quick/>
                <UserFooter/>
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
};


// TabletContainer
class TabletContainer extends Component {

    render() {
        const {children} = this.props;

        return (
            <Responsive {...Responsive.onlyTablet}>
                <UserHeader/>
                {children}
                <Quick/>
                <UserFooter/>
            </Responsive>
        )
    }
}

TabletContainer.propTypes = {
    children: PropTypes.node,
};


// MobileContainer
class MobileContainer extends Component {

    render() {
        const {children} = this.props;

        return (
            <Responsive {...Responsive.onlyMobile}>
                <UserHeader/>
                {children}
                <Quick/>
                <UserFooter/>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
};

export default ResponsiveContainerUser;
