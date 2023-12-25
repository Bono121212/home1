import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

//import thumb1 from "../../../../../images/all/matter01.png"
import thumb2 from "../../../../../images/all/matter02.png"

class CTIRight extends Component {

    render() {
        return (
            <div className="compo_txt_img_left compo3">
                <Link to="/" className="flex">
                    <div className="compo_thumb left">
                        <Image src={thumb2} alt="컨텐츠 이미지"/>
                    </div>
                    <div className="compo_info right">
                        <div className="vcenter">
                            {/* <strong className="title ellipsis2">앞차와 간격 ‘척척’, 거뜬한 주행 탑승객 “미래도시에 와 있는 기분”</strong> */}

                            {/* 변경내역 */}
                            {/*  
                                <strong className="title new"> 에 new클래스 여부에 따라 [n] 아이콘이 노출/비노출 됩니다
                                <span className="ellipsis2">
                            */}
                            <strong className="title new">
                                <span className="ellipsis2">일론 머스크일론 </span>
                            </strong>
                            <p className="txt ellipsis2">모빌아이 창업자 사수아 CEO와 뉴욕타임즈 컬럼니스트 존 도의 대담.</p>
                        </div>
                    </div>
                </Link>
            </div>

        );
    }
}

export default CTIRight;
