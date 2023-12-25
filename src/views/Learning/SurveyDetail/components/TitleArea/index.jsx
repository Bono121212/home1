import React, {Component, createRef} from 'react'
// import {
//     Image, Label, Icon, Button, List,
// } from 'semantic-ui-react'
// import ActionButtons from "../ActionButtons";
// import SelectRadio01 from "../../../TestDetail/components/SelectRadio01";

class TitleArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Comment'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        // const {activeItem} = this.state
        return (
                <div className="title-area">
                    <div className="title-inner">
                        <div className="title">설문조사 입니다.
                        </div>
                        <div className="user-info">
                            <div className="ui profile">
                                <div className="pic">
                                    {/* 프로필 사진 자리
                                    <Image src='/images/all/profile-56-px.png' alt='프로필사진 임시이미지'/>
                                     */}
                                </div>
                            </div>
                            <span className="name">홍길동</span>
                            <span className="date">2020.01.06 14:33</span>
                        </div>
                        <div className="sub-info">

                        </div>
                    </div>
                </div>

        )
    }
}


export default TitleArea
