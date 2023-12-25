import React from "react";
import { Icon } from "semantic-ui-react";

const BoardEmpty = () => {
	return (
		<div className="table-board">
			<div className="table-board-title">
				<div className="table_list_string searchb">
					<span>전체 <strong>0</strong> 건</span>
				</div>
			</div>
			<div className="admin-table-empty">
				<div className="no-cont-wrap">
					<Icon className="no-contents80" />
					<span className="blind">콘텐츠 없음</span>
					<div className="text">목록이 존재하지 않습니다.</div>
				</div>
			</div>
		</div>
	);
}

export default BoardEmpty;
