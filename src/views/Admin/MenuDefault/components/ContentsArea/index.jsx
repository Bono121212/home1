import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import AdminTab from "../AdminTab";
import AdminHome from "../../../../../images/all/icon-breadcrumb-home-white.svg";
import AdminMenuRight from "../../components/AdminMenuRight";
import AdminMenuLeft from "../../components/AdminMenuLeft";

class ContentsArea extends Component {
  render() {
    return (
      <div>
        <div className="admin_community_top">
          <div className="admin_community">
            <h3>커뮤니티 관리</h3>
            <button>
              <img src={AdminHome} alt="" />
              Community Home
            </button>
          </div>
        </div>
        <Segment className="full">
          <div className="admin-container">
            {/* 멤버관리 */}
            <AdminTab />

            <div className="admin_menu_title">
              <p>
                ㆍ 메뉴를 편집한 후에 <strong>저장</strong> 버튼을 눌러야
                반영됩니다.
              </p>
              <p>
                ㆍ <strong>Home, 전체 글, 공지사항</strong> 메뉴는 편집 및
                삭제가 불가합니다.
              </p>
            </div>

            <div className="admin_menu_wrap">
              <AdminMenuLeft />
              <AdminMenuRight />
            </div>

          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
