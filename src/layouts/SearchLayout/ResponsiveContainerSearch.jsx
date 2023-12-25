import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import {
    Responsive,
    Sidebar,
    Button,
    Menu,
    Icon,
    Image,
    Breadcrumb,
} from 'semantic-ui-react';

import SearchHeader from "../SearchHeader/SearchHeader";
import UserFooter from "../UserFooter/UserFooter";
import Quick from "../Quick/Quick";
import MenuSection from "./MenuSection";


const ResponsiveContainerSearch = ({children}) => (
    <>
        <DesktopContainer>{children}</DesktopContainer>
        <TabletContainer>{children}</TabletContainer>
        <MobileContainer>{children}</MobileContainer>
    </>
);

ResponsiveContainerSearch.propTypes = {
    children: PropTypes.node,
};

// DesktopContainer
class DesktopContainer extends Component {

    render() {
        const {children} = this.props;

        return (
            <Responsive {...Responsive.onlyComputer}>
                <SearchHeader/>
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
                <SearchHeader/>
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
                <SearchHeader/>
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

export default ResponsiveContainerSearch;
