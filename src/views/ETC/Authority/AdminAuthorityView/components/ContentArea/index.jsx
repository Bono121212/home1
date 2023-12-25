import classNames from 'classnames';
import React, { useState } from 'react';
import { Form, Table, TableBody } from 'semantic-ui-react';

const ContentArea = (props) => {
	const [expand, setExpand] = useState(false);
	return (
		<div className='authority-section'>
			<div className="regi-form base">
				<Form className="regi-content">
					<Form.Field>
						<div className="regi-tit-wrap">
							<strong className="regi-tit">신청 정보</strong>
 						</div>
						<Table>
							<colgroup>
								<col width="160px"/>
								<col width="440px"/>
								<col width="160px"/>
								<col width="auto"/>
							</colgroup>
							<TableBody>
								<Table.Row>
									<Table.HeaderCell>이름</Table.HeaderCell>
									<Table.Cell>김써니</Table.Cell>
									<Table.HeaderCell>소속 회사</Table.HeaderCell>
									<Table.Cell>SK주식회사 C&amp;C</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.HeaderCell>부서</Table.HeaderCell>
									<Table.Cell>Eco Solution 팀</Table.Cell>
									<Table.HeaderCell>신청 권한</Table.HeaderCell>
									<Table.Cell>SK주식회사 C&amp;C / Company Manager</Table.Cell>
								</Table.Row>
								{props.state === "신청" &&
								<Table.Row>
									<Table.HeaderCell>신청 사유</Table.HeaderCell>
									<Table.Cell colspan="3">
										<p className='pre-wrap'>{"부서를 옮겨서 다시금 권한 신청합니다.\n그리고 수정전 내용입니다."}</p>
									</Table.Cell>
								</Table.Row>
								}
								<Table.Row>
									<Table.HeaderCell>상태</Table.HeaderCell>
									<Table.Cell colspan="3">
										{props.state === "신청" ? "신청 (2023.06.01)" : props.state}
									</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.HeaderCell>승인자 정보</Table.HeaderCell>
									<Table.Cell colspan="3">
										<div className="authority-data">
											<div className={classNames('authority-expand', {'is-expanded': expand})}>
												<p>조형구/SK주식회사 C&C/Eco Solution팀(hkoo@sk.com)</p>
												<p>황써니/SK주식회사 C&C/Eco Solution팀(hwang@sk.com)</p>
												<p>강써니/SK주식회사 C&C/Eco Solution팀(kkk@sk.com)</p>
												{props.expand &&
													<>
														<p>조형구/SK주식회사 C&C/Eco Solution팀(hkoo@sk.com)</p>
														<p>황써니/SK주식회사 C&C/Eco Solution팀(hwang@sk.com)</p>
														<p>강써니/SK주식회사 C&C/Eco Solution팀(kkk@sk.com)</p>
														<p>조형구/SK주식회사 C&C/Eco Solution팀(hkoo@sk.com)</p>
														<p>황써니/SK주식회사 C&C/Eco Solution팀(hwang@sk.com)</p>
														<p>강써니/SK주식회사 C&C/Eco Solution팀(kkk@sk.com)</p>
													</>
												}
											</div>
											{props.expand &&
												<button type='button' className='btn-expand' onClick={()=>setExpand(!expand)}>
													{expand ? "간단히 보기" : "전체 보기"}
												</button>
											}
										</div>
									</Table.Cell>
								</Table.Row>
							</TableBody>
						</Table>
					</Form.Field>
					<div className="button-area">
						<button type='button' className="ui button fix line">목록</button>
						{(props.state === "신청") && <button type='button' className="ui button fix bg">수정</button> }
					</div>
				</Form>
			</div>
		</div>
	)
}
export default ContentArea
