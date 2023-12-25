import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import thumb1 from "../../../../../images/all/matter01.png"
import thumb2 from "../../../../../images/all/matter02.png"

class CTICross extends Component {

    render() {
        return (
            <>
                <div className="compo_txt_img_cross ">
                    <Link to="/" className="flex">
                        <div className="compo_thumb left">
                            {/* 이미지파일이 들어가는 영역입니다.
                            <Image src={thumb1} alt="슬라이드이미지"/> */}
                        </div>
                        <div className="compo_info right">
                            <div className="vcenter">
                                <strong className="title ellipsis2">앞차와 간격 ‘척척’, 거뜬한 주행 탑승객 “미래도시에 와 있는 기분”</strong>
                                <p className="txt ellipsis2">모빌아이 창업자 사수아 CEO와 뉴욕타임즈 컬럼니스트 존 도의 대담.</p>
                            </div>
                        </div>
                    </Link>
                </div>
 
                <div className="compo_txt_img_cross flex">
                    <Link to="/" className="flex">
                        <div className="compo_info left">
                            <div className="vcenter">
                                <strong className="title ellipsis2">앞차와 간격 ‘척척’, 거뜬한 주행 탑승객 “미래도시에 와 있는 기분”</strong>
                                <p className="txt ellipsis2">모빌아이 창업자 사수아 CEO와 뉴욕타임즈 컬럼니스트 존 도의 대담.</p>
                            </div>
                        </div>
                        <div className="compo_thumb right">
                            {/* 이미지파일이 들어가는 영역입니다.
                            <Image src={thumb1} alt="슬라이드이미지"/> */}
                        </div>
                    </Link>
                </div>

            </>


        );
    }
}

export default CTICross;
