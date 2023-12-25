import React, { Component } from "react";
import {
  Icon,
  Label,
  List,
} from "semantic-ui-react";

class ContentsText extends Component {
  render() {
    return (
      <>
        <div className="ov-paragraph fn-parents">
          <div class="section-head">
            <h3 className="title-style">
              <Label className="onlytext bold size24">
                <Icon className="category" />
                <span>{/* Sub Category */}관련 Category</span>
              </Label>
            </h3>
          </div>

          <List bulleted>
            <List.Item>
              <div className="title sty2">AI</div>
              <div className="detail">
                AI Biz Essential / AI Tech Biginner / Language AI / AI Tech
                Advanced / Speech AI
              </div>
            </List.Item>
            <List.Item>
              <div className="title sty2">Leadership</div>
              <div className="detail">
                Leadership / Leading Myself / Leading Business / Leadership
                Pipeline / Leadership Clinic
              </div>
            </List.Item>
          </List>
        </div>

        {/* 파일다운로드 (선택) */}
        <div className="ov-paragraph download-area">
          <h3 className="title-style">
            <Label className="onlytext bold size24">
              <Icon className="document24" />
              <span>참고자료</span>
            </Label>
          </h3>
          <List bulleted>
            <List.Item>
              <div className="title sty2">첨부파일</div>
              <div className="detail">
                <div className="file-down-wrap">
                  <div className="down">
                    <a href={()=>false}>
                      <span>Mobile_App_UI_UX_GUI_Design_Tutorials.pptx</span>
                    </a>
                  </div>
                  <div className="down">
                    <a href={()=>false}>
                      <span>Mobile_App_UI_UX_GUI_Design_Tutorials.pptx</span>
                    </a>
                  </div>
                  <div className="all-down">
                    <a href={()=>false}>
                      <Icon className="icon-down-type4" />
                      <span>전체 다운로드</span>
                    </a>
                  </div>
                </div>
              </div>
            </List.Item>
          </List>
        </div>
        <div className="ov-paragraph">
          <List>
            <List.Item>
              <div className="title sty2">
                <h3 className="title-style">
                  <Label className="onlytext bold size24">
                    <Icon className="goal" />
                    <span>{/* Goal */}학습목표</span>
                  </Label>
                </h3>
              </div>
              <div className="detail">UX 디자이너가 되기위한 발걸음</div>
            </List.Item>
            <List.Item>
              <div className="title sty2">
                <h3 className="title-style">
                  <Label className="onlytext bold size24">
                    <Icon className="target" />
                    <span>{/* Target */}대상</span>
                  </Label>
                </h3>
              </div>
              <div className="detail">mySUNI 모든 회원</div>
            </List.Item>
            <List.Item>
              <div className="title sty2">
                <h3 className="title-style">
                  <Label className="onlytext bold size24">
                    <Icon className="host" />
                    <span>{/* Host */}교육기관 출처</span>
                  </Label>
                </h3>
              </div>
              <div className="detail">SK커뮤니케이션즈</div>
            </List.Item>
          </List>
        </div>
        
        <div className="ov-paragraph info-box2">
          <List bulleted>
          <List.Item>
              <div className="title sty2">{/*Requirements*/}장소</div>
              <div className="detail">
                SK Telecom 본사 11층 대회의실
              </div>
            </List.Item>
            <List.Item>
              <div className="title sty2">{/*Requirements*/}이수조건</div>
              <div className="detail">
                총 강의 3시간 중 전제적인 분위기가 다운되지 않으면 됨
              </div>
            </List.Item>
            <List.Item>
              <div className="title sty2">{/*Other Guides*/}기타안내</div>
              {/* 기타안내에는 ql-snow + overview 필수 */}
              <div className="ql-snow overview">
                <div className="detail ql-editor">
                  주말 학습장소는 주차공간이 협소하니 대중교통을 이용해 주시기
                  바랍니다. 주말 학습장소는 주차공간이 협소하니 대중교통을
                  이용해 주시기 바랍니다. 주말 학습장소는 주차공간이 협소하니
                  대중교통을 이용해 주시기 바랍니다. 주말 학습장소는 주차공간이
                  협소하니 대중교통을 이용해 주시기 바랍니다.
                </div>
              </div>
            </List.Item>
          </List>
        </div>

        <div className="ov-paragraph fn-parents">
          <List>
            <List.Item>
              <div className="title sty2">
                <h3 className="title-style">
                  <Label className="onlytext bold size24">
                    <Icon className="tag2" />
                    <span>{/*Tag*/}Term</span>
                  </Label>
                </h3>
              </div>
              {/* 태그 */}
              <div className="detail">
                  <span className='ui label tag'>AI</span>
                  <span className='ui label tag'>AI</span>
                  <span className='ui label tag'>Database</span>
                  <span className='ui label tag'>AI</span>
                  <span className='ui label tag'>Design</span>
                  <span className='ui label tag'>Project Managing</span>
                  <span className='ui label tag'>Project Managing</span>
                  <span className='ui label tag'>Design</span>
                  <span className='ui label tag'>Database</span>
                  <span className='ui label tag'>AI</span>
                  <span className='ui label tag'>Database</span>
                  <span className='ui label tag'>AI</span>
                  <span className='ui label tag'>Design</span>
                  <span className='ui label tag'>Project Managing</span>
                  <span className='ui label tag'>비실리콘계 태양광 소재</span>
              </div>
              
            </List.Item>
          </List>
        </div>

        
      </>
    );
  }
}

export default ContentsText;
