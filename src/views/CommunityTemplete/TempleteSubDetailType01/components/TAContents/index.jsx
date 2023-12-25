import React, { Component } from "react";
import { Button, Icon, Image } from "semantic-ui-react";

import HeaderReadInfo from "../HeaderReadInfo";
import BoardDown from "../BoardDown";
import BottomBttn from "../BottomBttn";
import CommentContents from "../CommentContents";
import PhotoCommentNew from "../PhotoCommentNew";
import TestRadio01 from "../TestRadio01";
import CardBelt from "../CardBelt";
import PagingList from "../PagingList";

import tempImg from "../../../../../images/all/overviewVideoimg.PNG";
import tempImg2 from "../../../../../images/all/img-detail-sample.png";
import IconRecommend from '../../../../../images/all/icon-community-class.svg';

class TAContents extends Component {

    render() {
        return (
            <div className="templete_sub_contents narrow">
                <div className="location">
                    <ul>
                        <li className="home">Home</li>
                        <li>Trending 정보</li>
                    </ul>
                </div>
                {/* board detail title, 정보 */}
                <div className="detail_tit">
                    <div className="dt_tit important new">{/* important: 중요 게시글 아이콘추가  new : 새로운 게시글 아이콘추가됩니다.  */}
                        <Icon className="i_important"/>
                        <strong>[공지] TRENDING 정보 게시판 이용안내, 자세한 내용이 궁금하시다면 아래에 댓글로 남겨주세요. <Icon className="secret"/></strong>
                    </div>
                    <HeaderReadInfo />
                </div>

                <div className="board_dt_wrap">
                    {/* board 내용 */}
                    <div className="class-guide-txt fn-parents ql-snow">
                        <div className="videobox">
                            <Image src={tempImg} alt="임시이미지"/>
                            {/* <iframe src="https://www.youtube.com/embed/p9wWEBO3rxU" width="100%" height="700px" frameborder="0"></iframe> */}
                        </div>

                        <div className="text ql-editor">
                            {`\nTRENDING 정보 게시판은 해당 커뮤니티원이라면 누구나 글을 올릴수 있습니다.\n각 게시판별 관련된 자료를 모으고 서로 공유하자는게 기본 의도입니다.\n해당 커뮤니티의 성격을 유지하고자 몇가지 주의사항은 아래에 기재되어 있으니 꼭 참고 부탁드립니다. `}
                            <br/>
                            <Image src={tempImg2} alt="임시이미지"/>
                            <br/>
                            {`\n주의사항\n1. 게시판(정책제안, QnA)의 목적에 맞지 않을 경우 등록된 게시물은 게시자에게 통보없이 삭제 될 수 있습니다.\n2. 게시글을 통해 주민등록번호 등 개인정보를 유포하는 경우 고의성이 없거나 그 내용이 사실일지라도 유포의 구체적인 내용에 따라 사생활 침해 및 명예훼손으로 간주돼 법적 처벌을 받거나 손해배상 책임이 생길 수 있습니다.\n\n실명, 존칭어 사용 / 욕설 및 저속한 언어 사용의 글 게시 금지 / 상용 광고의 글 게시 금지 / 특정인 비방의 글 게시 금지\n\n불명확한 근거의 글 게시 금지 / 게시판 특성과 무관한 주제의 글 게시 금지 / 기타 불건전한 내용의 글 게시 금지`}
                        </div>
                    </div>

                    {/* 첨부파일 */}
                    <BoardDown />


                    {/* 추천과정 */}
                    <div className="card-slide-list pd60">
                        <div className="board-down-title">
                            <p>
                                <img src={IconRecommend} alt="" />
                                <strong>추천 과정</strong><span className="cnt">(8개)</span>
                            </p>
                        </div>
                        <CardBelt />
                    </div>

                    {/* board bottom 버튼 */}
                    <BottomBttn />

                    {/* comment 작성란*/}
                    <PhotoCommentNew />

                    {/* radiobttn */}
                    <TestRadio01 />

                    {/* comment list */}
                    <CommentContents />

                    {/* More Comments */}
                    <div className="more-comments">
                        <Button icon className="left moreview">
                            <Icon className="moreview" /> 댓글 더보기 (26)
                        </Button>
                    </div>

                    {/* 이전글, 다음글 */}
                    <div className="paging">
                        <PagingList />
                    </div>
                </div>
            </div>
        );
    }
}

export default TAContents;
