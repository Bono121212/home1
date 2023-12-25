import React, { Component } from "react";
import { Button, Icon, Dimmer } from "semantic-ui-react";
import PersonalTab from "../PersonalTab";
import gr_img from "../../../../../images/all/gr.png";
import classNames from "classnames";
// import SliderArea from "../SliderArea";
import ClassSeriesDetailModal from '../MainPersonalBoardSetting';
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";


class MyLearningInfoArea extends Component {
	state = { isVisible: false };
	infoRef = React.createRef();
	handleVisible = () => { this.setState({ isVisible: true }) }
	componentDidMount() {
		document.addEventListener("mousedown", this.handleClickOutside);
	}
	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleClickOutside);
	}
	handleClickOutside = event => {
		if (!this.infoRef.current.contains(event.target)) {
			this.setState({ isVisible: false });
		}
	};

	// 퍼스널보드
	render() {
		const { isVisible, popup } = this.state;

		return (
			<>
				{/* .my-learning-area */}
				<div className="main-personal-wrap">
					<div className="main_personal"> {/* season */}
						{/* 2021-10 main_left와  main_right를 추가 */}
						<div className="main_left">
							{/* 2021-10 ui.profile영역 삭제, personal-header-title > p에  ellipsis2 추가 */}
							<div className="personal-header-title">
								<h3><strong>김써니</strong>님</h3>
								<p className="ellipsis2">따뜻한 차 한 잔과 함께, 오늘도 써니 하세요!</p>
							</div>

							{/* 2021-10 main-stu-time => main-time-info*/}
							<div className="main-time-info">
								<span>
									하루 <em>3시간 30분</em> 학습, 일주일 <em>5일</em> 출석
								</span>
								<button type="button" className='goal-setting' /> {popup && <ClassSeriesDetailModal />}
							</div>


							<div className="personal-info-go">
								<Button className="info-std" icon onClick={this.handleVisible} ><Icon className="std" />나의 학습현황 보기</Button>
								{/* 2021-11 개인학습, 온보딩배너 추가 !!*/}
								<div className="info-go">
									<a href={() => false} className="info-pl"><Icon className="pl" />개인학습</a>
								</div>

								<div className="info-boading">
									<Link to="/mypage/my-foundationSkill" className="boading-wrap">
										<span className="blind">Foundation Skill</span>
									</Link>
								</div>
							</div>
						</div>

						{/* 2023-08-16 사용자별 메뉴구성 1단으로 변경 */}
						{/* 2021-10 main_left와  main_right를 추가 */}
						{/* <div className="main_right"> */}
							{/* 2021-10 main-gauge-box => main-std-media*/}
							{/* <div className="main-std-media">
								<SliderArea />
							</div>
						</div> */}
					</div>
				</div>


				{/* // .my-learning-area */}
				{/* 2021-10 accordion > div.personal-info-wrap 변경 button 클릭시 열림 visible 클래스 추가됨*/}
				<div className={classNames("personal-info-wrap", { 'visible': isVisible })} ref={this.infoRef}>
					<div className="inner">
						<div className="personal-contents">
							<div className="personal-card">
								<div className="personal-card-item">
									<div className="card-item-tit">
										<a href={() => false} className="card-item-link">
											<h3>Badges</h3>
										</a>
										<span>보유중인 전체 Badge 갯수</span>
									</div>
									<div className="card-item-con hei">
										<div className="card-gauge-bar">
											<span className="gauge-tit">MY Badges</span>
											<div className="card-gauge-bar sty2 myBadges">
												<div className="rangeBox">
													<div className="range">
														<div
															style={isVisible ? { width: '40%' } : { width: 0 }}
															className="percent"
														></div>
													</div>
												</div>
											</div>
											<span className="gauge-number">
												<strong>23</strong>개
											</span>
										</div>
										<div className="card-gauge-bar">
											<span className="gauge-tit">우리 회사 평균</span>
											<div className="card-gauge-bar sty2">
												<div className="rangeBox">
													<div className="range">
														<div
															style={isVisible ? { width: '30%' } : { width: 0 }}
															className="percent"
														></div>
													</div>
												</div>
											</div>
											<span className="gauge-number">
												<strong>10</strong>개
											</span>
										</div>
									</div>
								</div>
								<div className="personal-card-item">
									<div className="card-item-tit">
										<a href={() => false} className="card-item-link">
											<h3>학습 시간</h3>
										</a>
										<span>2021년 완료 학습</span>
									</div>
									<div className="card-item-con">
										<div className="card-gauge-bar">
											<span className="gauge-tit">MY 학습시간</span>
											<div className="card-gauge-bar sty2 myLearning">
												<div className="rangeBox">
													<div className="range">
														<div
															style={isVisible ? { width: '15%' } : { width: 0 }}
															className="percent"
														></div>
													</div>
												</div>
											</div>
											<span className="gauge-number">
												<strong>63</strong>h&nbsp;<strong>58</strong>m
											</span>
										</div>
										<div className="card-gauge-bar">
											<span className="gauge-tit">우리 회사 평균</span>
											<div className="card-gauge-bar sty2">
												<div className="rangeBox">
													<div className="range">
														<div
															style={isVisible ? { width: '30%' } : { width: 0 }}
															className="percent"
														></div>
													</div>
												</div>
											</div>
											<span className="gauge-number">
												<strong>80</strong>h&nbsp;<strong>30</strong>m
											</span>
										</div>
									</div>
								</div>
							</div>

							<div className='personal-card-item-box'>
								<div className="personal-card-item ">
									<div className="card-item-tit mb23">
										<a href={() => false} className="card-item-link">
											<h3>학습 시간 상세</h3>
										</a>
										<span>2021년 기준</span>
									</div>
									<div className="card-item-con sty2">
										<div className="item-con-box">
											<div className="item-con-left detail">
												<img src={gr_img} alt="" />
											</div>
											<div className="item-con-right detail">
												<div className="card-gauge-bar type2">
													<div className="gauge-number sv">
														<em className="col-con">mySUNI</em>
														<div>
															<strong>
																22<em>h</em>
															</strong>
															<strong>
																40<em>m</em>
															</strong>
														</div>
													</div>
													<div className="gauge-number mana">
														<em className="col-con">관계사</em>
														<div>
															<strong>
																8<em>h</em>
															</strong>
															<strong>
																23<em>m</em>
															</strong>
														</div>
													</div>
													<div className="gauge-number semi">
														<em className="col-con">강의시간</em>
														<div>
															<strong>
																17<em>h</em>
															</strong>
															<strong>
																8<em>m</em>
															</strong>
														</div>
													</div>
													<div className="gauge-number stu">
														<em className="col-con">개인학습</em>
														<div>
															<strong>
																3<em>h</em>
															</strong>
															<strong>
																39<em>m</em>
															</strong>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='personal-card-item-box'>
								<div className="personal-card-item">
									<div className="card-item-tit mb18">
										<a href={() => false} className="card-item-link">
											<h3>Category별 학습 비중</h3>
										</a>
										<span>2022년 Top5</span>
									</div>
									<div className="card-item-con sty2">
										<div className="item-con-box">
											<div className="item-con-left">
												<div className="card-gauge-bar sty2 global">
													<div className="rangeBox">
														<div className="range">
															<div
																style={!isVisible ? { width: 0 } : { width: '100%' }}
																className="percent"
															></div>
														</div>
													</div>
												</div>
												<div className="card-gauge-bar sty2 sv">
													<div className="rangeBox">
														<div className="range">
															<div
																style={!isVisible ? { width: 0 } : { width: '24%' }}
																className="percent"
															></div>
														</div>
													</div>
												</div>
												<div className="card-gauge-bar sty2 semi">
													<div className="rangeBox">
														<div className="range">
															<div
																style={!isVisible ? { width: 0 } : { width: '15%' }}
																className="percent"
															></div>
														</div>
													</div>
												</div>
												<div className="card-gauge-bar sty2 manage">
													<div className="rangeBox">
														<div className="range">
															<div
																style={!isVisible ? { width: 0 } : { width: '75%' }}
																className="percent"
															></div>
														</div>
													</div>
												</div>
												<div className="card-gauge-bar sty2 inno">
													<div className="rangeBox">
														<div className="range">
															<div
																style={!isVisible ? { width: 0 } : { width: '13%' }}
																className="percent"
															></div>
														</div>
													</div>
												</div>
											</div>
											<div className="item-con-right">
												<div className="card-gauge-bar">
													<div className="gauge-number global">
														<em className="col-con">Global</em>
														<strong>
															32<em>%</em>
														</strong>
													</div>
													<div className="gauge-number sv">
														<em className="col-con">SV</em>
														<strong>
															24<em>%</em>
														</strong>
													</div>
													<div className="gauge-number semi">
														<em className="col-con">반도체</em>
														<strong>
															10<em>%</em>
														</strong>
													</div>
													<div className="gauge-number manage">
														<em className="col-con">Management</em>
														<strong>
															8<em>%</em>
														</strong>
													</div>
													<div className="gauge-number inno">
														<em className="col-con">혁신디자인</em>
														<strong>
															5<em>%</em>
														</strong>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="personal-card-item right-card">
							<div className="card-item-tit">
								<h3>우리 회사 인기 코스</h3>
								<span>2021.01.28~2021.02.03</span>
							</div>
							<div className="card-item-con">
								<PersonalTab />
							</div>
						</div>
					</div>
				</div>
				<Dimmer className="dimm_zidx" active={isVisible} page />

			</>
		);
	}
}



export default MyLearningInfoArea;
