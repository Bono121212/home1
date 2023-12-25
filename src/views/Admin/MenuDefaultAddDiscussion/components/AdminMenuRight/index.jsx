import React, { Component } from "react";
import { Select, Button, Icon } from "semantic-ui-react";
import Editor from "../../../../Editor";
import BoardWriteRadio from "../BoardWriteRadio";
import BoardWriteRadio02 from "../BoardWriteRadio02";
import OpenOptionRadio from '../OpenOptionRadio';
import BottomButton from "../BottomButton";
import ClearInputBox from "../ClearInputBox";
import ClearInputBox02 from "../ClearInputBox02";
import LinkTitleBox from '../LinkTitleBox';
import LinkUrlBox from '../LinkUrlBox';
import CancleUrl from '../../../../../images/all/btn-minus-admin.svg';
import PlusUrl from '../../../../../images/all/btn-plus-admin.svg';
import AttachFileUpload from "../AttachFileUpload";

const selectOptions02 = [
  { key: "category", value: "category", text: "카테고리" },
  { key: "normal", value: "normal", text: "일반 게시판" },
  { key: "writer", value: "writer", text: "토론 게시판" },
  { key: "anony", value: "anony", text: "익명 게시판" },
  { key: "notice", value: "notice", text: "공지사항" },
  { key: "board", value: "board", text: "자료실" },
  { key: "survey", value: "survey", text: "설문조사" },
  { key: "link", value: "link", text: "링크" },
  { key: "html", value: "html", text: "HTML" },
];
const selectOptions03 = [
  { key: "all", value: "all", text: "선택하세요" }
];

class AdminMenuRight extends Component {
  render() {
    return (
      <div className="admin_menu_right">
        <div className="menu_right_contents">
          <table>
            <colgroup>
              <col width="154px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>메뉴 유형</th>
                <td>
                  <Select
                    placeholder="전체"
                    className="ui small-border admin_tab_select"
                    defaultValue={selectOptions02[0].value}
                    options={selectOptions02}
                  />
                </td>
              </tr>
              <tr>
                <th>메뉴명</th>
                <td>
                  <ClearInputBox />
                </td>
              </tr>
              <tr>
                <th>주제</th>
                <td>
                  <ClearInputBox02 />
                </td>
              </tr>
              {/* 2021-04-21 추가작업 */}
              <tr className='discussion-contents'>
                <th>내용</th>
                <td>
                  <div className="ui editor-wrap">
                      <Editor/>
                  </div>
                </td>
              </tr>

              <tr className='related-url-belt'>
                <th>관련 URL</th>
                <td>
                  <div className='related-url-bar'>
                    <LinkTitleBox />
                    <div>
                      <LinkUrlBox/>
                      <Button className='cancle-btn'>
                        <Icon>
                          <img src={CancleUrl} alt="" />
                        </Icon>
                      </Button>
                    </div>
                  </div>
                  <div className='related-url-bar'>
                    <LinkTitleBox />
                    <div>
                      <LinkUrlBox/>
                      <Button className='plus'>
                        <Icon>
                          <img src={PlusUrl} alt="" />
                        </Icon>
                      </Button>
                    </div>
                  </div>
                </td>
              </tr>

              <tr className='related-material'>
                <th>관련 자료</th>
                <td>
                  <AttachFileUpload />
                </td>
              </tr>

              <tr className='opinion-option'>
                <th>의견 공개 설정</th>
                <td>
                  {/* 공개, 비공개 */}
                  <OpenOptionRadio/>
                  <span className='open-option-detail'>비공개 설정시 작성한 본인과 커뮤니티 관리자만 확인할 수 있습니다.</span>
                </td>
              </tr>
              {/* //2021-04-21 추가작업 */}
              <tr className='opinion-option'>
                <th>접근 권한</th>
                <td className='p1'>
                  {/* 공개, 비공개 */}
                  <BoardWriteRadio />
                  <Select
                    placeholder="전체"
                    className="ui small-border admin_tab_select"
                    defaultValue={selectOptions03[0].value}
                    options={selectOptions03}
                  />
                </td>
              </tr>
              <tr className="opinion-option">
                <th>추천 과정</th>
                <td>
                  {/* 공개, 비공개 */}
                  <BoardWriteRadio02 />
                </td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>ㆍ 해당 메뉴에 접근할 수 있는 범위를 설정할 수 있습니다.</li>
            <li>
              ㆍ 커뮤니티 멤버 : 해당 커뮤니티에 가입된 멤버들이 접근할 수
              있습니다.
            </li>
            <li>
              ㆍ 그룹 지정 : <strong>멤버 관리</strong> 메뉴에서 등록된 그룹만
              접근할 수 있습니다.
            </li>
          </ul>
        </div>
        <BottomButton />
      </div>
    );
  }
}

export default AdminMenuRight;
