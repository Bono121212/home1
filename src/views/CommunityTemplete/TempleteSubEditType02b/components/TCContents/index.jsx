import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import EditForm from "../EditForm";
import BottomFileUpload from "../BottomFileUpload";
import RcmmdCard from "../RcmmdCard";
import BoardWriteRadio from "../BoardWriteRadio";

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
                    {/* 메뉴 명  */}
                    <div className="detail_tit">
                        <div className="dt_tit">
                            <strong>Trending 정보</strong>
                            <span className="sub_tit left_line16">게시판 글쓰기</span>
                        </div>
                    </div>
                
                    <div className="edit-form">
                        {/* 글쓰기 영역 */}
                        <EditForm />

                        {/* 파일 등록 영역 */}
                        <BottomFileUpload />

                        {/* 추천과정 선택 */}
                        <RcmmdCard />

                        {/* 공개/비공개 라디오 */}
                        <BoardWriteRadio />
                        
                    </div>
                    {/* 등록/취소 버튼 */}
                    <div class="bottom-bttn">
                        <Button className="fix line">취소</Button>
                        <Button className="fix bg">등록</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TCContents;
