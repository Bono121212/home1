import React from 'react'
import { Table, Label, Button, Select } from "semantic-ui-react";
import CubeDetailSec from '../CubeDetailSec';

const OverviewSeriese = () => {
	const DgreeYear = [
		{ key: '2022', value: '2022', text: '2022' },
		{ key: '2021', value: '2021', text: '2021' },
		{ key: '2020', value: '2020', text: '2020' },
	]

	return (
		<CubeDetailSec className="ov-seriese-sec" id="lms-seriese">
			<div className='detail-sec-head'>
				<h2 className="detail-sec-title">차수정보</h2>
				<Select placeholder="2022" options={DgreeYear} />
			</div>
			<div className="detail-sec-body">
				<div className="ov-seriese">
					<div className="table-seriese">
						<Table>
							<colgroup>
								<col width="8%" />
								<col width="25%" />
								<col width="25%" />
								<col width="15%" />
								<col width="12%" />
								<col width="15%" />
							</colgroup>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell>차수</Table.HeaderCell>
									<Table.HeaderCell>신청기간</Table.HeaderCell>
									<Table.HeaderCell>교육기간</Table.HeaderCell>
									<Table.HeaderCell>비용</Table.HeaderCell>
									<Table.HeaderCell>정원</Table.HeaderCell>
									<Table.HeaderCell>상태</Table.HeaderCell>
								</Table.Row>
							</Table.Header>

							<Table.Body>
								{/* 상태  케이스  */}
								{/* 신청 가능 : 신청 이력이 없을 경우
								신청 불가 : 현재 신청/ 학습 중인 이력이 있을 경우
								정원 초과 : 신청 이력이 없으나, 정원이 마감된 경우
								교육 종료 : 교육기간이 지난 과정의 경우
								학습 완료 : 신청한 강의에 학습 완료 했을 경우
								승인 대기 : 신청 결재 대기중인 경우
								반려됨 : 신청 결재에서 반려되었을 경우(버튼에서 text로 변경)
								학습 예정 : 신청 결재에서 승인되었을 경우
								학습중 : 신청한 강의를 학습 중일 경우 */}
								<Table.Row>
									<Table.Cell><Label className='label-seriese'>1차수</Label></Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>무료</Table.Cell>
									<Table.Cell>48/50</Table.Cell>
									<Table.Cell>교육 종료</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell><Label className='label-seriese'>2차수</Label></Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>200,000원</Table.Cell>
									<Table.Cell>50/50</Table.Cell>
									<Table.Cell>정원 초과</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell><Label className='label-seriese'>3차수</Label></Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>20,000원</Table.Cell>
									<Table.Cell>48/50</Table.Cell>
									<Table.Cell>학습 완료</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell><Label className='label-seriese'>4차수</Label></Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>무료</Table.Cell>
									<Table.Cell>48/50</Table.Cell>
									<Table.Cell>신청 불가</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell><Label className='label-seriese point'>5차수</Label></Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>무료</Table.Cell>
									<Table.Cell>48/50</Table.Cell>
									<Table.Cell>반려됨</Table.Cell>
									{/* 상태 > 반려됨 버튼 => 텍스트로 변경*/}
								</Table.Row>
								<Table.Row>
									<Table.Cell><Label className='label-seriese'>6차수</Label></Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>무료</Table.Cell>
									<Table.Cell>48/50</Table.Cell>
									<Table.Cell><Button className='btn-state primary'>신청 가능</Button></Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell><Label className='label-seriese'>7차수</Label></Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>무료</Table.Cell>
									<Table.Cell>48/50</Table.Cell>
									<Table.Cell>승인 대기</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell><Label className='label-seriese'>8차수</Label></Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>무료</Table.Cell>
									<Table.Cell>48/50</Table.Cell>
									<Table.Cell>학습중</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell><Label className='label-seriese'>9차수</Label></Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>무료</Table.Cell>
									<Table.Cell>48/50</Table.Cell>
									<Table.Cell>학습 예정</Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table>
						<div className='table-desc'>
							<p className='desc'><i aria-hidden="true" class="icon noti32"></i><strong>No Show Penalty</strong>미이수 처리</p>
						</div>
					</div>
				</div>
			</div>
		</CubeDetailSec>
	)
}
export default OverviewSeriese;