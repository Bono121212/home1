import React, { Component } from "react";
import { Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

// import thumb1 from "../../../../../images/all/matter01.png"
import Writer from "../../../../../images/all/profile-110-px-sample-4.png"

class CTxtList1A extends Component {

    render() {
        return (
            <div className="compo_txt_list compo1">
                <Link to="/">
                    <div className="compo_info">
                        {/* <strong className="title ellipsis2">[공지] 3rd Letter : 2주 동안의 진행된써니 교육에 대한 이벤트를 진행합니다.</strong> */}

                        {/* 변경내역 */}
                        {/*
                            <strong className="title new"> 에 new클래스 여부에 따라 [n] 아이콘이 노출/비노출 됩니다
                            <span className="ellipsis2">
                        */}
                        <strong className="title new">
                            <span className="ellipsis2">[공지] 3rd Letter : 2주 동안의 진행된써니 교육에 대한 이벤트를 진행합니다.</span>
                        </strong>
                        <p className="txt ellipsis2">멤버사 여러분 안녕하세요! mySUNI에 보내주시는 응원과 관심에 늘 감사드립니다.“2주에 한번씩 모아서” 전해 드리는 게시글입니다. 게시글이 길어질 경우 게시글의 타이틀 및 서브 텍스트가 이렇게 두 줄까지 보입니다. 다소 길지만 해당 컴포넌트의 단수가 많아질 것을 생각하면 나쁘지 않은 가이드입니다. </p>
                    </div>
                    <div className="info_top">
                        <span className="writer">
                            <Icon>
                                <Image src={Writer} alt="글쓴이이미지" />
                            </Icon>
                            <span className="ellipsis">김글쓴이작성자김글쓴이작성자</span>
                        </span>
                        <span className="date">2021.05.10</span>
                    </div>
                    <div className="info_bottom">
                        <span className="cnt">1,578</span>
                        <span className="like">1,004</span>
                        <span className="reply">100</span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default CTxtList1A;
