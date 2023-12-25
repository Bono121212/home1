import React from "react";
const CubeDetailSecCol = (props) => {
	return (
        // 섹션구조의 유연한 설계목적으로 컴포넌트화 함. (outer, inner 선택적인 설계)
		<div className={"detail-sec-col " + (props.className ? props.className : "")} id={(props.id ? props.id : "")}>
			{props.children}
		</div>
	);
};
export default CubeDetailSecCol;
