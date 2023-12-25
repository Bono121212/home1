import React from "react";
import { Link } from "react-router-dom";

const ConditionsNotice = () => {
	return (
		<Link to="./" className="conditions-notice">
			<div className="tit">
                <strong>공지사항</strong>
            </div>
            <div className="desc">
                <p>
					[필독] 5개 항목에 대한 내용이 빠져 있는 경우, 추후 미이수 처리 변경될 수 있습니다. [필독] 5개 항목에 대한 내용이 빠져 있는 경우, 추후 미이수 처리 변경될 수 있습니다.
				</p>
            </div>
            <div className="date">
                <span>2022.07.05</span>
            </div>
        </Link>
	);
}
export default ConditionsNotice;
