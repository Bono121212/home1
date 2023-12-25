import React, { Component } from "react";

import TableTitle from "../TableTitle";
import TabMenu from "../TabMenu";
import Nodata from "../Nodata";

class TCContents extends Component {

    render() {
        return (
            <div className="full_content_wrap">
                <div className="templete_sub_contents">
                    <div className="location">
                        <ul>
                            <li className="home">Home</li>
                            <li>Trending 정보</li>
                        </ul>
                    </div>
                    <div className="sub_title">
                        <strong>멤버</strong>
                    </div>

                    {/* 탭 */}
                    <TabMenu />
                    
                    {/* 총 멤버수 및 검색영역 */}
                    <TableTitle />
                    
                    {/* 멤버리스트 */}
                    <Nodata />

                </div>  
            </div>  
        );
    }
}

export default TCContents;
