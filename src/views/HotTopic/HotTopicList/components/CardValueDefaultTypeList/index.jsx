import React, {Component} from 'react'
import { Icon, Label, Card, Image } from 'semantic-ui-react'

import CardThumbImg from '../../../../../images/all/bg_img1.png';

class CardValueDefaultTypeList extends Component {

    render() {

        return (
            <Card className="card-item topic-list">
                <div className="card-inner">
                    <div className="thumbnail-area">
                        <div className="thumb-img-area">
                            <Image src={CardThumbImg} className="thumb-img" alt="프로필 이미지" />
                        </div>
                        <div className="thumb-info bottom">
                            <Label><span>2h 30m</span></Label>
                        </div>
                    </div>
                    <div className="contents-area">
                        <div className="contents-inner">
                            <div className="topic-card-tit">
                                <Label className="college-name"><span>미래반도체</span></Label>
                                <div className="topic-card-title">Introduction - 잘 나가던 기업의 몰락 이유</div>
                                <div className="tipic-card-txt">VUCA 환경 속에서, 기존의 전통적 신사업 전략과는 다른 애자일 방식의 전반적인 개념에 대해 살펴봅니다.</div>
                            </div>
                            <div className="icon-area txticon-wrap">
                                <Label><Icon className="custom-icon icon-user"/><span>3,300</span></Label>
                                {/* 2021-12 별점 원복*/}
                                <Label><Icon className="custom-icon icon-star"/><span>4.9</span></Label>
                                {/* <Label><Icon className="like-18-px"/><span>만족 96%</span></Label> */}
                                <Label className="my-stat completed"><span>학습완료</span></Label>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}


export default CardValueDefaultTypeList