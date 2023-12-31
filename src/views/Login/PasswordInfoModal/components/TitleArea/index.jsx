import React, {Component} from 'react'
import { Image, Label, Icon } from 'semantic-ui-react'

class TitleArea extends Component {
    render() {
        return (
            <div className="main-info-area">
                <div className="main-info-wrap">
                    {/*썸네일*/}
                    <div className="thumbnail">
                        <Image src='http://placehold.it/70x70' alt='임시이미지' size='small'/>
                    </div>
                    <div className="title-area">
                        <Label color='blue'>Leadership</Label>
                        <div className="header">Open Source를 활용한 Big Data 기반 플랫폼을 이용한 데이터 분석</div>
                        <div className="deatil">
                            <div className="item">
                                <Label className='bold onlytext'>
                                    <Icon className='video2'/><span>Classroom</span>
                                </Label>
                                <span className="channel">Leading Myself</span>
                            </div>
                            <div className="item">
                                <Label className='onlytext'>
                                    <Icon className='date'/><span>등록일 : 2019.12.31</span>
                                    <span className="ml17">{/* Study start date, end date */}학습기간 : 2019.12.31 20:30  ~  20. 02. 20 09:00</span>
                                </Label>
                            </div>
                        </div>
                    </div>
                    <div className="right-area">
                        <div className="price">10,000</div>
                        <div className="fixed-rating s4">
                            <span/><span/><span/><span/><span/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TitleArea
