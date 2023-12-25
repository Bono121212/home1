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
                        <div className="header">HR - Agile HR Fundamentals 회사의 비전달성을 위한 HR전략 방향 Community</div>
                        <div className="deatil">
                            <div className="item">
                                <Label className='bold onlytext'>
                                    <Icon className='video2'/><span>Community</span>
                                </Label>
                                <span className="channel">Leadership Specialist</span>
                            </div>
                            <div className="item">
                                <Label className='onlytext'>
                                    <Icon className='date'/><span>등록일 : 2019.12.31</span>
                                    <span className="ml17">{/* Study start date, end date */}학습기간 : 2019.12.31 ~ 2020.02.20 </span>
                                </Label>
                            </div>
                        </div>
                    </div>
                    <div className="right-area">
                    </div>
                </div>
            </div>
        )
    }
}


export default TitleArea
