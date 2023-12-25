import React, {Component} from 'react'
import { Icon,  Label, Card, Image } from 'semantic-ui-react'

import CardThumbImg from '../../../../../../images/all/bg_img4.png';

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
                            <Label><span><strong>11개</strong> 과정</span></Label>
                        </div>
                    </div>
                    <div className="contents-area">
                        <div className="contents-inner">
                            <div className="topic-card-tit">
                                <Label className="college-name"><span>행복</span></Label>
                                <div className="topic-card-title">긍정습관 만들기</div>
                                <div className="tipic-card-txt">신종 코로나바이러스 감염증(COVID-19) 발병 5개월, '총성 없는 3차 세계대전' 코로나19 팬데믹으로 인해 인류의 삶은 어떻게 변화할 것인가?</div>
                            </div>
                            <div className="icon-area txticon-wrap">
                                <Label><Icon className="custom-icon icon-user"/><span>1,188</span></Label>
                                <Label><Icon className="custom-icon icon-star"/><span>4.3</span></Label>
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