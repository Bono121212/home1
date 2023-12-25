import React, {Component} from 'react'
import { Button, Label, Card, Image } from 'semantic-ui-react'

import CardThumbImg from '../../../../../images/all/image-zoom-sample.png';

class CardValueDefault04 extends Component {
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
            <Card className={`card-item ${activeClass}`} onMouseEnter={() => this.handleHover(true)}
                  onMouseLeave={() => this.handleHover(false)}>
                <div className="bookmark-wrap">
                    <Button icon className="icon-bookmark"></Button>
                </div>
                <div className="card-inner">
                    <div className="thumbnail-area">
                        <div className="thumb-img-area">
                            <Image src={CardThumbImg} className="thumb-img" alt="프로필 이미지" />
                        </div>
                        <div className="thumb-info top">
                            <div className="txticon-wrap">
                                
                            </div>
                        </div>
                        <div className="thumb-info bottom">
                            <Label><span>1h 30m</span></Label>
                        </div>
                    </div>
                    <div className="contents-area">
                        <div className="title-area">
                            <div className="status">
                                <Label className="college-name"><span>미래반도체</span></Label>
                                <Label className="my-stat learning"><span>학습중</span></Label>
                            </div>
                            <div className="header">Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp</div>
                        </div>
                        <div className="icon-area txticon-wrap bottom">
                            <div className="f-left">
                                <Label>
                                    <div className="custom-icon icon-user"></div><span>3,300</span>
                                </Label>
                            </div>
                            <div className="f-right">
                                <Label>
                                    <div className="custom-icon icon-star"></div><span>4.9</span>
                                </Label>
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
                            반도체 Tech의 핵심 개념과 기술 용어를 각 주제별로 쉽고 간결하게 설명해주는 온라인 지식백과 Course 입니다. 본 과정을 통해 반도체에서 다루는 주요 개념과 용어를 학습하여, 반도체 Tech. 학습의 기초를 다질 수 있습니다. (각 영상 4~5분) ※ 강사 : SK하이닉스 박성원 TL, 서민석 TL, 신홍섭 TL, 임정빈 TL, 정승규 TL
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


export default CardValueDefault04