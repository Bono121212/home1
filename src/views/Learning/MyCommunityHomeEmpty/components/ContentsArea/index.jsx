import React, { Component, createRef } from "react";
import {Icon, Segment} from "semantic-ui-react";
import LnbMenu from "../../components/LnbMenu";
import Banner from "../../../../../images/all/bg-ttl-sample-02@3x.png";

class ContentsArea extends Component {
  contextRef = createRef();
  state = { activeItem: "MyCommunity" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div ref={this.contextRef}>
        <Segment className="full">
          <div className="course-detail-center community-containter">
            <LnbMenu />

            <div className="community-home-contants">
              {/* 배너 */}
              <div className="community-banner-type1">
                <img src={Banner} alt=""/>
                <div className="community-banner-inner">
                  <div className="community-banner-title">
                    Deep Learning Community
                  </div>
                  <div className="community-banner-copy">
                    과정 플랫폼은 여러분들이 동기 구성원들과 서로 소통하고  배우며 성장할 수 있는 공간입니다
                    적극적으로 참여하여 동기 구성원들과 함께 의미 있고, 소중한 경험을 쌓으시기를 바랍니다
                    카페 소개 및 다양한 메세지 등을 넣을 수 있어요. 배경이미지 가로사이즈 고정, 세로 사이즈 가변입니다
                  </div>
                </div>
              </div>

              {/* 공지사항 */}
              <div className="home-card-container">
                <div className="home-card-title">
                  <p>공지사항</p>
                  {/* more */}
                  {/*<button class="ui icon button right btn-blue btn-more">
                    more<i aria-hidden="true" class="icon more3"></i>
                  </button>*/}
                </div>
                <div className='no-cont-wrap'>
                  <Icon className='no-contents80'/>
                  <div className='text'>등록된 게시물이 없습니다.</div>
                </div>
              </div>

              {/* 최근 게시글 */}
              <div className="home-card-container">
                <div className="home-card-title">
                  <p>최근 게시글</p>
                  {/* more */}
                  {/*<button class="ui icon button right btn-blue btn-more">
                    more<i aria-hidden="true" class="icon more3"></i>
                  </button>*/}
                </div>
                <div className='no-cont-wrap'>
                  <Icon className='no-contents80'/>
                  <div className='text'>등록된 게시물이 없습니다.</div>
                </div>
              </div>
            </div>
          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
