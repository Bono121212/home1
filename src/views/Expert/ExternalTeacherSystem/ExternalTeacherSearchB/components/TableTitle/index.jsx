import React, { Component } from "react";
import { Select } from "semantic-ui-react";
// import approval from "../../../../../../images/all/icon-approval-24-px.png";
// const selectOptions02 = [
//   { key: "twenty", value: "twenty", text: "20명 정렬" },
// ];

const selectOptions03 = [
	{ key: "date", value: "date", text: "신청일자 순" },
	{ key: "status", value: "status", text: "상태 변경일 순" },
];

class TableTitle extends Component {
	render() {
		return (
			<div className="table-board-title">
				<div class="table_list_string searchb">
					<span>
						전체 <strong>1</strong>명 <span class="dash">|</span>
						수강 신청 <strong>0</strong>명 <span class="dash">|</span>
						승인 <strong>1</strong>명 <span class="dash">|</span>
						반려 <strong>0</strong>명 <span class="dash">|</span>
						취소 <strong>0</strong>명
					</span>
				</div>

				<div className="right-wrap right_txt">
					<Select
						className="ui small-border admin_table_select searchb"
						defaultValue={selectOptions03[0].value}
						options={selectOptions03}
					/>
					{/* <button class="ui button admin_table_button wd100" disabled="" tabindex="">승인</button>
				<button class="ui button admin_table_button03 wd100" disabled="" tabindex="">반려</button> */}

					{/* <button class="ui button admin_table_button02" disabled="" tabindex="">그룹 멤버 삭제</button> */}
				</div>
			</div>
		);
	}
}

export default TableTitle;
