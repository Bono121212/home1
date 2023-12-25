import React from "react";
import { Sticky, Menu } from 'semantic-ui-react'
import { Link, NavLink } from "react-router-dom";

const handleItemClick = (e, {name}) => this.setState({activeItem: name})
const activeItem = 'certificationIntroduction';

export function MenuKo () {
    return (
        <Sticky className='tab-menu2 offset0'>
            <div className="cont-inner">
                <Menu className='sku2'>
                    <Menu.Item
                        name='suniIntroduction'
                        active={activeItem === 'suniIntroduction'}
                        onClick={handleItemClick}
                        as={Link} to="/introduction/all-introduction"
                    >
                        mySUNI 소개
                    </Menu.Item>
                    <Menu.Item
                        name='collegeIntroduction'
                        active={activeItem === 'collegeIntroduction'}
                        onClick={handleItemClick}
                        as={Link} to="/introduction/college-introduction"
                    >
                        Category 소개
                    </Menu.Item>
                    <Menu.Item
                        name='certificationIntroduction'
                        active={activeItem === 'certificationIntroduction'}
                        onClick={handleItemClick}
                        as={Link} to="/introduction/certification-system-introduction-v2"
                    >
                        인증제도 소개
                    </Menu.Item>
                    <Menu.Item
                        name='promotion-data'
                        active={activeItem === 'promotion-data'}
                        onClick={handleItemClick}
                        as={Link} to="/introduction/promotion-data"
                    >
                        홍보자료
                    </Menu.Item>
                    <NavLink
                        as={Link} to='/'
                    >
                        <div className='item-button round'>Certification 바로가기</div>
                    </NavLink>
                </Menu>
            </div>
        </Sticky>
    )
}

export function MenuEn () {
    return(
        <Sticky className='tab-menu2 offset0'>
            <div className="cont-inner">
                <Menu className='sku2'>
                    <Menu.Item
                        name='suniIntroduction'
                        active={activeItem === 'suniIntroduction'}
                        onClick={handleItemClick}
                        as={Link} to="/introduction/all-introduction"
                    >
                        mySUNI Introduction
                    </Menu.Item>
                    <Menu.Item
                        name='collegeIntroduction'
                        active={activeItem === 'collegeIntroduction'}
                        onClick={handleItemClick}
                        as={Link} to="/introduction/college-introduction"
                    >
                        Category Introduction
                    </Menu.Item>
                    <Menu.Item
                        name='certificationIntroduction'
                        active={activeItem === 'certificationIntroduction'}
                        onClick={handleItemClick}
                        as={Link} to="/introduction/certification-system-introduction"
                    >
                        Certification System Introduction
                    </Menu.Item>
                    <Menu.Item
                        name='promotion-data'
                        active={activeItem === 'promotion-data'}
                        onClick={handleItemClick}
                        as={Link} to="/introduction/promotion-data"
                    >
                        Promotional Materials
                    </Menu.Item>
                    <NavLink
                        as={Link} to='/'
                    >
                        <div className='item-button round'>Go to Certification</div>
                    </NavLink>
                </Menu>
            </div>
        </Sticky>
    )
}

export function MenuZh () {
    return(
        <Sticky className='tab-menu2 offset0'>
            <div className="cont-inner">
                <Menu className='sku2'>
                    <Menu.Item
                        name='suniIntroduction'
                        active={activeItem === 'suniIntroduction'}
                        onClick={handleItemClick}
                        as={Link} to="/introduction/all-introduction"
                    >
                        mySUNI介绍
                    </Menu.Item>
                    <Menu.Item
                        name='collegeIntroduction'
                        active={activeItem === 'collegeIntroduction'}
                        onClick={handleItemClick}
                        as={Link} to="/introduction/college-introduction"
                    >
                        Category介绍
                    </Menu.Item>
                    <Menu.Item
                        name='certificationIntroduction'
                        active={activeItem === 'certificationIntroduction'}
                        onClick={handleItemClick}
                        as={Link} to="/introduction/certification-system-introduction"
                    >
                        认证制度介绍
                    </Menu.Item>
                    <Menu.Item
                        name='promotion-data'
                        active={activeItem === 'promotion-data'}
                        onClick={handleItemClick}
                        as={Link} to="/introduction/promotion-data"
                    >
                        宣传资料
                    </Menu.Item>
                    <NavLink
                        as={Link} to='/'
                    >
                        <div className='item-button round'>进入Certification</div>
                    </NavLink>
                </Menu>
            </div>
        </Sticky>
    )
}