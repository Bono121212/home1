import React, { Component, createRef } from 'react';
import { Sticky, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { TabMenuInner } from "./components";

class CategoryIntroductionV2Eng extends Component {
    contextRef = createRef()
    state = { activeItem: 'collegeIntroduction' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <section className='bg-white content introduction v2 eng'>
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
                                    mySUNI Introduction
                                </Menu.Item>
                                <Menu.Item
                                    name='collegeIntroduction'
                                    active={activeItem === 'collegeIntroduction'}
                                    onClick={this.handleItemClick}
                                    as={Link} to="/introduction/category-introduction-v2-eng"
                                >
                                    Category Introduction
                                </Menu.Item>
                                <Menu.Item
                                    name='certificationIntroduction'
                                    active={activeItem === 'certificationIntroduction'}
                                    onClick={this.handleItemClick}
                                    as={Link} to="/introduction/certification-system-introduction"
                                >
                                    Certification System Introduction
                                </Menu.Item>
                                <Menu.Item
                                    name='promotion-data'
                                    active={activeItem === 'promotion-data'}
                                    onClick={this.handleItemClick}
                                    as={Link} to="/introduction/promotion-data"
                                >
                                    Promotional Materials
                                </Menu.Item>
                            </Menu>
                        </div>
                    </Sticky>

                    <div className="ui attached tab" data-tab="first">

                    </div>
                    <div className="ui attached tab active" data-tab="second">
                        <TabMenuInner />
                    </div>
                    <div className="ui bottom tab full segment" data-tab="third">

                    </div>
                </div>
            </section>
        )
    }
};
export default CategoryIntroductionV2Eng;
