import React, { Component } from "react";
class CommunityTableTitle extends Component {
    render() {
        return (
            <>
                <div className="section-title">
                    <strong>커뮤니티 목록</strong>
                </div>
                <div className="table-board-title">
                    <div className="list-number">
                        총 <strong>59</strong>건이 검색 되었습니다.
                    </div>
                </div>
            </>
        );
    }
}

export default CommunityTableTitle;
