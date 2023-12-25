import React from "react";
const CubeDetailSec = (props) => {
	return (
        // 섹션구조의 유연한 설계목적으로 컴포넌트화 함. (outer, inner 선택적인 설계)
		<div className={"detail-sec " + (props.className ? props.className : "")} id={(props.id ? props.id : "")}>
            <div className="detail-sec-inner">
                {props.children}
			</div>
		</div>
	);
};
export default CubeDetailSec;
