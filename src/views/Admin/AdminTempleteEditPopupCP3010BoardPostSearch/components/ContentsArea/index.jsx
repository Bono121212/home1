import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

import AdminTab from "../AdminTab";
import TempleteTitle from "../TempleteTitle";
import TempleteEdit from "../TempleteEdit";

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
                {/* Segment.full.edit.dimon : dimon 클래스가 추가되면, '수정팝업' 실행시 필요한 딤이 적용 됩니다. */}
                <Segment className="full edit dimon">

                    <div className="admin-container">
                        { /* 멤버관리/ 메뉴관리/ 템플릿 관리/ 인트로 관리/통계 */ }
                        <AdminTab />

                        <TempleteTitle />
                    </div>

                    <div className="admin-container-detail admin-edit">
                        {/* 템플릿 수정하기 */}
                        <TempleteEdit />
                    </div>
                </Segment>
            </>
        );
    }
}

export default ContentsArea;
