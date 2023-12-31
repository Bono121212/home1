import React, {Component, createRef} from 'react'
import {
    Label, Icon
} from 'semantic-ui-react'

class TitleArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Comment'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        // const {activeItem} = this.state
        return (
            <div className="main-info-area">
                <div className="main-info-wrap">
                    {/*썸네일*/}
                    <div className="thumbnail">
                        {/*썸네일 이미지 위치*/}
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
                                    <span className="ml17">{/* Study start date, end date */}학습기간 : 2019.12.31 20:30  ~  2020.02.20 09:00</span>
                                </Label>
                            </div>
                        </div>
                    </div>
                    <div className="right-area">
                        <div className="ui statistic stamp">
                            <div className="value">3</div>
                            <Label>획득 가능 Stamp</Label>
                        </div>
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
