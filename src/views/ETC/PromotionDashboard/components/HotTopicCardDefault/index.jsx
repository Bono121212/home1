import React, { Component } from 'react'
import { Icon, Card, Image, Label } from 'semantic-ui-react'
import CardThumbImg from '../../../../../images/all/bg-topiccard1.png';

class HopTopicCardDefault extends Component {
    render() {
        return (
            <Card className="topic-item" href="#none">
                <div className="thumb-img-area">
                    <Image src={CardThumbImg} className="thumb-img" alt="프로필 이미지" />
                </div>
                <div className="card-inner">
                    <div className="topic-tit"><span>새롭게 리더가 되신 분들을 위한 과정</span></div>
                    <div className="topic-info-wrap">
                        <Label className="topic-info course">
                            <Icon className="coreses-wht"/><span>총 <strong>16개</strong> 학습카드</span>
                        </Label>
                        <Label className="topic-info time">
                            <Icon className="card-time-wht"/><span>13h 30m</span>
                        </Label>
                    </div>
                </div>
            </Card>
        )
    }
}

export default HopTopicCardDefault