import React from 'react'
import { Modal, Button, Image } from 'semantic-ui-react';
import PopupTitleImg from '../../../images/all/btn-lms-community-14-px.svg';
import EmptyBtn from '../../../images/all/btn-radio-type-2-nomal.svg';
import RadioBtn from '../../../images/all/btn-radio-type-2-selected.svg';
import CloseIcon from '../../../images/all/icon-close-player-28-px.png';
import ListmoreBtn from '../../../images/all/icon-list-more-16-px.svg';
import ImportantBtn from '../../../images/all/survey-important.png';
import './style.css';
import "react-datepicker/dist/react-datepicker.css";


const CubeSurveyChartCore = () => {

	const [open, setOpen] = React.useState(true);

	return(
		<>
		{/* 2021-12 변경사항 :
				import된 이미지, 질문, 기존 필수 항목 1,4번 1번으로 합침,
				태그나 인라인들어간 style은 변경x
				변경된 css는 별도로 css-release에서 수정예정(공통영역에서 수정하는 거라 스타일은 배포 일정 관계없음)
			*/}
			<section className='content lms v-wide' />
			<Modal className='survey-result-modal'
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
				open={open}
				trigger={<Button>Show Modal</Button>}
				// size="large"
				style={{height: '840px', width: '1010px'}}
			>
				<Modal.Header >
					<span className="course-survey-new-modal-header">반도체클라쓰 - Keyword로 알아보는 반도체의 품격 과정 Survey</span>
					<div className="course-survey-new-modal-header-img"><img src={PopupTitleImg} alt="" /></div>
					<span className="course-survey-new-modal-header">총 <span className="course-survey-new-modal-header-boldText">1582명</span> 참여</span>
					<Modal.Actions style={{display: 'inline'}}>
						<button className="course-survey-new-modal-header-closeBtn" onClick={() => setOpen(prev => !prev)}><img src={CloseIcon} alt="" />Close</button>
					</Modal.Actions>
				</Modal.Header>
				<Modal.Content scrolling={true} style={{maxHeight: '80vh'}}>
					<Modal.Description>
						{/* 1번 문항 */}
						<div className="course-radio-survey-new">
							<p>
								<span>1</span>이 과정은 다른 사람에게도 추천하고 싶다.​
								<span className="importantBtn"><img src={ImportantBtn} alt="" /></span>
							</p>
							<div className="course-survey-list">
								<li className="course-survey-list-cont">
									<span className="course-survey-list-btnImg"><img src={EmptyBtn} alt="" /></span>
									<div className="course-survey-list-backgrondBar">
										<div style={{height: '100%', backgroundColor: 'rgb(205, 228, 226)', borderRadius: '6px', width: '0.25%'}}/>
										<span className="course-survey-list-persent-right"><span className="course-survey-list-persent-number">4</span>(0.25%)</span>
										<li className="course-survey-list-text">
											전혀 아니다
										</li>
									</div>
								</li>
								<li className="course-survey-list-cont">
									<span className="course-survey-list-btnImg"><img src={EmptyBtn} alt="" /></span>
									<div className="course-survey-list-backgrondBar">
										<div style={{height: '100%', backgroundColor: 'rgb(205, 228, 226)', borderRadius: '6px', width: '3.48%'}}/>
										<span className="course-survey-list-persent-right"><span className="course-survey-list-persent-number">55</span>(3.48%)</span>
										<li className="course-survey-list-text">
											아니다
										</li>
									</div>
								</li>
								<li className="course-survey-list-cont">
									<span className="course-survey-list-btnImg"><img src={EmptyBtn} alt="" /></span>
									<div className="course-survey-list-backgrondBar">
										<div style={{height: '100%', backgroundColor: 'rgb(205, 228, 226)', borderRadius: '6px', width: '3.6%'}}/>
										<span className="course-survey-list-persent-right"><span className="course-survey-list-persent-number">57</span>(3.60%)</span>
										<li className="course-survey-list-text">
											보통이다
										</li>
									</div>
								</li>
								<li className="course-survey-list-cont">
									<span className="course-survey-list-btnImg"><img src={EmptyBtn} alt="" /></span>
									<div className="course-survey-list-backgrondBar">
										<div style={{height: '100%', backgroundColor: 'rgb(205, 228, 226)', borderRadius: '6px', width: '28.57%'}}/>
										<span className="course-survey-list-persent-right"><span className="course-survey-list-persent-number">452</span>(28.57%)</span>
										<li className="course-survey-list-text">
											그렇다
										</li>
									</div>
								</li>
								<li className="course-survey-list-cont">
									<span className="course-survey-list-btnImg"><img src={RadioBtn} alt="" /></span>
									<div className="course-survey-list-backgrondBar">
										<div style={{height: '100%', backgroundColor: 'rgb(205, 228, 226)', borderRadius: '6px', width: '64.1%'}}/>
										<span className="course-survey-list-persent-right"><span className="course-survey-list-persent-number">1014</span>(64.1%)</span>
										<li className="course-survey-list-text active">
											매우 그렇다
										</li>
									</div>
								</li>
								<p className="improve-text">test</p>
								<ul className="improve-list">
									<li>무</li>
									<li>많은 도움이 되는 유익한내용이었습니다</li>
									<li>내용을 조금 더 신경써주세요</li>
									<li>잘 들었습니다.</li>
									<li>.</li>
									<li>.</li>
									<li>...</li>
									<li>.</li>
									<li>..</li>
									<li>.</li>
									<li className="improve-list-more">
										<Image src={ListmoreBtn} style={{display: "inline-block"}}/>
										<span>더보기 (674개)</span>
									</li>
								</ul>
							</div>
						</div>
						{/* 2번문항 */}
						<div className="course-radio-survey-new">
							<p>
								<span>2</span>이 과정을 통해 새롭게 알게 되거나 느낀 것이 있다.​
								<span className="importantBtn"><img src={ImportantBtn} alt="" /></span>
							</p>
							<div className="course-survey-list">
								<li className="course-survey-list-cont">
									<span className="course-survey-list-btnImg"><img src={EmptyBtn} alt="" /></span>
									<div className="course-survey-list-backgrondBar">
										<div style={{height: '100%', backgroundColor: 'rgb(205, 228, 226)', borderRadius: '6px', width: '0.25%'}}/>
										<span className="course-survey-list-persent-right"><span className="course-survey-list-persent-number">4</span>(0.25%)</span>
										<li className="course-survey-list-text">
											전혀 아니다
										</li>
									</div>
								</li>
								<li className="course-survey-list-cont">
									<span className="course-survey-list-btnImg"><img src={EmptyBtn} alt="" /></span>
									<div className="course-survey-list-backgrondBar">
										<div style={{height: '100%', backgroundColor: 'rgb(205, 228, 226)', borderRadius: '6px', width: '3.48%'}}/>
										<span className="course-survey-list-persent-right"><span className="course-survey-list-persent-number">55</span>(3.48%)</span>
										<li className="course-survey-list-text">
											아니다
										</li>
									</div>
								</li>
								<li className="course-survey-list-cont">
									<span className="course-survey-list-btnImg"><img src={EmptyBtn} alt="" /></span>
									<div className="course-survey-list-backgrondBar">
										<div style={{height: '100%', backgroundColor: 'rgb(205, 228, 226)', borderRadius: '6px', width: '3.6%'}}/>
										<span className="course-survey-list-persent-right"><span className="course-survey-list-persent-number">57</span>(3.60%)</span>
										<li className="course-survey-list-text">
											보통이다
										</li>
									</div>
								</li>
								<li className="course-survey-list-cont">
									<span className="course-survey-list-btnImg"><img src={EmptyBtn} alt="" /></span>
									<div className="course-survey-list-backgrondBar">
										<div style={{height: '100%', backgroundColor: 'rgb(205, 228, 226)', borderRadius: '6px', width: '28.57%'}}/>
										<span className="course-survey-list-persent-right"><span className="course-survey-list-persent-number">452</span>(28.57%)</span>
										<li className="course-survey-list-text">
											그렇다
										</li>
									</div>
								</li>
								<li className="course-survey-list-cont">
									<span className="course-survey-list-btnImg"><img src={RadioBtn} alt="" /></span>
									<div className="course-survey-list-backgrondBar">
										<div style={{height: '100%', backgroundColor: 'rgb(205, 228, 226)', borderRadius: '6px', width: '64.1%'}}/>
										<span className="course-survey-list-persent-right"><span className="course-survey-list-persent-number">1014</span>(64.1%)</span>
										<li className="course-survey-list-text active">
											매우 그렇다
										</li>
									</div>
								</li>
							</div>
						</div>
						{/* 3번문항 */}
						<div className="course-radio-survey-new">
							<p>
								<span>3</span>이 과정의 내용은 업무나 일상에서 활용 가능하다.​
								<span className="importantBtn"><img src={ImportantBtn} alt="" /></span>
							</p>
							<div className="course-survey-list">
								<li className="course-survey-list-cont">
									<span className="course-survey-list-btnImg"><img src={EmptyBtn} alt="" /></span>
									<div className="course-survey-list-backgrondBar">
										<div style={{height: '100%', backgroundColor: 'rgb(205, 228, 226)', borderRadius: '6px', width: '0.25%'}}/>
										<span className="course-survey-list-persent-right"><span className="course-survey-list-persent-number">4</span>(0.25%)</span>
										<li className="course-survey-list-text">
											전혀 아니다
										</li>
									</div>
								</li>
								<li className="course-survey-list-cont">
									<span className="course-survey-list-btnImg"><img src={EmptyBtn} alt="" /></span>
									<div className="course-survey-list-backgrondBar">
										<div style={{height: '100%', backgroundColor: 'rgb(205, 228, 226)', borderRadius: '6px', width: '3.48%'}}/>
										<span className="course-survey-list-persent-right"><span className="course-survey-list-persent-number">55</span>(3.48%)</span>
										<li className="course-survey-list-text">
											아니다
										</li>
									</div>
								</li>
								<li className="course-survey-list-cont">
									<span className="course-survey-list-btnImg"><img src={EmptyBtn} alt="" /></span>
									<div className="course-survey-list-backgrondBar">
										<div style={{height: '100%', backgroundColor: 'rgb(205, 228, 226)', borderRadius: '6px', width: '3.6%'}}/>
										<span className="course-survey-list-persent-right"><span className="course-survey-list-persent-number">57</span>(3.60%)</span>
										<li className="course-survey-list-text">
											보통이다
										</li>
									</div>
								</li>
								<li className="course-survey-list-cont">
									<span className="course-survey-list-btnImg"><img src={EmptyBtn} alt="" /></span>
									<div className="course-survey-list-backgrondBar">
										<div style={{height: '100%', backgroundColor: 'rgb(205, 228, 226)', borderRadius: '6px', width: '28.57%'}}/>
										<span className="course-survey-list-persent-right"><span className="course-survey-list-persent-number">452</span>(28.57%)</span>
										<li className="course-survey-list-text">
											그렇다
										</li>
									</div>
								</li>
								<li className="course-survey-list-cont">
									<span className="course-survey-list-btnImg"><img src={RadioBtn} alt="" /></span>
									<div className="course-survey-list-backgrondBar">
										<div style={{height: '100%', backgroundColor: 'rgb(205, 228, 226)', borderRadius: '6px', width: '64.1%'}}/>
										<span className="course-survey-list-persent-right"><span className="course-survey-list-persent-number">1014</span>(64.1%)</span>
										<li className="course-survey-list-text active">
											매우 그렇다
										</li>
									</div>
								</li>
							</div>
						</div>

					</Modal.Description>
				 </Modal.Content>
			</Modal>
		</>
		)
};

export default CubeSurveyChartCore
