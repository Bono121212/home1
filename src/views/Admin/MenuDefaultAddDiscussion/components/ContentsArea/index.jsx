import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import AdminTab from "../AdminTab";
import AdminHome from "../../../../../images/all/icon-breadcrumb-home-white.svg";
import MenuTitle from "../MenuTitle";
import AdminMenuRight from "../AdminMenuRight";
import AdminMenuLeft from "../AdminMenuLeft";

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
            <MenuTitle />
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
