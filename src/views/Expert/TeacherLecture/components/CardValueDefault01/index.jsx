import React, {Component, } from 'react'
import { Button, Label, Card, Image } from 'semantic-ui-react'

import CardThumbImg from '../../../../../images/all/bg_img2.png';

class CardValueDefault01 extends Component {
    constructor() {
        super();
        this.state = {
            isHovered: false
        };
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(isHovered) {
        this.setState({isHovered});
    }

    render() {
        const activeClass = this.state.isHovered ? 'on' : '';
        return (
            <Card className={`card-item card-item-01 ${activeClass}`} onMouseEnter={() => this.handleHover(true)}
                  onMouseLeave={() => this.handleHover(false)}>
                <div className="bookmark-wrap">
                    <Button icon className="icon-bookmark on"></Button>
                </div>
                <div className="card-inner">
                    <div className="thumbnail-area">
                        <div className="thumb-img-area">
                            <Image src={CardThumbImg} className="thumb-img" alt="프로필 이미지" />
                        </div>
                        <div className="thumb-info top">
                            <div className="txticon-wrap">
                                <Label className='end'><div className="custom-icon icon-user-white"></div><span>정원 초과</span></Label>
                            </div>
                        </div>
                        <div className="thumb-info bottom">
                            <Label><span>59m</span></Label>
                        </div>
                    </div>
                    <div className="contents-area">
                        <div className="title-area">
                            <div className="status">
                                <Label className="college-name"><span>혁신디자인</span></Label>
                                <Label className="my-stat completed"><span>학습완료</span></Label>
                            </div>
                            <div className="header">[학습안내] '고객중심 Biz 만들기' 학습전 필독!</div>
                        </div>
                        <div className="icon-area txticon-wrap bottom">
                            <div className="f-left">
                                <Label>
                                    <div className="custom-icon icon-user"></div><span>9만 +</span>
                                </Label>
                            </div>
                            {/* 2021-12 별점 복구 */}
                            <div className="f-right">
                                <Label>
                                    <div className="custom-icon icon-star"></div><span>4.9</span>
                                </Label>
                                {/* <Label>
                                    <div className="fb-tt">
                                        <Icon className="like-18-px"/>
                                        <span>만족</span>
                                        <span>72.34%</span>
                                    </div>
                                </Label> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hover-content">
                    <div className="thumb-img-area">
                        <Image src={CardThumbImg} className="thumb-img" alt="프로필 이미지" />
                    </div>
                    <div className="hover-content-inner">
                        <div className="lang-wrap">
                            <ul className="lang-list">
                                <li><span>KOR</span></li>
                                <li><span>CHN</span></li>
                                <li><span>ENG</span></li>
                            </ul>
                        </div>
                        <div className="text-wrap">
                            <p className="text-area">
                            현업의 기술을 고객(사)의 관점에서 바라보고, 새로운 비즈니스로 구체화하는 방법을 학습합니다.
                            </p>
                        </div>
                        <div className="icon-area txticon-wrap bottom">
                            <div>
                                <Label>
                                    <div className="custom-icon icon-grade"></div><span>Intermediate</span>
                                </Label>
                            </div>
                            <div>
                                <Label>
                                    <div className="custom-icon icon-badge"></div><span>Badge</span>
                                </Label>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}


export default CardValueDefault01