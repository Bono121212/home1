import React, {Component, createRef} from 'react'
import {
    Image, Label, Icon, Rating
} from 'semantic-ui-react'

class TitleArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Comment'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <>
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
                                        <Icon className='video2'/><span>Video</span>
                                    </Label>
                                    <span className="channel">Leading Myself</span>
                                </div>
                                <div className="item">
                                    <Label className='onlytext'>
                                        <Icon className='date'/><span>등록일 : 2019.12.31</span>
                                    </Label>
                                </div>
                            </div>
                        </div>
                        <div className="right-area">
                            <Rating defaultRating={4} maxRating={5} disabled className='rating-num'/>
                        </div>
                    </div>
                </div>

                <div className="between-section">
                    <div className="cont-inner">
                        <Image src='/images/all/thumb-movie.png' alt='프로필사진 임시이미지'/>
                    </div>
                </div>
            </>
        )
    }
}


export default TitleArea
