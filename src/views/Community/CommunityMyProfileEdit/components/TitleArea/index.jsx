import React, {Component, createRef} from 'react'
//import ProfileSample from '../../../../../images/all/profile-110-px-sample-4.jpg'
//import BgProfileTitle from '../../../../../images/all/bg-profile-title@3x.jpg'
import BgProfileTitleBg from '../../../../../images/all/bg-community-profilettl@3x.png'

class TitleArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Comment'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        return (
          <div className="profile_box">
              <div className="profile_pic">
                  <div className="pic_area user">
                      <p>
                          {/*<img src={ProfileSample} alt="프로필 사진"/>*/}
                          <img src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCI+CiAgICA8ZGVmcz4KICAgICAgICA8Y2lyY2xlIGlkPSJhIiBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiLz4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjM5LjUiIHN0cm9rZT0iI0RERCIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNEREQiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTU5LjExIDY3Ljc4Yy04LjM5LTMuMDU3LTExLjA3NC01LjYzNy0xMS4wNzQtMTEuMTYyIDAtMy4zMTYgMi43NS01LjQ2NSAzLjY4Ny04LjMwNi45MzgtMi44NDIgMS40OC02LjIwNyAxLjkzLTguNjU0LjQ1MS0yLjQ0OC42My0zLjM5NC44NzUtNi4wMDJDNTQuODI4IDMwLjQwMiA1Mi42NSAyMiA0MSAyMmMtMTEuNjQ2IDAtMTMuODMyIDguNDAyLTEzLjUyNSAxMS42NTYuMjQ1IDIuNjA4LjQyNSAzLjU1NS44NzUgNi4wMDIuNDUgMi40NDcuOTg2IDUuODEyIDEuOTIzIDguNjU0LjkzNyAyLjg0MSAzLjY5IDQuOTkgMy42OSA4LjMwNiAwIDUuNTI1LTIuNjgyIDguMTA1LTExLjA3NCAxMS4xNjJDMTQuNDY3IDcwLjg0NCA5IDczLjg2NiA5IDc2djEwaDY0Vjc2YzAtMi4xMzEtNS40Ny01LjE1Mi0xMy44OS04LjIyeiIgbWFzaz0idXJsKCNiKSIvPgogICAgPC9nPgo8L3N2Zz4K" alt="프로필 사진"/>
                      </p>
                      <button type="button" className="btn_pic_edit">이미지 등록</button>
                  </div>
                  <div className="pic_area background">
                      <p>
                          {/*<img src={BgProfileTitle} alt="배경이미지"/>*/}
                          <img src={BgProfileTitleBg} alt="배경이미지"/>
                      </p>
                      <button type="button" className="btn_pic_edit">이미지 등록</button>
                  </div>
              </div>

						<div className="profile_info">
							<p className="name">nickname</p>
							<div className="ui input write profile">
								<input type="password" placeholder="" value="만나서 반갑습니다. 구성원들의 자유로운 생각을 나누고싶습니다." />
								<i aria-hidden="true" className="icon clear link"></i>
							</div>
						</div>
					</div>
        )
    }
}


export default TitleArea
