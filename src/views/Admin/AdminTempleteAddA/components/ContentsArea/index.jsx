import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

import AdminTab from "../AdminTab";
import TempleteAdd from "../TempleteAdd";
//import TempleteEdit from "../TempleteEdit";

import AdminHome from "../../../../../images/all/icon-breadcrumb-home-white.svg";

class ContentsArea extends Component {
    render() {
        return (
            <>
                <div className="admin_community_top">
                    <div className="admin_community">
                        <h3>커뮤니티 관리</h3>
                        <button>
                        <img src={AdminHome} alt="" />
                        Community Home</button>
                    </div>
                </div>
                <Segment className="full">
                    <div className="admin-container">
                        { /* 멤버관리/ 메뉴관리/ 템플릿 관리/ 인트로 관리/통계 */ }
                        <AdminTab />
                    </div>

                    <div className="admin-container-detail">
                        {/* 템플릿 추가하기 */}
                        <TempleteAdd />
                    </div>
                </Segment>
            </>
        );
    }
}

export default ContentsArea;
