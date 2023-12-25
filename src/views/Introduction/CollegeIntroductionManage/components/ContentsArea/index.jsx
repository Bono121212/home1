import React, {Component, createRef} from 'react'
import {
    Sticky,
    Menu
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import TabMenuInner from '../TabMenuInner'

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'collegeIntroduction'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu2 offset0'>
                    <div className="cont-inner">
                        <Menu className='sku2'>
                            <Menu.Item
                                name='suniIntroduction'
                                active={activeItem === 'suniIntroduction'}
                                onClick={this.handleItemClick}
                                as={Link} to="/introduction/all-introduction"
                            >
                                mySUNI 소개
                            </Menu.Item>
                            <Menu.Item
                                name='collegeIntroduction'
                                active={activeItem === 'collegeIntroduction'}
                                onClick={this.handleItemClick}
                                as={Link} to="/introduction/college-introduction"
                            >
                                Category 소개
                            </Menu.Item>
                            <Menu.Item
                                name='certificationIntroduction'
                                active={activeItem === 'certificationIntroduction'}
                                onClick={this.handleItemClick}
                                as={Link} to="/introduction/certification-system-introduction"
                            >
                                인증제도 소개
                            </Menu.Item>
                            <Menu.Item
                                name='promotion-data'
                                active={activeItem === 'promotion-data'}
                                onClick={this.handleItemClick}
                                as={Link} to="/introduction/promotion-data"
                            >
                                홍보자료
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>

                <div className="ui attached tab" data-tab="first">

                </div>

                <div className="ui attached tab active" data-tab="second">
                    <TabMenuInner/>
                </div>

                <div className="ui bottom tab full segment" data-tab="third">

                </div>
            </div>
        )
    }
}


export default ContentsArea
