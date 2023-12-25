import React, {Component} from 'react'
import { Segment, Button, Icon, Menu } from 'semantic-ui-react'
import {CardListGroup} from '../../../CardListSample';
import ListHeaderSection from '../ListHeaderSection';
import {Link} from 'react-router-dom'
import Swiper from 'react-id-swiper';

class ContentsArea extends Component {
    state ={activeItem : 'All'}
    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {

        const {activeItem} = this.state
        const params = {
            threshold: 10,
            freeMode: true,
            resistance: true,
            resistanceRatio:false,
            slidesPerView : 'auto',
            slideToClickedSlide : true,
            navigation: {
                nextEl: '.tab-slide-buttons .swiper-button-next',
                prevEl: '.tab-slide-buttons .swiper-button-prev'
            },
        }
        return (
            <div className='page-bottom-area'>
                <div className='category-tab'>
                    <div className='inner'>
                        <div className='tab-menu'>
                            <div className='cont-inner'>
                                <div className='swiper-container'>
                                    <Menu className='sku cate-tab'>
                                        <Swiper {...params}>
                                            <div className='swiper-slide'>
                                                <Menu.Item
                                                    name='All'
                                                    active={activeItem === 'All'}
                                                    onClick={this.handleItemClick}
                                                    to='#none'
                                                    as={Link}
                                                >
                                                    전체
                                                </Menu.Item>
                                            </div>
                                            <div className='swiper-slide'>
                                                <Menu.Item
                                                    name='Executive AI/DT'
                                                    active={activeItem === 'Executive AI/DT'}
                                                    onClick={this.handleItemClick}
                                                    to='#none'
                                                    as={Link}
                                                >
                                                    Executive AI/DT
                                                </Menu.Item>
                                            </div>
                                            <div className='swiper-slide'>
                                                <Menu.Item
                                                    name='AI/DT Literacy'
                                                    active={activeItem === 'AI/DT Literacy'}
                                                    onClick={this.handleItemClick}
                                                    to='#none'
                                                    as={Link}
                                                >
                                                    AI/DT Literacy
                                                </Menu.Item>
                                            </div>
                                            <div className='swiper-slide'>
                                                <Menu.Item
                                                    name='AI Biz. Implementation'
                                                    active={activeItem === 'AI Biz. Implementation'}
                                                    onClick={this.handleItemClick}
                                                    to='#none'
                                                    as={Link}
                                                >
                                                    AI Biz. Implementation
                                                </Menu.Item>
                                            </div>
                                            <div className='swiper-slide'>
                                                <Menu.Item
                                                    name='AI Trend Watch'
                                                    active={activeItem === 'AI Trend Watch'}
                                                    onClick={this.handleItemClick}
                                                    to='#none'
                                                    as={Link}
                                                >
                                                    AI Trend Watch
                                                </Menu.Item>
                                            </div>
                                            <div className='swiper-slide'>
                                                <Menu.Item
                                                    name='AI Technologies'
                                                    active={activeItem === 'AI Technologies'}
                                                    onClick={this.handleItemClick}
                                                    to='#none'
                                                    as={Link}
                                                >
                                                    AI Technologies
                                                </Menu.Item>                                            
                                            </div>
                                        </Swiper>
                                    </Menu>
                                </div>
                                <div className='tab-slide-buttons'>
                                    <Button className='swiper-button-prev'><Icon className='prev-on'/></Button>
                                    <Button className='swiper-button-next'><Icon className='next-on'/></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Segment className='full'>
                    <div className="college-detail">
                        <div className="cont-wrap">
                            <ListHeaderSection/>
                            <div className="section">
                                <CardListGroup/>
                                <div className="more-comments">
                                    <Button icon className="left moreview">
                                        <Icon className="moreview"/>list more
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
