import React from "react";
import CubeDetailSec from "../../../_Components/CubeDetailSec";

const GuideContainer = (props) => {
    return(
        <CubeDetailSec className="cube-liveguide-sec">
			<div className="cube-liveguide">
				<p className="title"><strong>2월 22일 오후 2시, youtube에서 하기 목록 위주로 특강 시작!</strong></p>
				<div className="items">
					<p className="item">- Snowflake 경쟁력</p>
					<p className="item">- Snowflake 핵심 고려사항</p>
					<p className="item">- Snowflake 도입 유형 및 주요 사례</p>
					<p className="item">﻿- Snowflake 비용 체계</p>
				</div>
			</div>
		</CubeDetailSec>
    )
}

export default GuideContainer;