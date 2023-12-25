import React, {Component, createRef} from 'react'
import {
    Icon, Image, Label
} from 'semantic-ui-react'

class TitleArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Comment'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        return (
            <div className="main-info-area">
                <div className="progress-info-wrap">
                    <div className="cell">
                        <div className="cell-inner">
                            <div className="profile">
                                <div className="pic">
                                    <Image src='/images/all/profile-56-px.png' alt='프로필사진 임시이미지'/>
                                </div>
                                <button>
                                    <Icon className='my20'/>
                                    <span className="blind">my</span>
                                </button>
                            </div>
                            <div className="text-info">
                                <div className="name">
                                    김유니
                                </div>
                                <div className="part">
                                    <span>SK C&amp;C</span><br/><span>플랫폼 개발 1팀</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="ui statistic community-num">
                            <Label className='onlytext'>
                                <Icon className='commu-info16'/><span>가입한 커뮤니티</span>
                            </Label>
                            <div className="value2">
                                <strong>5</strong><span>개</span>
                            </div>
                        </div>
                        <div className="ui statistic community-num">
                            <Label className='onlytext'>
                                <Icon className='commu-info16-2'/><span>내가 만든 커뮤니티</span>
                            </Label>
                            <div className="value2">
                                <strong>1</strong><span>개</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TitleArea
