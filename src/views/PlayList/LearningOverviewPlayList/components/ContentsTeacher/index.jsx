import React, {Component} from 'react'
import {Icon, Label, Image} from 'semantic-ui-react'
import Profile56Px from "../../../../../images/all/profile-56-px.svg";
import labelImg from '../../../../../images/all/icon-lms-represent.svg';
class ContentsText extends Component {

    render() {
        return (
           <div className="badge-detail">
               <div className="ov-paragraph">
                    <div className="section-head">
                        <div className="title">
                            <h3 className="title-style">
                                <Label className="onlytext bold size24">
                                    <Icon className="host" />
                                    <span>강사정보</span>
                                </Label>
                            </h3>
                        </div>
                    </div>
                    <div className="scrolling course-profile">
                        <a href={()=>false} className="ui profile tool-tip">
                            <img src={labelImg} className="p-label" alt="" />
                            <div className="pic s80">
                                <Image src={Profile56Px} alt="프로필사진 임시이미지" />
                            </div>
                            <i><span className="tip-name">김써니</span><a href={()=>false} className="tip-id">mySUNI</a></i>
                        </a>
                        <a href={()=>false} className="ui profile">
                            <div className="pic s80">
                                <Image src={Profile56Px} alt="프로필사진 임시이미지" />
                            </div>
                        </a>
                        <a href={()=>false} className="ui profile">
                            <div className="pic s80">
                                <Image src={Profile56Px} alt="프로필사진 임시이미지" />
                            </div>
                        </a>
                        <a href={()=>false} className="ui profile">
                            <div className="pic s80">
                                <Image src={Profile56Px} alt="프로필사진 임시이미지" />
                            </div>
                        </a>
                        <a href={()=>false} className="ui profile">
                            <div className="pic s80">
                                <Image src={Profile56Px} alt="프로필사진 임시이미지" />
                            </div>
                        </a>
                        <a href={()=>false} className="ui profile">
                            <div className="pic s80">
                                <Image src={Profile56Px} alt="프로필사진 임시이미지" />
                            </div>
                        </a>
                        <a href={()=>false} className="ui profile">
                            <div className="pic s80">
                                <Image src={Profile56Px} alt="프로필사진 임시이미지" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}


export default ContentsText
