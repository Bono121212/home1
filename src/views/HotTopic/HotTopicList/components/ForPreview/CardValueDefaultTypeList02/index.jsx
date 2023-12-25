import React, {Component} from 'react'
import { Icon, Label, Card, Image } from 'semantic-ui-react'

import CardThumbImg from '../../../../../../images/all/bg_img2.png';

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
                            <Label><span><strong>5개</strong> 과정</span></Label>
                        </div>
                    </div>
                    <div className="contents-area">
                        <div className="contents-inner">
                            <div className="topic-card-tit">
                                <Label className="college-name"><span>혁신디자인</span></Label>
                                <div className="topic-card-title">[학습안내] '고객중심 Biz 만들기' 학습전 필독!</div>
                                <div className="tipic-card-txt">현업의 기술을 고객(사)의 관점에서 바라보고, 새로운 비즈니스로 구체화하는 방법을 학습합니다.</div>
                            </div>
                            <div className="icon-area txticon-wrap">
                                <Label><Icon className="custom-icon icon-user"/><span>9만 +</span></Label>
                                {/* 2021-12 별점 원복*/}
                                <Label><Icon className="custom-icon icon-star"/><span>-</span></Label>
                                {/* <Label><Icon className="like-18-px"/><span>만족 -</span></Label> */}
                                <Label className="my-stat learning"><span>학습중</span></Label>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}


export default CardValueDefaultTypeList