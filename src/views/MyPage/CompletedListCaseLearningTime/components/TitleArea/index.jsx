import React, {Component, createRef} from 'react'
import {
    Image, Label, Icon, Button, Dropdown
} from 'semantic-ui-react'
import ChannelOfInterest from '../ChannelOfInterest'
const yearList = [
    {
        key: '2019',
        text: '2019',
        value: '2019',
    },
    {
        key: '2018',
        text: '2018',
        value: '2018',
    },
    {
        key: '2017',
        text: '2017',
        value: '2017',
    },
    {
        key: '2016',
        text: '2016',
        value: '2016',
    },
    {
        key: '2015',
        text: '2015',
        value: '2015',
    },
]

class TitleArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Comment'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        return (
            <div className="main-info-area">
                <div className="progress-info-wrap mypage">
                    <div className="cell">
                        <div className="cell-inner">
                            <div className="profile">
                                <div className="pic">
                                    {/* 프로필 사진 없을경우 */}
                                    {/*<Image src='/images/all/img-profile-56-px.png' alt='프로필사진 임시이미지'/>*/}
                                    {/* 프로필 사진 있을경우  */}
                                    <Image src='/images/all/profile-56-px.png' alt='프로필사진 임시이미지'/>
                                </div>
                                <Button icon className="img-icon">
                                    <Icon className="photo-edit icon"/>
                                </Button>
                            </div>
                            <div className="text-info">
                                <div className="name">
                                    김유니
                                </div>
                                <div className="part">
                                    <span>SK C&C</span><br/>
                                    <span>플랫폼 개발 1팀</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="cell-inner">
                            <div className="ui statistic total-time">
                                <Button className="btn-total-time">
                                    <Label className='onlytext'>
                                        <Icon className='total-time'/><span>총 학습시간</span>
                                    </Label>
                                    <div className="value2">
                                        <strong>120</strong><span>h</span>
                                        <strong className="min">00</strong><span>m</span>
                                    </div>
                                </Button>
                            </div>

                            <div className="chart-wrap">
                                <div className="ui pie w56" data-value="150">
                                    <span className="left"/>
                                    <span className="right"/>
                                </div>
                                <div className="ui list">
                                    <dl className="item sk">
                                        <dt>mySUNI</dt>
                                        <dd>14h 50m</dd>
                                    </dl>
                                    <dl className="item my">
                                        <dt>My company</dt>
                                        <dd>35h 30m</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="stamp-wrap">
                            <Label className='stamp'>
                                <div><span className="text1">획득 가능</span></div>
                                <div>
                                    <Icon className='stamp35'/><span className="text2">x</span>
                                    <span className="text3">12</span>
                                </div>
                            </Label>
                            <div className="year">
                                <Dropdown
                                    className='inline tight'
                                    options={yearList}
                                    defaultValue={yearList[0].value}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <ChannelOfInterest/>
            </div>
        )
    }
}


export default TitleArea
