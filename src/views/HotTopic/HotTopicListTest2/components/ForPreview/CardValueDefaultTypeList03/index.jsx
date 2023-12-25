import React, {Component} from 'react'
import { Icon, Label, Card, Image } from 'semantic-ui-react'

import CardThumbImg from '../../../../../../images/all/bg_img3.png';

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
                                <Label className="college-name"><span>Global</span></Label>
                                <div className="topic-card-title">[지정학적 변화진단] 포스트 코로나, 새로운 질서의 시작</div>
                                <div className="tipic-card-txt">신종 코로나바이러스 감염증(COVID-19) 발병 5개월, '총성 없는 3차 세계대전' 코로나19 팬데믹으로 인해 인류의 삶은 어떻게 변화할 것인가?</div>
                            </div>
                            <div className="icon-area txticon-wrap">
                                <Label><Icon className="custom-icon icon-user"/><span>1만</span></Label>
                                <Label><Icon className="custom-icon icon-star"/><span>3.9</span></Label>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}


export default CardValueDefaultTypeList