import React, {Component, createRef} from 'react';
import { Image } from 'semantic-ui-react';
import profileImg from '../../../../../images/all/profile-56-px.svg';

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
                                    <Image src={profileImg} alt='프로필사진 임시이미지' />
                                </div>
                            </div>
                            <div className="text-info">
                                <div className="name">
                                    Doug Rose
                                </div>
                                <div className="part">
                                    <span>LinkedIn사외강사</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TitleArea
