import React, { Component } from "react";

import TabMenu from "../TabMenu";
import TableTitle from "../TableTitle";
import Nodata from "../Nodata";



class TAContents extends Component {

    render() {

        return (
            <div className="templete_sub_contents narrow">
                <div className="location">
                    <ul>
                        <li className="home">Home</li>
                        <li>멤버</li>
                    </ul>
                </div>
                <div className="sub_title">
                    <strong>멤버</strong>
                </div>

                {/* 탭 */}
                <TabMenu />
                
                {/* 총 멤버수 및 검색영역 */}
                <TableTitle />
                
                {/* 그룹리스트 */}
                <Nodata />
                
            </div>
        );
    }
}

export default TAContents;
