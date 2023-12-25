import React, { Component } from "react";
import { Icon, Modal } from "semantic-ui-react";
//import down from "../../../../../images/all/icon-down-type-4-24-px.png";
//import ProfileSample2 from "../../../../../images/all/profile-110-px-sample-2.jpg";
import "../../style.css";
//import NotSupported from "../../../../../images/all/btn-download.svg";
import playerBtn from "../../../../../images/all/btn-player-next.png";

class LinkedInModal extends Component {
  state = { open: true };
  show = (size) => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { open, size } = this.state;

    return (
      <>
        {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}

        <Modal
          size={size}
          open={open}
          onClose={this.close}
          className="w1000 base"
        >
          <Modal.Header className="dataroom-popup-header">
            <div className="dataroom-popup-left">
              <span>mySUNI 프로그램북_New format_20년 3분기.pdf</span>
            </div>
            <div className="dataroom-popup-right">
              {/*<button className="ui icon button left post list2">
                <img src={down} alt="" />
                다운로드
              </button>*/}
              <button className="ui icon button img-icon">
                <i aria-hidden="true" className="icon clear2 selected link"></i>
                <span>Close</span>
              </button>
            </div>
          </Modal.Header>
          <Modal.Content className="dataroom-popup-content">
            <div className="documents-viewer">
              <div className="scrolling-80vh">
                <div style={{backgroundColor:"gray", height:"2000px"}}>
                  내부스크롤
                </div>
              </div>
{/*              <div className="pdf-not-supported">
                <span className="not-supported-copy">Viewer에서 지원하지 않는 문서입니다.<br />문서를 다운로드하셔야 학습을 이어 하실 수 있습니다.</span>
                <a className="btn-not-supported"><img src={NotSupported} alt="" /></a>
              </div>*/}

              <div className="video-overlay">
                <div className="video-overlay-btn">
                  <button>
                    <img src={playerBtn} alt="Player" />
                  </button>
                </div>
                <div className="video-overlay-text">
                  <p>다음 학습 이어하기</p>
                  <h3>[반도체 클라쓰] Keyword로 알아보는 반도체의 품격</h3>
                </div>
              </div>

              <div className="pdf-control disable">
                <div className="pagination">
                  <a href={()=>false} className="pdf-prev">이전</a>
                  <span className="num">1/40</span>
                  <a href={()=>false} className="pdf-next">이후</a>
                </div>
                <a href={()=>false} className="pdf-down on"><Icon className="down-white24"/></a>
               {/* <div className="pdf-down-drop">
                  <a href={()=>false}>전략_Intermediate_과정.ppt</a>
                  <a href={()=>false}>전략_Intermediate_과정.ppt</a>
                </div>*/}
                <div className="pdf-bar"><span className="pdf-gauge" /></div>
              </div>
            </div>
          </Modal.Content>
        </Modal>
      </>
    );
  }
}

export default LinkedInModal;
