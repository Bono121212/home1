import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

import AdminTab from "../AdminTab";
import TempleteList from "../TempleteList";

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
                {/* [인[트로 관리] 경우에는, Segment.full에 intro 클래스 추가 부탁드립니다. */}
                <Segment className="full intro">
                    <div className="admin-container">
                        { /* 멤버관리/ 메뉴관리/ 템플릿 관리/ 인트로 관리/통계 */ }
                        <AdminTab />
                    </div>

                    <div className="admin-container-detail">
                        {/* 템플릿 리스트*/}
                        <TempleteList />
                    </div>
                </Segment>
            </>
        );
    }
}

export default ContentsArea;
