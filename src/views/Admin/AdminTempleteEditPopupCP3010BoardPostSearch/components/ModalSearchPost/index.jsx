import React, { Component } from "react";
import { Button, Select, Modal, Image } from "semantic-ui-react";

import ModalPostList from "../ModalPostList";
//import Paging from '../Paging';
import PostSearchBox from "../PostSearchBox";

import BClose from "../../../../../images/all/icon-close-player-28-px.png";
class ModalSearchPost extends Component {
    

    render() {
        const SearchOptions2 = [
            {key :"0", value :"최신 순", text :"최신 순"},
            {key :"1", value :"댓글 순", text :"댓글 순"},
        ]

        return (
            <Modal
                className="base w1000 modal_sc_post_box"
                open={true}
            >
                <Modal.Header className="res">
                    게시글 검색
                    <Button className="b_close" onClick={this.close}><Image src={BClose}/></Button>
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
                            <div className="option_box">
                                <Select className="ui dropdown m0 small-border" placeholder="최신 순"  options={SearchOptions2} />
                            </div>
                        </div>

                        {/* 리스트 */}
                        <ModalPostList />
                    </div>
                </Modal.Content>
            </Modal>
        );
    }
}

export default ModalSearchPost;
