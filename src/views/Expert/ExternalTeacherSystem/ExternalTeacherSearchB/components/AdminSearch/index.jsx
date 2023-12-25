import React, { Component } from "react";
import { Select, Radio } from "semantic-ui-react";
import ClearInputBoxSearch from "../ClearInputBoxSearch";
import Calendar from "../Calendar";

const selectOptions02 = [
	{ key: "all", value: "all", text: "전체" },
	{ key: "subject", value: "subject", text: "제목" },
	{ key: "contents", value: "contents", text: "내용" },
	{ key: "writer", value: "writer", text: "작성자" },
];

class AdminSearch extends Component {

	state = { value: "value01" };
	handleChange = (e, { value }) => this.setState({ value });

	render() {
		return (
			<table className="ui admin_table_top searchb">
				<colgroup>
					<col width="130px" />
					<col />
				</colgroup>
				<tbody>
				<tr>
						<th>구분</th>
						<td>
							<div className="view-all">
								<Radio
									className="base"
									label="학습자"
									name="radioGroup"
									value="value01"
									checked={this.state.value === "value01"}
									onChange={this.handleChange}
								/>
								<Radio
									className="base"
									label="학습결과"
									name="radioGroup"
									value="value02"
									checked={this.state.value === "value02"}
									onChange={this.handleChange}
								/>
							</div>
						</td>
					</tr>
					<tr>
						<th>신청일자</th>
						<td>
							<div className="preview">
								<Calendar />
							</div>
						</td>
					</tr>
					{/* <tr>
						<th>상태</th>
						<td>
							<Select
								placeholder="전체"
								className="ui small-border admin_tab_select"
								defaultValue={selectOptions02[0].value}
								options={selectOptions02}
							/>
						</td>
					</tr> */}
					<tr>
						<th>검색어</th>
						<td>
							<Select
								placeholder="전체"
								className="ui small-border admin_tab_select"
								defaultValue={selectOptions02[0].value}
								options={selectOptions02}
							/>
							<ClearInputBoxSearch />
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

export default AdminSearch;
