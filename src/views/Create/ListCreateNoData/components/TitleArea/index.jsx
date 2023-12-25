import React, {Component} from 'react'
import { Image, Button, Icon } from 'semantic-ui-react'

class TitleArea extends Component {
    render() {
        return (
            <div className="main-info-area">
                <div className="progress-info-wrap">
                    <div className="cell">
                        <div className="cell-inner">
                            <div className="profile">
                                <div className="pic">
                                    <Image src='/images/all/profile-56-px.png' alt='프로필사진 임시이미지' />
                                </div>
                                <button>
                                    <Icon className='my20'/>
                                    <span className="blind">my</span>
                                </button>
                            </div>
                            <div className="text-info">
                                <div className="name">
                                    김유니김유니김유니김유니김유니김유니김유니김유니
                                </div>
                                <div className="part">
                                    <span>SK C&C</span><br /><span>플랫폼 개발 1팀</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cell create-wrap">
                        <Button className="personal line">
                            <Icon className='create16'/><span className="blind">학습카드 만들기</span>
                            <span>학습카드 만들기</span>
                        </Button>
                        <Button className="personal line">
                            <Icon className='movie16'/><span className="blind">동영상 제작하기</span>
                            <span>동영상 제작하기</span>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}


export default TitleArea
