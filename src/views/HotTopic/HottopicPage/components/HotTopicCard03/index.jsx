import React, { Component } from 'react'
import { Icon, Card, Image, Label } from 'semantic-ui-react'
import CardThumbImg from '../../../../../images/all/bg-topiccard3.png';

class HopTopicCardDefault extends Component {
    render() {
        return (
            <Card className="topic-item" href="#none">
                <div className="thumb-img-area">
                    <Image src={CardThumbImg} className="thumb-img" alt="프로필 이미지" />
                </div>
                <div className="card-inner">
                    {/* hottopic new 표시 */}
                    {/* <div className="topic-label">
                        <strong className='new-topic-label'>NEW</strong>
                    </div> */}
                    <div className="topic-tit"><span>최신 Trend와 AI 기초 파악하기</span></div>
                    <div className="topic-info-wrap">
                        <Label className="topic-info course">
                            <Icon className="coreses-wht"/><span>총 <strong>8개</strong> 학습카드</span>
                        </Label>
                        <Label className="topic-info time">
                            <Icon className="card-time-wht"/><span>120h 30m</span>
                        </Label>
                    </div>
                </div>
            </Card>
        )
    }
}

export default HopTopicCardDefault