import React, { Component } from "react";
import { Select } from "semantic-ui-react";
import BoardWriteRadio from "../BoardWriteRadio";
import BoardWriteRadio2 from "../BoardWriteRadio2";
import BoardWriteRadio3 from "../BoardWriteRadio3";
import BottomButton from "../BottomButton";
import ClearInputBox from "../ClearInputBox";


const selectOptions02 = [
	{ key: "all", value: "all", text: "선택하세요" },
	{ key: "category", value: "category", text: "카테고리" },
	{ key: "normal", value: "normal", text: "일반게시판" },
	{ key: "writer", value: "writer", text: "토론 게시판" },
];
const selectOptions03 = [
	{ key: "all", value: "all", text: "선택하세요" },
	{ key: "subject", value: "subject", text: "제목" },
	{ key: "contents", value: "contents", text: "내용" },
	{ key: "writer", value: "writer", text: "작성자" },
];

class AdminMenuRight extends Component {
	render() {
		return (
			<div className="admin_menu_right">
				<div className="menu_right_contents">
					<table>
						<colgroup>
							<col width="200px" />
							<col />
						</colgroup>
						<tbody>
							<tr>
								<th>메뉴 유형</th>
								<td>
									<Select
										placeholder="전체"
										className="ui small-border admin_tab_select"
										defaultValue={selectOptions02[0].value}
										options={selectOptions02}
									/>
								</td>
							</tr>
							<tr>
								<th>메뉴명</th>
								<td>
									<ClearInputBox />
								</td>
							</tr>
							{/* 추가된 영역 */}
							{/*
                목록타입 설정이 추가되면서  아래 [접근권한]  <BoardWriteRadio />영역에 bwr 클래스 추가됨
                --->>>  <div className="board-write-radio bwr2">
              */}
							<tr className="opinoin-option">
								<th>목록 타입 설정</th>
								<td>
									<BoardWriteRadio2 />
								</td>
							</tr>
							{/* //추가된 영역 */}
							<tr className="opinoin-option">
								<th>접근 권한</th>
								<td>
									{/* 공개, 비공개 */}
									<BoardWriteRadio />
									<Select
										placeholder="전체"
										className="ui small-border admin_tab_select"
										defaultValue={selectOptions03[0].value}
										options={selectOptions03}
									/>
								</td>
							</tr>
							<tr className="opinoin-option">
								<th>추천 과정</th>
								<td>
									<BoardWriteRadio3 />
								</td>
							</tr>
						</tbody>
					</table>
					<ul>
						<li>ㆍ 해당 메뉴에 접근할 수 있는 범위를 설정할 수 있습니다.</li>
						<li>
							ㆍ 커뮤니티 멤버 : 해당 커뮤니티에 가입된 멤버들이 접근할 수
							있습니다.
						</li>
						<li>
							ㆍ 그룹 지정 : <strong>멤버 관리</strong> 메뉴에서 등록된 그룹만
							접근할 수 있습니다.
						</li>
					</ul>
				</div>
				<BottomButton />
			</div>
		);
	}
}

export default AdminMenuRight;
