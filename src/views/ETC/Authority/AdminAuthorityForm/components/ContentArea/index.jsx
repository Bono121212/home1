import React, { useState } from 'react';
import { Form, Radio, Table, TableBody } from 'semantic-ui-react';
import classNames from "classnames";

const ContentArea = (props) => {
	// Inputs
	const [input1Focus, setInput1Focus] = useState(false);
    const [input1Write, setInput1Write] = useState("");
	const [input1Lenth, setInput1Lenth] = useState(0);

	// Radio
	const [radioVal, setRadioVal] = useState("radio05");
	const handleChange = (e, { value }) => setRadioVal(value);

	// Textarea
	const autoResizeTextarea = (e) => {
		let textarea = document.querySelector('.autoTextarea');

		if (textarea) {
		  textarea.style.height = 'auto';
		  let height = textarea.scrollHeight; // 높이
		  textarea.style.height = `${height + 2}px`;
		}
	};
	return (
		<div className='authority-section'>
			<div className="regi-form base">
				<Form className="regi-content">
					<Form.Field>
						<div className="regi-tit-wrap">
							<strong className="regi-tit">신청 권한</strong>
 						</div>
						<Table>
							<colgroup>
								<col width="160px"/>
								<col width="auto"/>
							</colgroup>
							<TableBody>
								<Table.Row>
									<Table.HeaderCell>현재 권한</Table.HeaderCell>
									<Table.Cell>권한 없음</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.HeaderCell>신청 권한별 안내</Table.HeaderCell>
									<Table.Cell>
										<div className='authority-data'>
											<p className='bul-dot-14'>
												<strong className='tit'>Super Manager</strong>
												<span className='txt'>
													mySUNI 전체영역 관리
													<em className='txt-guide'>LMS와 사전에 협의 되지 않는 분들은 Super Manager 신청 시 반려 됩니다.</em>
												</span>
											</p>
											<p className='bul-dot-14'>
												<strong className='tit'>College Manager</strong>
												<span className='txt'>
													mySUNI College 영역 관리
													<em className='txt-guide'>College 및 아카데미 담당자는 Super Manager 아닌 College Manager로 신청하세요.</em>
												</span>
											</p>
											<p className='bul-dot-14'>
												<strong className='tit'>College Contents Manager </strong>
												<span className='txt'>mySUNI 콘텐츠 관리 <small className='txt-info'>(회원 관리 접근 불가)</small></span>
											</p>
											<p className='bul-dot-14'>
												<strong className='tit'>Company Manager</strong>
												<span className='txt'>mySUNI 내 멤버사 영역 관리 <small className='txt-info'>(회원 관리, 콘텐츠 관리)</small></span>
											</p>
											<p className='bul-dot-14'>
												<strong className='tit'>Company Contents Manager </strong>
												<span className='txt'>멤버사 영역 내 콘텐츠 관리 <small className='txt-info'>(회원 관리 접근 불가)</small></span>
											</p>
										</div>
									</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.HeaderCell>신청 권한 선택<span>*</span></Table.HeaderCell>
									<Table.Cell>
										<Radio label="Super Manager" checked={radioVal === 'radio01'} name="radioGroup" className="base xs" value="radio01" onChange={handleChange} />
										<Radio label="College Manager" checked={radioVal === 'radio02'} name="radioGroup" className="base xs" value="radio02" onChange={handleChange} />
										<Radio label="College Contents Manager" checked={radioVal === 'radio03'} name="radioGroup" className="base xs" value="radio03" onChange={handleChange} />
										<Radio label="Company Manager" checked={radioVal === 'radio04'} name="radioGroup" className="base xs" value="radio04" onChange={handleChange} />
										<Radio label="Company Contents Manager" checked={radioVal === 'radio05'} name="radioGroup" className="base xs" value="radio05" onChange={handleChange} />
									</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.HeaderCell>신청 사유<span>*</span></Table.HeaderCell>
									<Table.Cell>
										<div className="form-controls">
											<div className={classNames("ui input right-btm-count", {"focus": input1Focus, "write": input1Write, "error": props.error})}>
												<textarea
													className='textarea autoTextarea'
													cols={20}
													rows={1}
													placeholder="신청사유를 입력하세요."
													value={input1Write}
													onClick={() => setInput1Focus(true)}
													onBlur={() => setInput1Focus(false)}
													onChange={(e) => {setInput1Write(e.target.value); setInput1Lenth(input1Write.length)}}
													onKeyDown={autoResizeTextarea}
													onKeyUp={autoResizeTextarea}
												/>
												<span className="count">
													<span className="now">{input1Lenth}</span>/<span className="max">500</span>
												</span>
											</div>
										</div>
									</Table.Cell>
								</Table.Row>
							</TableBody>
						</Table>
					</Form.Field>
					<div className="button-area">
						<button type='button' className="ui button bg fix" disabled={input1Write===""?true:false}>신청</button>
					</div>
				</Form>
			</div>
		</div>
	)
}
export default ContentArea
