import React, {Component} from 'react'
import { Segment, Button, Icon, Menu } from 'semantic-ui-react'
import {CardListGroup} from '../../../CardListSample';
import ListHeaderSection from '../ListHeaderSection';
import {Link} from 'react-router-dom'
import Swiper from 'react-id-swiper';

class ContentsArea extends Component {
    state ={activeItem : 'Corporate Management/Strategy'}
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
                                                    name='Corporate Management/Strategy'
                                                    active={activeItem === 'Corporate Management/Strategy'}
                                                    onClick={this.handleItemClick}
                                                    to='#none'
                                                    as={Link}
                                                >
                                                    기업 경영/전략
                                                </Menu.Item>
                                            </div>
                                            <div className='swiper-slide'>
                                                <Menu.Item
                                                    name='Marketing/Brand'
                                                    active={activeItem === 'Marketing/Brand'}
                                                    onClick={this.handleItemClick}
                                                    to='#none'
                                                    as={Link}
                                                >
                                                    마케팅/브랜드
                                                </Menu.Item>
                                            </div>
                                            <div className='swiper-slide'>
                                                <Menu.Item
                                                    name='Finance/Accounting'
                                                    active={activeItem === 'Finance/Accounting'}
                                                    onClick={this.handleItemClick}
                                                    to='#none'
                                                    as={Link}
                                                >
                                                    재무 회계
                                                </Menu.Item>
                                            </div>
                                            <div className='swiper-slide'>
                                                <Menu.Item
                                                    name='HR/Organizational Structure'
                                                    active={activeItem === 'HR/Organizational Structure'}
                                                    onClick={this.handleItemClick}
                                                    to='#none'
                                                    as={Link}
                                                >
                                                    HR/Organizational Structure
                                                </Menu.Item>
                                            </div>
                                            <div className='swiper-slide'>
                                                <Menu.Item
                                                    name='Legal'
                                                    active={activeItem === 'Legal'}
                                                    onClick={this.handleItemClick}
                                                    to='#none'
                                                    as={Link}
                                                >
                                                    법무
                                                </Menu.Item>                                            
                                            </div>
                                            <div className='swiper-slide'>
                                                <Menu.Item
                                                    name='IP'
                                                    active={activeItem === 'IP'}
                                                    onClick={this.handleItemClick}
                                                    to='#none'
                                                    as={Link}
                                                >
                                                    IP
                                                </Menu.Item>                                            
                                            </div>
                                            <div className='swiper-slide'>
                                                <Menu.Item
                                                    name='SCM/Operation'
                                                    active={activeItem === 'SCM/Operation'}
                                                    onClick={this.handleItemClick}
                                                    to='#none'
                                                    as={Link}
                                                >
                                                    SCM/Operation
                                                </Menu.Item>
                                            </div>
                                            <div className='swiper-slide'>
                                                <Menu.Item
                                                    name='Competency'
                                                    active={activeItem === 'Competency'}
                                                    onClick={this.handleItemClick}
                                                    to='#none'
                                                    as={Link}
                                                >
                                                    Competency(Working Smart)
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
                        <div className='sub-tab'>
                            <div className='inner'>
                                <Button onClick={this.handleClick} className='toggleline active'>전체</Button>
                                <Button onClick={this.handleClick} className='toggleline '>마케팅 Essentials</Button>
                                <Button onClick={this.handleClick} className='toggleline '>브랜드 Essentials</Button>
                                <Button onClick={this.handleClick} className='toggleline '>리더십</Button>
                                <Button onClick={this.handleClick} className='toggleline '>여행</Button>
                                <Button onClick={this.handleClick} className='toggleline '>스포츠/레저</Button>
                                <Button onClick={this.handleClick} className='toggleline '>취미생활</Button>
                                <Button onClick={this.handleClick} className='toggleline '>마케팅</Button>
                                <Button onClick={this.handleClick} className='toggleline '>건강/다이어트</Button>
                                <Button onClick={this.handleClick} className='toggleline '>Biz. Acumen (for all)</Button>
                                <Button onClick={this.handleClick} className='toggleline '>에너지솔루션</Button>
                                <Button onClick={this.handleClick} className='toggleline '>전략기획</Button>
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
