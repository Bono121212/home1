import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

//import thumb1 from "../../../../../images/all/matter01.png"
import thumb2 from "../../../../../images/all/matter02.png"

class CTILRLeft extends Component {

    render() {
        return (
            <div className="compo_txt_img_right compo1">
                <Link to="/" className="flex">
                    <div className="compo_info left">
                        <div className="vcenter">
                            {/* <strong className="title ellipsis2">게시글의 타이틀이 두 줄까지 보입니다. 게시글의 타이틀이 두 줄까지 보입니다. 게시글의 타이틀이 두 줄까지 보입니다. 게시글의 타이틀이 두 줄까지 보입니다.</strong> */}

                            {/* 변경내역 */}
                            {/*  
                                <strong className="title new"> 에 new클래스 여부에 따라 [n] 아이콘이 노출/비노출 됩니다
                                <span className="ellipsis2">
                            */}
                            <strong className="title new">
                                <span className="ellipsis2">게시글의 타이틀이 두 줄까지 보입니다. 게시글의 타이틀이 두 줄까지 보입니다. 게시글의 타이틀이 두 줄까지 보입니다. 게시글의 타이틀이 두 줄까지 보입니다.</span>
                            </strong>
                            <p className="txt ellipsis2">게시글의 상세내용이 두 줄까지 보입니다. 게시글의 상세내용이 두 줄까지 보입니다. 게시글의 상세내용이 두 줄까지 보입니다. 게시글의 상세내용이 두 줄까지 보입니다.</p>
                        </div>
                    </div>
                    <div className="compo_thumb right">
                        <Image src={thumb2} alt="컨텐츠 이미지"/>
                    </div>
                </Link>
            </div>
        );
    }
}

export default CTILRLeft;
