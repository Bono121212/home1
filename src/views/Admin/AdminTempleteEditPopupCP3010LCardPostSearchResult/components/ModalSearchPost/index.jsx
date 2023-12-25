import React, { Component } from "react";
import { Button, Modal, Image } from "semantic-ui-react";

import ModalPostList from "../ModalPostList";
import Paging from '../Paging';
import PostSearchBox from "../PostSearchBox";

//import Nodata from "../../../../../images/all/no-contents-80-px.svg";
import BClose from "../../../../../images/all/icon-close-player-28-px.png";

class ModalSearchPost extends Component {
    
    render() {
        return (
            <Modal
                className="base w1000 modal_sc_post_box h692"
                open={true}
            >
                <Modal.Header className="res">
                    추천 과정 검색
                    <Button className="b_close"><Image src={BClose}/></Button>
                </Modal.Header>
                <Modal.Content>
                    <div className="cnt_inner">
                        {/* 검색 */}
                        <PostSearchBox/>
                        {/* 테이블 타이틀 */}
                        <div className="list_title">
                            <div className="list_cnt">
                                <span>총 <strong>50개</strong>의 리스트가 있습니다.</span>
                            </div>
                            <span className="slt_cnt"><strong>3개</strong> 선택</span>
                        </div>
                        {/* 리스트 */}
                        <ModalPostList />

                        {/* page */}
                        <Paging />

                    </div>
                    <div className="popup_bottom">
                        <div className="btn_box">
                            <Button className="cancel">취소</Button>
                            <Button className="done">완료</Button>
                        </div>
                    </div>
                </Modal.Content>
            </Modal>
        );
    }
}

export default ModalSearchPost;
