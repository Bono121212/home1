import React from "react";
import Paging from "../Paging";

const Board = () => {
	return (
		<div className="table-board">
			<div className="table-board-title">
				<div className="table_list_string searchb">
					<span>전체 <strong>89</strong> 건</span>
				</div>
			</div>
			<div className="admin-table-list">
				<table>
					<colgroup>
						<col width="80px" />
						<col width="200px" />
						<col width="100px" />
						<col width="100px" />
						<col width="200px"/>
						<col width="100px" />
						<col width="100px" />
						<col width="100px" />
						<col />
					</colgroup>
					<thead>
						<tr>
							<th>No</th>
							<th>소속사</th>
							<th>사번</th>
							<th>이름</th>
							<th>신청정보</th>
							<th>신청일자</th>
							<th>상태</th>
							<th>승인일자</th>
							<th>승인자</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>10</td>
							<td>SK주식회사 홀딩스</td>
							<td>11084</td>
							<td>김써니</td>
							<td>Company Contents Manager / SK주식회사 C&C</td>
							<td>2023.06.01</td>
							<td>신청</td>
							<td>2023.06.05</td>
							<td>박*수/SK주식회사 C&C</td>
						</tr>
						<tr>
							<td>9</td>
							<td>SK주식회사 홀딩스</td>
							<td>11084</td>
							<td>김써니</td>
							<td>Company Manager / SK주식회사 C&C</td>
							<td>2023.06.01</td>
							<td>반려</td>
							<td>2023.06.05</td>
							<td>박*수/SK주식회사 C&C</td>
						</tr>
						<tr>
							<td>8</td>
							<td>SK주식회사 홀딩스</td>
							<td>11084</td>
							<td>김써니</td>
							<td>Company Manager / SK주식회사 C&C</td>
							<td>2023.06.01</td>
							<td>승인완료</td>
							<td>2023.06.05</td>
							<td>박*수/SK주식회사 C&C</td>
						</tr>
						<tr>
							<td>7</td>
							<td>SK주식회사 홀딩스</td>
							<td>11084</td>
							<td>김써니</td>
							<td>Company Contents Manager / SK주식회사 C&C</td>
							<td>2023.06.01</td>
							<td>승인완료</td>
							<td>2023.06.05</td>
							<td>박*수/SK주식회사 C&C</td>
						</tr>
						<tr>
							<td>6</td>
							<td>SK주식회사 홀딩스</td>
							<td>11084</td>
							<td>김써니</td>
							<td>Company Contents Manager / SK주식회사 C&C</td>
							<td>2023.06.01</td>
							<td>신청</td>
							<td>2023.06.05</td>
							<td>박*수/SK주식회사 C&C</td>
						</tr>
						<tr>
							<td>5</td>
							<td>SK주식회사 홀딩스</td>
							<td>11084</td>
							<td>김써니</td>
							<td>Company Contents Manager / SK주식회사 C&C</td>
							<td>2023.06.01</td>
							<td>신청</td>
							<td>2023.06.05</td>
							<td>박*수/SK주식회사 C&C</td>
						</tr>
						<tr>
							<td>4</td>
							<td>SK주식회사 홀딩스</td>
							<td>11084</td>
							<td>김써니</td>
							<td>Company Contents Manager / SK주식회사 C&C</td>
							<td>2023.06.01</td>
							<td>신청</td>
							<td>2023.06.05</td>
							<td>박*수/SK주식회사 C&C</td>
						</tr>
						<tr>
							<td>3</td>
							<td>SK주식회사 홀딩스</td>
							<td>11084</td>
							<td>김써니</td>
							<td>Company Contents Manager / SK주식회사 C&C</td>
							<td>2023.06.01</td>
							<td>신청</td>
							<td>2023.06.05</td>
							<td>박*수/SK주식회사 C&C</td>
						</tr>
						<tr>
							<td>2</td>
							<td>SK주식회사 홀딩스</td>
							<td>11084</td>
							<td>김써니</td>
							<td>Company Contents Manager / SK주식회사 C&C</td>
							<td>2023.06.01</td>
							<td>신청</td>
							<td>2023.06.05</td>
							<td>박*수/SK주식회사 C&C</td>
						</tr>
						<tr>
							<td>1</td>
							<td>SK주식회사 홀딩스</td>
							<td>11084</td>
							<td>김써니</td>
							<td>Company Contents Manager / SK주식회사 C&C</td>
							<td>2023.06.01</td>
							<td>신청</td>
							<td>2023.06.05</td>
							<td>박*수/SK주식회사 C&C</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Paging />
		</div>
	);
}

export default Board;
