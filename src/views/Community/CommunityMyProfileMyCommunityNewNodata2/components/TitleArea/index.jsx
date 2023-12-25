import React, {Component, createRef} from 'react'
import ProfileSample from '../../../../../images/all/profile-110-px-sample-4.jpg'
import BgProfileTitle from '../../../../../images/all/bg-profile-title@3x.jpg'

class TitleArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Comment'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        return (
          <div className="profile_box">
              <div className="profile_pic">
                  <div className="pic_area user">
                      <p><img src={ProfileSample} alt="프로필 사진"/></p>
                  </div>
                  <div className="pic_area background">
                      <p><img src={BgProfileTitle} alt="배경이미지"/></p>
                  </div>
              </div>

              <div className="profile_info">
                  <p className="name">nickname</p>
                  <p>만나서 반갑습니다. 구성원들의 자유로운 생각을 나누고싶습니다.</p>
                  <ul>
                      <li>
                          <span>Followers</span>
                          <em>86</em>
                      </li>
                      <li>
                          <span>Following</span>
                          <em>296</em>
                      </li>
                      <li>
                          <button type="button" className="btn_profile_edit">프로필 수정</button>
                      </li>
                  </ul>
              </div>
          </div>
        )
    }
}


export default TitleArea
