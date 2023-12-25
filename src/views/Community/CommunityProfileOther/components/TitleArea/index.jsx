import React, {Component, createRef} from 'react'
import ProfileSample3 from '../../../../../images/all/profile-110-px-sample-3.jpg'
import BgProfileCopy from '../../../../../images/all/bg-photo-02-copy-2@3x.jpg'

class TitleArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Comment'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        return (
          <div className="profile_box">
              <div className="profile_pic">
                  <div className="pic_area user">
                      <p><img src={ProfileSample3} alt="프로필 사진"/></p>
                  </div>
                  <div className="pic_area background">
                      <p><img src={BgProfileCopy} alt="배경이미지"/></p>
                  </div>
              </div>

						<div class="profile_info">
							<p class="name">kikiki8812</p>
							<p>만나서 반갑습니다. 구성원들의 자유로운 생각을 나누고싶습니다.</p>
							<ul>
								<li>
									<span>Followers</span>
									<em>99</em>
								</li>
								<li>
									<span>Following</span>
									<em>999</em>
								</li>
								<li>
									<button type="button" class="btn_profile_follow">Follow</button>
								</li>
							</ul>
						</div>
					</div>
        )
    }
}


export default TitleArea
