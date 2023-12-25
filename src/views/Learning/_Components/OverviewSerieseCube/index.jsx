import React from 'react'
import { Table, Label, Select } from "semantic-ui-react";
import CubeDetailSec from '../CubeDetailSec';
// import { classNames } from 'classnames';

const OverviewSerieseCube = () => {
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
								<col width="10%" />
								<col width="auto" />
								<col width="auto" />
								<col width="20%" />
								<col width="15%" />
								<col width="15%" />
							</colgroup>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell>차수</Table.HeaderCell>
									<Table.HeaderCell>교육기간</Table.HeaderCell>
									<Table.HeaderCell>교육시간</Table.HeaderCell>
									<Table.HeaderCell>장소</Table.HeaderCell>
									<Table.HeaderCell>비용</Table.HeaderCell>
									<Table.HeaderCell>상태</Table.HeaderCell>
								</Table.Row>
							</Table.Header>

							<Table.Body>
								{/* 상태  케이스  */}
								{/*
								신청 가능 (c-blue) : 신청 이력이 없을 경우
								신청 불가 : 현재 신청/ 학습 중인 이력이 있을 경우
								정원 초과 : 신청 이력이 없으나, 정원이 마감된 경우
								교육 종료 : 교육기간이 지난 과정의 경우
								학습 완료 (c-red) : 신청한 강의에 학습 완료 했을 경우
								승인 대기 : 신청 결재 대기중인 경우
								반려됨 (c-orange) : 신청 결재에서 반려되었을 경우(버튼에서 text로 변경)
								학습 예정 (c-red) : 신청 결재에서 승인되었을 경우
								학습중 (c-red) : 신청한 강의를 학습 중일 경우
								미이수 : admin에서 미이수 처리한 경우
								불참 : admin에서 불참 처리한 경우
								 */}
								<Table.Row>
									<Table.Cell><Label className='label-seriese'>1차수</Label></Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>13:00 ~ 15:00</Table.Cell>
									<Table.Cell>꽃피는 동백섬에 봄이 왔건만 형제떠난부산항1F</Table.Cell>
									<Table.Cell>200,000원</Table.Cell>
									<Table.Cell><strong>교육 종료</strong></Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell><Label className='label-seriese'>2차수</Label></Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>13:00 ~ 15:00</Table.Cell>
									<Table.Cell>미정</Table.Cell>
									<Table.Cell>200,000원</Table.Cell>
									<Table.Cell><strong>정원 초과</strong></Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell><Label className='label-seriese'>3차수</Label></Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>13:00 ~ 15:00</Table.Cell>
									<Table.Cell>미정</Table.Cell>
									<Table.Cell>20,000원</Table.Cell>
									<Table.Cell><strong className="c-red">학습 완료</strong></Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell><Label className='label-seriese'>4차수</Label></Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>13:00 ~ 15:00</Table.Cell>
									<Table.Cell>미정</Table.Cell>
									<Table.Cell>무료</Table.Cell>
									<Table.Cell><strong>신청 불가</strong></Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell><Label className='label-seriese point'>5차수</Label></Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>13:00 ~ 15:00</Table.Cell>
									<Table.Cell>미정</Table.Cell>
									<Table.Cell>무료</Table.Cell>
									<Table.Cell><strong className="c-orange">반려됨</strong></Table.Cell>
									{/* 상태 > 반려됨 버튼 => 텍스트로 변경*/}
								</Table.Row>
								<Table.Row>
									<Table.Cell><Label className='label-seriese'>6차수</Label></Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>13:00 ~ 15:00</Table.Cell>
									<Table.Cell>미정</Table.Cell>
									<Table.Cell>무료</Table.Cell>
									<Table.Cell><strong className='c-blue'>신청 가능</strong></Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell><Label className='label-seriese'>7차수</Label></Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>13:00 ~ 15:00</Table.Cell>
									<Table.Cell>미정</Table.Cell>
									<Table.Cell>무료</Table.Cell>
									<Table.Cell><strong>승인 대기</strong></Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell><Label className='label-seriese'>8차수</Label></Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>13:00 ~ 15:00</Table.Cell>
									<Table.Cell>미정</Table.Cell>
									<Table.Cell>무료</Table.Cell>
									<Table.Cell><strong className="c-red">학습중</strong></Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell><Label className='label-seriese'>9차수</Label></Table.Cell>
									<Table.Cell>2022.01.20 ~ 2022.02.19</Table.Cell>
									<Table.Cell>13:00 ~ 15:00</Table.Cell>
									<Table.Cell>미정</Table.Cell>
									<Table.Cell>무료</Table.Cell>
									<Table.Cell><strong className="c-red">학습 예정</strong></Table.Cell>
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
export default OverviewSerieseCube;