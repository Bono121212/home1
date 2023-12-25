import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UserHeader from "../UserHeaderMain/UserHeaderMain";
import UserFooter from "../UserFooter/UserFooter";
import OverviewInquery from '../../views/Learning/_Components/OverviewInquery';

const ResponsiveContainerUser = ({children}) => {
    const [scrollBottomValue, setScrollBottomValue] = useState(0);
    useEffect(() => {
        // 스크롤링 이벤트
        const onScroll = () => {
            // setScrollBottomValue(document.documentElement.clientHeight - document.querySelector('.footer').getBoundingClientRect().top);
            setScrollBottomValue(0);
        };
        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onScroll);
        onScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        }
    }, []);
    return (
        <>
            <UserHeader/>
            {children}
            <UserFooter/>
            <OverviewInquery scrollBottom={scrollBottomValue} />
        </>
    )
}
ResponsiveContainerUser.propTypes = {
    children: PropTypes.node,
};
export default ResponsiveContainerUser;
