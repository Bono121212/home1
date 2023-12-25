import React from "react";
import { Tab } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import CourseBook from "../../../../../images/all/icon-course-book.png";
import manageImg01 from "../../../../../images/all/in-02-01-c-08-00-01-v-2.png";
import manageImg02 from "../../../../../images/all/in-02-01-c-08-00-02-v-2.png";
import manageImg21 from "../../../../../images/all/in-c-08-02-v-2.png";
import manageImg31 from "../../../../../images/all/in-c-08-03-v-2.png";
import manageImg41 from "../../../../../images/all/in-c-08-04-v-2.png";
import manageImg51 from "../../../../../images/all/in-c-08-05-v-2.png";
import manageImg61 from "../../../../../images/all/in-c-08-06-v-2.png";
import manageImg71 from "../../../../../images/all/in-c-08-07-v-2.png";
import manageImg81 from "../../../../../images/all/in-c-08-08-v-2.png";
import manageImg01Eng from "../../../../../images/all/in-02-01-c-08-00-01-eng-v-2.png";
import manageImg02Eng from "../../../../../images/all/in-02-01-c-08-00-02-eng-v-2.png";
import manageImg21Eng from "../../../../../images/all/in-c-08-02-eng-v-2.png";
import manageImg31Eng from "../../../../../images/all/in-c-08-03-eng-v-2.png";
import manageImg41Eng from "../../../../../images/all/in-c-08-04-eng-v-2.png";
import manageImg51Eng from "../../../../../images/all/in-c-08-05-eng-v-2.png";
import manageImg61Eng from "../../../../../images/all/in-c-08-06-eng-v-2.png";
import manageImg71Eng from "../../../../../images/all/in-c-08-07-eng-v-2.png";
import manageImg81Eng from "../../../../../images/all/in-c-08-08-eng-v-2.png";
import manageImg01Chn from "../../../../../images/all/in-02-01-c-08-00-01-chn-v-2.png";
import manageImg02Chn from "../../../../../images/all/in-02-01-c-08-00-02-chn-v-2.png";
import manageImg21Chn from "../../../../../images/all/in-c-08-02-chn-v-2.png";
import manageImg31Chn from "../../../../../images/all/in-c-08-03-chn-v-2.png";
import manageImg41Chn from "../../../../../images/all/in-c-08-04-chn-v-2.png";
import manageImg51Chn from "../../../../../images/all/in-c-08-05-chn-v-2.png";
import manageImg61Chn from "../../../../../images/all/in-c-08-06-chn-v-2.png";
import manageImg71Chn from "../../../../../images/all/in-c-08-07-chn-v-2.png";
import manageImg81Chn from "../../../../../images/all/in-c-08-08-chn-v-2.png";
import './style.css';

const panes = [
	{
		menuItem: "Management 소개",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt00">
					<div className="college-cont-map mgmt">
						<div className="belt">
							<div className="guide-area">
								<div className="guide-text"><p className="p_link">각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.</p></div>
								<div className="guide-btn">
									<Link
										to="https://mysuni.sk.com/suni-main/lecture/category/CLG00008/channels/pages/2"
										className="item-button"
									>
										<img src={CourseBook} alt="courseImage" />
										과정 바로가기
									</Link>
								</div>
							</div>
							<div className="belt-title">
								<strong className="tit">Management Learning Path</strong>
								<p className="sub-text">Function별 필요한 기초적인 기본 지식에서 실무자가 알아야 할 컨텐츠와 기능별 Specialist로의 인증까지<br />각 Function의 단계별 Learning Path를 따라 학습해보세요.</p>
							</div>
						</div>
						<div className="belt">
							<img src={manageImg01} alt="Management Learning Path" />
						</div>

					</div>
					<div className="college-cont-map mgmt">
						<div className="belt">
							<div className="map-area">
								<img src={manageImg02} alt="Management Badge 체계" useMap="#Map" />
								<map name="Map">
									<area
										shape="rect"
										coords="232,567,346,652"
										href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-46`}
										alt="Strategy Essentials"
									/>
									<area
										shape="rect"
										coords="232,661,347,746"
										href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-30`}
										alt="조직 Design"
									/>
									<area
										shape="rect"
										coords="354,567,469,746"
										href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-49`}
										alt="회계 Essentials"
									/>
									<area
										shape="rect"
										coords="476,567,590,621"
										href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-4a`}
										alt="마케팅 Essentials"
									/>
									<area
										shape="rect"
										coords="476,629,590,685"
										href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-4c`}
										alt="브랜드 Essentials"
									/>
									<area
										shape="rect"
										coords="476,693,590,746"
										onClick={() => alert('준비중입니다.')}
										alt="Data 마케팅 101"
									/>
									<area
										shape="rect"
										coords="597,567,712,746"
										href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-4b`}
										alt="HR Essentials"
									/>
									<area
										shape="rect"
										coords="720,378,834,558"
										onClick={() => alert('준비중입니다.')}
										alt="구매 Advanced"
									/>
									<area
										shape="rect"
										coords="720,567,834,746"
										href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-4g`}
										alt="구매 Essentials"
									/>
									<area
										shape="rect"
										coords="843,378,956,464"
										onClick={() => alert('준비중입니다.')}
										alt="회사법 Advanced"
									/>
									<area
										shape="rect"
										coords="843,473,956,558"
										href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-4d`}
										alt="공정거래법 Advanced"
									/>
									<area
										shape="rect"
										coords="964,378,1078,432"
										onClick={() => alert('준비중입니다.')}
										alt="특허관리"
									/>
									<area
										shape="rect"
										coords="964,440,1078,495"
										onClick={() => alert('준비중입니다.')}
										alt="특허분쟁"
									/>
									<area
										shape="rect"
										coords="964,503,1078,559"
										onClick={() => alert('준비중입니다.')}
										alt="특허경영"
									/>
									<area
										shape="rect"
										coords="964,567,1078,746"
										href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-4e`}
										alt="IP Mindset Essentials"
									/>
									<area
										shape="rect"
										coords="1086,567,1198,653"
										href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-4f`}
										alt="Negotiation Essentials"
									/>
									<area
										shape="rect"
										coords="1086,662,1198,746"
										href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-44`}
										alt="Measurement Essentials"
									/>
								</map>
							</div>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "전략/조직 설계",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area">
							<div className="guide-btn">
								<Link
									to="https://mysuni.sk.com/suni-main/lecture/category/CLG00008/channel/CHN00014"
									className="item-button"
								>
									<img src={CourseBook} alt="" />
									과정 바로가기
								</Link>
							</div>
						</div>

						<div className="college-sub-txt">
							<strong>전략/조직 설계</strong>
							<div>
								<ul>
									<li>
										‘전략/조직 설계’ 에서는 각각 전략 실무자와 단위 조직 리더를 대상으로 전략 실행 역량 제고를 위한 학습 컨텐츠를<br />제공합니다.
									</li>
									<li>
										전략 Staff과 단위 조직 리더의 ‘전략 실행 역량’ 강화를 위해 전략 및 조직 설계의 핵심 개념/원칙과 방법론을 제공하고,<br />Deep Change 주요 Context와 경영 성과관리 및 조직 설계 간 연계 방안을 모색합니다.
									</li>
								</ul>
								<p className="p_link">
									각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
								</p>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg21} className="manage_cate" alt="전략/조직 설계 Flow" useMap="#Map" />
							<map name="Map">
								<area
									shape="rect"
									coords="408,228,502,250"
									onClick={() => alert('준비중입니다.')}
									alt="경영 성과관리"
								/>
								<area
									shape="rect"
									coords="219,353,370,434"
									onClick={() => alert('준비중입니다.')}
									alt="자본시장 속 신사업 성과를 바라보는 시각"
								/>
								<area
									shape="rect"
									coords="379,353,530,434"
									onClick={() => alert('준비중입니다.')}
									alt="Global 전략 內 균형 있는 성과관리 방안"
								/>
								<area
									shape="rect"
									coords="539,353,690,434"
									onClick={() => alert('준비중입니다.')}
									alt="ESG  경영을 위한 전략적 성과관리란?"
								/>
								<area
									shape="rect"
									coords="219,442,690,523"
									onClick={() => alert('준비중입니다.')}
									alt="전략 실행과 경영 성과관리"
								/>
								<area
									shape="rect"
									coords="891,223,1020,252"
									onClick={() => alert('준비중입니다.')}
									alt="조직 Self-Design"
								/>
								<area
									shape="rect"
									coords="720,269,1190,310"
									onClick={() => alert('준비중입니다.')}
									alt="조직 설계 Workshop"
								/>
								<area
									shape="rect"
									coords="720,353,832,434"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-141y/view`}
									alt="괴짜에서 Normal로!"
								/>
								<area
									shape="rect"
									coords="720,443,832,524"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-141z/view`}
									alt="Customer centric 조직으로의 진화"
								/>
								<area
									shape="rect"
									coords="720,533,832,614"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-15j4/view`}
									alt="하이닉스 End 2 End R&amp;D 조직"
								/>
								<area
									shape="rect"
									coords="839,353,951,434"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1423/view`}
									alt="EX와 조직 설계"
								/>
								<area
									shape="rect"
									coords="959,353,1071,434"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-ah5/view`}
									alt="양손잡이 기업의 비밀"
								/>
								<area
									shape="rect"
									coords="959,443,1071,524"
									onClick={() => alert('준비중입니다.')}
									alt="Intrapreneur 기반  신사업 조직 설계"
								/>
								<area
									shape="rect"
									coords="1079,353,1191,434"
									onClick={() => alert('준비중입니다.')}
									alt="Global 조직 설계 Fundamental"
								/>
								<area
									shape="rect"
									coords="1079,443,1191,524"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-6pt/view`}
									alt="미래 기술을 흡수할 수 있었던 Google 조직 설계 비결"
								/>
								<area
									shape="rect"
									coords="720,623,951,704"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-15iz/view`}
									alt="경영 환경 변화에 따른 조직 설계 Challenge"
								/>
								<area
									shape="rect"
									coords="960,623,1191,704"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-6r9/view`}
									alt="SV를 잘하기 위한 조직은 어떻게 해야 할까?"
								/>
								<area
									shape="rect"
									coords="398,742,511,769"
									onClick={() => alert('준비중입니다.')}
									alt="경영전략의 기본"
								/>
								<area
									shape="rect"
									coords="220,787,691,828"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14n6/view`}
									alt="미래와 전략의 만남, 리얼 옵션"
								/>
								<area
									shape="rect"
									coords="346,856,564,884"
									href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-40`}
									alt="Scenario Planning Essentials"
								/>
								<area
									shape="rect"
									coords="229,901,451,963"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-5en/view`}
									alt="미래와 전략의 만남, Scenario Planning : Basic"
								/>
								<area
									shape="rect"
									coords="459,901,681,963"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1et/view`}
									alt="Futurecasting"
								/>
								<area
									shape="rect"
									coords="229,971,451,1033"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-5v4/cube/CUBE-8ba/view/Video`}
									alt="How to manage Geopolitical Uncertainties?"
								/>
								<area
									shape="rect"
									coords="459,971,681,1033"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-648/view`}
									alt="미래와 전략의 만남, S. Planning : Case Study"
								/>
								<area
									shape="rect"
									coords="382,1067,529,1097"
									href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-46`}
									alt="Strategy Essentials"
								/>
								<area
									shape="rect"
									coords="229,1114,681,1157"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-9m5/view`}
									alt="전략 101: 어서 와, 전략은 처음이지?"
								/>
								<area
									shape="rect"
									coords="229,1164,681,1207"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a4f/view`}
									alt="전략 수립의 시작, 경영환경분석"
								/>
								<area
									shape="rect"
									coords="229,1214,681,1257"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a2s/view`}
									alt="All about Portfolio Strategy"
								/>
								<area
									shape="rect"
									coords="768,740,898,796"
									onClick={() => alert('준비중입니다.')}
									alt="조직 Self-Design Essentials"
								/>
								<area
									shape="rect"
									coords="730,811,941,871"
									onClick={() => alert('준비중입니다.')}
									alt="SK 리더들의 조직 설계 Reflection(예정)"
								/>
								<area
									shape="rect"
									coords="730,881,941,941"
									onClick={() => alert('준비중입니다.')}
									alt="리더를 위한 조직 Self-Design 실전(예정)"
								/>
								<area
									shape="rect"
									coords="730,951,941,1011"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-15j2/view`}
									alt="조직 설계 기초 Framework"
								/>
								<area
									shape="rect"
									coords="730,1021,941,1081"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-15iy/view`}
									alt="조직 설계 101"
								/>
								<area
									shape="rect"
									coords="730,1091,941,1151"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-15if/view`}
									alt="조직 Self-Design과 Deep Change"
								/>
								<area
									shape="rect"
									coords="960,811,1191,871"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-6b6/view`}
									alt="리더를 위한 조직 설계 Tip: Smart Design"
								/>
								<area
									shape="rect"
									coords="960,881,1191,941"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-83t/view`}
									alt="중장기 관점의 조직 설계 실무 Approach"
								/>
								<area
									shape="rect"
									coords="960,951,1191,1011"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-83p/view`}
									alt="조직 설계 방법론"
								/>
								<area
									shape="rect"
									coords="960,1021,1191,1081"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-6qg/view`}
									alt="차근차근 알아가는 조직 설계 길라잡이"
								/>
							</map>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "재무",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area">
							<div className="guide-btn">
								<Link
									to="https://mysuni.sk.com/suni-main/lecture/category/CLG00008/channel/CHN0005w"
									className="item-button"
								>
									<img src={CourseBook} alt="" />
									과정 바로가기
								</Link>
							</div>
						</div>
						<div className="college-sub-txt">
							<strong>재무</strong>
							<div>
								<ul>
									<li>
										Financial Story 실행 및 실질적 성과 창출에 기반이 될 수 있도록 재무기획/투자, 자금/금융, 재무회계, 세무회계 등<br />재무 전 영역에 걸쳐서 필요한 학습 기본기와 Practice 중심의 실무 심화 학습 컨텐츠를 제공합니다.
									</li>
									<li>
										재무 실무자를 위한 기본과정 - Adv. 직무 심화 과정 - 전문가 과정까지 세부 직무별/단계별 커리큘럼으로 구성되어<br />
										있습니다. 또한, 기초 회계 과정을 통해 비전공/입문자도 회계 기초를 다질 수 있습니다.
									</li>
								</ul>
								<p className="p_link">
									각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
								</p>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg31} alt="재무 Flow" useMap="#Map" />
							<map name="Map">
								<area
									shape="rect"
									coords="209,136,451,216"
									onClick={() => alert('준비중입니다.')}
									alt="자본시장 전문가"
								/>
								<area
									shape="rect"
									coords="209,343,1201,387"
									onClick={() => alert('준비중입니다.')}
									alt="직무전문역량 Workshop"
								/>
								<area
									shape="rect"
									coords="209,393,451,436"
									href={'https://int.mysuni.sk.com/login?contentUrl=/suni-main/lecture/card/CARD-15qf/view'}
									alt="재무제표 분석 실무"
								/>
								<area
									shape="rect"
									coords="459,393,701,436"
									href={'https://int.mysuni.sk.com/login?contentUrl=/suni-main/lecture/card/CARD-15qe/view'}
									alt="자금관리와 금융 실무"
								/>
								<area
									shape="rect"
									coords="709,393,951,436"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1569/view`}
									alt="사례 중심의 재무회계실무"
								/>
								<area
									shape="rect"
									coords="959,393,1201,436"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-155n/view`}
									alt="사례 중심의 세무회계실무"
								/>
								<area
									shape="rect"
									coords="209,445,451,486"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1565/view`}
									alt="한 달 만에 끝내는 경영분석실무"
								/>
								<area
									shape="rect"
									coords="209,495,451,556"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14d7/view`}
									alt="M&amp;A 전략의 성공적인 의사결정을 위한 재무회계 실무"
								/>
								<area
									shape="rect"
									coords="209,565,451,626"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14mm/view`}
									alt="분할 전략의 성공적인 의사결정을 위한 재무회계 실무"
								/>
								<area
									shape="rect"
									coords="209,635,451,676"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14n3/view`}
									alt="효과적인 M&amp;A를 위한 재무실사(FDD)"
								/>
								<area
									shape="rect"
									coords="209,715,451,776"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-155l/view`}
									alt="한 달 만에 끝내는 사업타당성분석"
								/>
								<area
									shape="rect"
									coords="209,785,451,846"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1563/view`}
									alt="한 달 만에 끝내는 기업가치평가"
								/>
								<area
									shape="rect"
									coords="209,855,451,916"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-155b/view`}
									alt="한 달 만에 끝내는 재무제표분석"
								/>
								<area
									shape="rect"
									coords="459,715,701,776"
									href={'https://int.mysuni.sk.com/login?contentUrl=/suni-main/lecture/card/CARD-15qd/view'}
									alt="자금관리와 금융 기초"
								/>
								<area
									shape="rect"
									coords="959,715,1201,776"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1567/view`}
									alt="세무회계의 정석"
								/>
								<area
									shape="rect"
									coords="209,955,701,996"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-155c/view`}
									alt="전사원이 함께하는 회계원리"
								/>
								<area
									shape="rect"
									coords="709,955,1201,996"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-155a/view`}
									alt="한 달 만에 끝내는 원가·관리회계 기초"
								/>
								<area
									shape="rect"
									coords="647,1023,763,1051"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14p2/view`}
									alt="회계 Essentials"
								/>
								<area
									shape="rect"
									coords="219,1069,456,1111"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a4j/view`}
									alt="기업가치, 무엇이고 어떻게 평가하는가?"
								/>
								<area
									shape="rect"
									coords="465,1069,701,1111"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a2x/view`}
									alt="Fun-Fun한 회계"
								/>
								<area
									shape="rect"
									coords="708,1069,947,1111"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a4x/view`}
									alt="처음 만나는 원가/관리회계"
								/>
								<area
									shape="rect"
									coords="955,1069,1191,1111"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a6f/view`}
									alt="세무회계 실무 첫걸음"
								/>
								<area
									shape="rect"
									coords="219,1119,456,1159"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a4o/view`}
									alt="재무관리 101"
								/>
								<area
									shape="rect"
									coords="465,1119,701,1159"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a4r/view`}
									alt="하나씩 쉽게, 계정과목 별 회계처리"
								/>
								<area
									shape="rect"
									coords="708,1119,947,1159"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a65/view`}
									alt="궁금해요, 내부회계관리제도"
								/>
							</map>
						</div>
					</div>
				</div>

			</Tab.Pane>
		),
	},
	{
		menuItem: "마케팅",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area">
							<div className="guide-btn">
								<Link
									to="https://mysuni.sk.com/suni-main/lecture/category/CLG00008/channel/CHN00018"
									className="item-button"
								>
									<img src={CourseBook} alt="" />
									과정 바로가기
								</Link>
							</div>
						</div>
						<div className="college-sub-txt">
							<strong>마케팅</strong>
							<div>
								<ul>
									<li>
										Customer Value 창출/전달/소통 관련 다양한 제반 지식과 Framework 을 체계적으로 학습함으로써 실무 문제 해결을<br />위한 Perspective 를 제공합니다.
									</li>
									<li>
										B2C 마케팅 업무 고도화를 위한 ‘Data 마케팅’ 과정과, Value Chain 전반의 통합적 이해/실행력 제고를 위한 ‘B2B<br />Pipeline Mgmt.’ 실습 과정 등을 통해 SK 마케터들의 Up/Re-skilling 에 Focus 합니다.
									</li>
								</ul>
								<p className="p_link">
									각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
								</p>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg41} alt="마케팅 Flow" useMap="#Map" />
							<map name="Map">
								<area
									shape="rect"
									coords="210,97,450,177"
									onClick={() => alert('준비중입니다.')}
									alt="B2C DT 마케팅 Expert"
								/>
								<area
									shape="rect"
									coords="210,305,450,386"
									onClick={() => alert('준비중입니다.')}
									alt="B2C Data Driven 마케팅"
								/>
								<area
									shape="rect"
									coords="710,305,950,386"
									onClick={() => alert('준비중입니다.')}
									alt="B2B 마케팅Pipeline Management"
								/>
								<area
									shape="rect"
									coords="210,489,450,530"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-aj5/view`}
									alt="마케팅 조사론 1 (정성 조사)"
								/>
								<area
									shape="rect"
									coords="210,539,450,580"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12qg/view`}
									alt="마케팅 조사론 2 (정량 조사)"
								/>
								<area
									shape="rect"
									coords="266,606,396,637"
									onClick={() => alert('준비중입니다.')}
									alt="Data 마케팅 101"
								/>
								<area
									shape="rect"
									coords="220,654,440,695"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-9es/view`}
									alt="Data 마케팅 Transformation"
								/>
								<area
									shape="rect"
									coords="220,704,440,745"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-9fl/view`}
									alt="디지털 채널 경쟁력 분석"
								/>
								<area
									shape="rect"
									coords="220,754,440,795"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-9oe/view`}
									alt="Performance 마케팅"
								/>
								<area
									shape="rect"
									coords="220,804,440,845"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-aa1/view`}
									alt="Brand New Wave: AI MKT"
								/>
								<area
									shape="rect"
									coords="220,854,440,895"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-9f7/view`}
									alt="SK의 고객 기반 Deep Change"
								/>
								<area
									shape="rect"
									coords="460,489,700,530"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14gc/view`}
									alt="마케팅 Mega Trend"
								/>
								<area
									shape="rect"
									coords="460,539,700,580"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14gd/view`}
									alt="고객 가치 전달 원리"
								/>
								<area
									shape="rect"
									coords="498,606,663,636"
									href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-4a`}
									alt="Marketing Essentials"
								/>
								<area
									shape="rect"
									coords="470,654,690,695"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-9ok/view`}
									alt="키워드로 배우는 마케팅 101"
								/>
								<area
									shape="rect"
									coords="470,704,690,745"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-9op/view`}
									alt="사례로 배우는 상품기획 101"
								/>
								<area
									shape="rect"
									coords="470,754,690,795"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-9ou/view`}
									alt="사례로 배우는 B2B MKT 101"
								/>
								<area
									shape="rect"
									coords="470,804,690,845"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a4g/view`}
									alt="Global 마케팅 사례 분석"
								/>
								<area
									shape="rect"
									coords="470,854,690,895"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-ai3/view`}
									alt="마케팅 Framework &amp; Tool"
								/>
								<area
									shape="rect"
									coords="710,489,950,530"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14gh/view`}
									alt="B2B 마케팅신조류"
								/>
								<area
									shape="rect"
									coords="710,539,950,580"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14gg/view`}
									alt="B2C 마케팅신조류"
								/>
								<area
									shape="rect"
									coords="764,606,897,636"
									href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-4c`}
									alt="Brand Essentials"
								/>
								<area
									shape="rect"
									coords="720,654,940,695"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a26/chapter/-a08`}
									alt="Sources of Brand Equity"
								/>
								<area
									shape="rect"
									coords="720,704,940,745"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a26/chapter/-a0a`}
									alt="전략적 브랜드 관리의 Key"
								/>
								<area
									shape="rect"
									coords="720,754,940,795"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a26/chapter/-a0b`}
									alt="Brand Identity System"
								/>
								<area
									shape="rect"
									coords="720,804,940,845"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a26/chapter/-a0c`}
									alt="브랜드 관리와 소비자 행동"
								/>
								<area
									shape="rect"
									coords="720,854,940,895"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a26/chapter/-a0d`}
									alt="브랜드 Communication"
								/>
								<area
									shape="rect"
									coords="960,489,1200,530"
									onClick={() => alert('준비중입니다.')}
									alt="B2B 실무 101"
								/>
								<area
									shape="rect"
									coords="960,754,1200,795"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-6mg/view`}
									alt="Mastercard의 DT 성공전략"
								/>
								<area
									shape="rect"
									coords="960,804,1200,845"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14j/view`}
									alt="디지털 마케팅 Trend &amp; Case"
								/>
								<area
									shape="rect"
									coords="960,854,1200,895"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-az1/view`}
									alt="PR 과정"
								/>
							</map>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "HR",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area">
							<div className="guide-btn">
								<Link
									to="https://mysuni.sk.com/suni-main/lecture/category/CLG00008/channel/CHN00013"
									className="item-button"
								>
									<img src={CourseBook} alt="" />
									과정 바로가기
								</Link>
							</div>
						</div>
						<div className="college-sub-txt">
							<strong>HR</strong>
							<div>
								<ul>
									<li>
										HR의 직무 단위 기초 지식을 함양하고 미래 HR 변화 Trend 및 Insight 제공을 통해 의식전환, 제도 변화, 기술 활용 측면의<br />HR 이해에 Focus 합니다.
									</li>
									<li>
										<strong>1. HR 실무에 기반한 기초 이해 및 방법론/Practice</strong>와 <strong>2. 미래 HR 변화 대응 관점에서 HR 담당자들의 업무 실행력과<br />Insight 확대</strong>를 위한 체계적인 컨텐츠를 제공합니다.
									</li>
								</ul>
								<p className="p_link">
									각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
								</p>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg51} alt="HR Flow" useMap="#Map" />
							<map name="Map">
								<area
									shape="rect"
									coords="614,314,798,343"
									onClick={() => alert('준비중입니다.')}
									alt="HR Intensive W/S"
								/>
								<area
									shape="rect"
									coords="220,357,535,438"
									onClick={() => alert('준비중입니다.')}
									alt="Data Driven HR"
								/>
								<area
									shape="rect"
									coords="545,357,865,438"
									onClick={() => alert('준비중입니다.')}
									alt="Experience Design"
								/>
								<area
									shape="rect"
									coords="875,357,1190,438"
									onClick={() => alert('준비중입니다.')}
									alt="M&amp;A Professional"
								/>
								<area
									shape="rect"
									coords="648,504,760,534"
									href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-4b`}
									alt="HR Essentials"
								/>
								<area
									shape="rect"
									coords="220,550,701,592"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a6x/view`}
									alt="인력 확보/운영"
								/>
								<area
									shape="rect"
									coords="220,600,701,642"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a6y/view`}
									alt="직무 관리"
								/>
								<area
									shape="rect"
									coords="220,650,701,692"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a74/view`}
									alt="ER (협의회 ER Seminar)"
								/>
								<area
									shape="rect"
									coords="220,700,701,742"
									onClick={() => alert('준비중입니다.')}
									alt="육성"
								/>
								<area
									shape="rect"
									coords="710,550,1191,592"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a71/view`}
									alt="성과관리"
								/>
								<area
									shape="rect"
									coords="710,600,1191,642"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a72/view`}
									alt="보상"
								/>
								<area
									shape="rect"
									coords="710,650,1191,692"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a73/view`}
									alt="Global HR"
								/>
								<area
									shape="rect"
									coords="710,700,1191,742"
									onClick={() => alert('준비중입니다.')}
									alt="조직개발"
								/>
								<area
									shape="rect"
									coords="541,154,873,199"
									alt="“Strategic HR Expert Program” (T.B.D)"
								/>
							</map>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "SCM/Operation",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area">
							<div className="guide-btn">
								<Link
									to="https://mysuni.sk.com/suni-main/lecture/category/CLG00008/channel/CHN0007m"
									className="item-button"
								>
									<img src={CourseBook} alt="" />
									과정 바로가기
								</Link>
							</div>
						</div>
						<div className="college-sub-txt">
							<strong>SCM/Operation</strong>
							<div>
								<ul>
									<li>
										SCM/Operation 관련 구성원을 대상으로 고객에게 차별화된 상품/서비스를 적시에 적정 가격으로 제공하기 위한<br />‘공급망 관리’ 컨텐츠를 제공합니다.
									</li>
									<li>
										SCM의 기초 지식과 구매의 기초 개념 및 방법론 기반으로, 워크샵을 통해 SCM/구매 실무자를 위한 핵심 Tip을<br />전달합니다.
									</li>
								</ul>
								<p className="p_link">
									각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
								</p>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg61} alt="SCM/Operation Flow" useMap="#Map" />
							<map name="Map">
								<area
									shape="rect"
									coords="209,155,700,235"
									onClick={() => alert('준비중입니다.')}
									alt="Risk 최소화를 위한 공급망 관리(SCM)  핵심 Tips"
								/>
								<area
									shape="rect"
									coords="709,155,1200,235"
									onClick={() => alert('준비중입니다.')}
									alt="구매 실무자를 위한 Must-Know Tips"
								/>
								<area
									shape="rect"
									coords="209,315,700,355"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14r8/view`}
									alt="Apple과 Toyota를 움직이는 핵심역량 - SCM의 이해와 사례 -"
								/>
								<area
									shape="rect"
									coords="709,315,1200,355"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14hb/view`}
									alt="틀을 깨라! Procurement 혁신"
								/>
								<area
									shape="rect"
									coords="897,384,1012,410"
									href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-4g`}
									alt="구매 Essentials"
								/>
								<area
									shape="rect"
									coords="720,428,1193,468"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-9qt/view`}
									alt="나는 진정한 구매인인가? 구매의 본질"
								/>
								<area
									shape="rect"
									coords="720,478,1193,518"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-9qs/view`}
									alt="구매의 큰 그림 보기, 구매 업무 프로세스 이해 및 활용"
								/>
								<area
									shape="rect"
									coords="720,528,1193,568"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-9qr/view`}
									alt="나는 무엇을 구매하고 있나? 구매 품목의 이해 및 관리"
								/>
								<area
									shape="rect"
									coords="720,578,1193,618"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-9qq/view`}
									alt="구매의 중요한 역할! 구매 원가 관리"
								/>
								<area
									shape="rect"
									coords="720,628,1193,668"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-9qp/view`}
									alt="모르면 큰 코 다치는, 구매 계약/구매 관련 법규 이해"
								/>
								<area
									shape="rect"
									coords="720,678,1193,718"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-9qo/view`}
									alt="알 수록 돈 버는, 구매인을 위한 재무/회계/물류"
								/>
								<area
									shape="rect"
									coords="720,728,1193,768"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-9qn/view`}
									alt="방심은 금물! 구매 위험 관리"
								/>
								<area
									shape="rect"
									coords="720,778,1193,818"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-9qm/view`}
									alt="디지털로 스마트해지는 구매, 디지털 구매 혁신"
								/>
								<area
									shape="rect"
									coords="720,828,1193,868"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-9ql/view`}
									alt="다음 단계를 생각하는 기업의 사회적 가치와 구매"
								/>
								<area
									shape="rect"
									coords="720,878,1193,918"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a7w/view`}
									alt="시뮬레이션을 통해 알아보는 실전 구매전략"
								/>
							</map>
						</div>
					</div>
				</div>

			</Tab.Pane>
		),
	},
	{
		menuItem: "법무",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area">
							<div className="guide-btn">
								<Link
									to="https://mysuni.sk.com/suni-main/lecture/category/CLG00008/channel/CHN0007l"
									className="item-button"
								>
									<img src={CourseBook} alt="" />
									과정 바로가기
								</Link>
							</div>
						</div>
						<div className="college-sub-txt">
							<strong>법무</strong>
							<div>
								<ul>
									<li>
										법무 영역에서는 Legal Risk의 사전적 예방과 실제 Risk 발생 시의 해결 방안을 제시하는 과정을 제공합니다.
									</li>
									<li>
										공정거래법과 회사법의 주요 내용과 개정 상의 시사점을 살펴 보고, 법률 이슈와 대응 방안을 제시합니다.
									</li>
								</ul>
								<p className="p_link">
									각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
								</p>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg71} alt="법무 Flow" useMap="#Map" />
							<map name="Map">
								<area
									shape="rect"
									coords="219,120,700,160"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12zc/view`}
									alt="[webinar] 플랫폼 경쟁법: 구글쇼핑 사건과 자기우대(self-preferencing) 규제"
								/>
								<area
									shape="rect"
									coords="219,170,700,210"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-ag9/view`}
									alt="[webinar] 중대재해처벌법의 주요 쟁점 및 대응방안"
								/>
								<area
									shape="rect"
									coords="219,220,700,260"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5z/view`}
									alt="[webinar] 개정상법/공정거래법의 주요내용, 실무적 유의사항 및 관련 규제 동향"
								/>
								<area
									shape="rect"
									coords="219,270,700,310"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14m5/view`}
									alt="[webinar] 기업지배구조 및 주주총회 운영 관련 최근 쟁점 및 시사점"
								/>
								<area
									shape="rect"
									coords="378,420,531,451"
									href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-4d`}
									alt="공정거래법 Advanced"
								/>
								<area
									shape="rect"
									coords="219,468,692,508"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5y/view`}
									alt="[공정거래법] ① 공정거래법 이해 및 정책동향"
								/>
								<area
									shape="rect"
									coords="219,518,692,558"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5x/view`}
									alt="[공정거래법] ② 부당지원, 사익편취"
								/>
								<area
									shape="rect"
									coords="219,568,692,608"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5w/view`}
									alt="[공정거래법] ③ 불공정거래와 부당표시광고"
								/>
								<area
									shape="rect"
									coords="219,618,692,658"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5v/view`}
									alt="[공정거래법] ④ 경제력 집중 억제"
								/>
								<area
									shape="rect"
									coords="219,668,692,708"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5u/view`}
									alt="[공정거래법] ⑤ 기업결합의 제한"
								/>
								<area
									shape="rect"
									coords="219,718,692,758"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5t/view`}
									alt="[공정거래법] ⑥ 시장지배적지위 남용행위"
								/>
								<area
									shape="rect"
									coords="219,768,692,808"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5s/view`}
									alt="[공정거래법] ⑦ 부당한 공동행위"
								/>
								<area
									shape="rect"
									coords="219,818,692,858"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5r/view`}
									alt="[공정거래법] ⑧ 하도급법"
								/>
								<area
									shape="rect"
									coords="709,120,1190,160"
									onClick={() => alert('준비중입니다.')}
									alt="기능전문가 과정-노무"
								/>
								<area
									shape="rect"
									coords="709,170,1190,210"
									onClick={() => alert('준비중입니다.')}
									alt="산업 전문가 과정-핀테크"
								/>
								<area
									shape="rect"
									coords="709,220,1190,260"
									onClick={() => alert('준비중입니다.')}
									alt="법률 Issue Trend"
								/>
								<area
									shape="rect"
									coords="709,270,1190,310"
									onClick={() => alert('준비중입니다.')}
									alt="ESG의 법적 쟁점 및 기업의 대응 전략"
								/>
								<area
									shape="rect"
									coords="917,340,997,380"
									onClick={() => alert('준비중입니다.')}
									alt="기타 법률"
								/>
								<area
									shape="rect"
									coords="720,394,1190,434"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-ax1/view`}
									alt="(송무) 집회, 시위 등 금지 가처분"
								/>
								<area
									shape="rect"
									coords="720,444,1190,484"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-ax3/view`}
									alt="(송무) 압수수색에 대해 알아두어야 할 것들"
								/>
								<area
									shape="rect"
									coords="720,494,1190,534"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-ax4/view`}
									alt="(송무) 형사소송법 개정에 따른 수사 및 재판 실무 변화"
								/>
								<area
									shape="rect"
									coords="720,544,1190,584"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-ax2/view`}
									alt="(C&amp;F) 외국환거래법 위반 시 제재와 대응방안"
								/>
								<area
									shape="rect"
									coords="890,620,1020,650"
									onClick={() => alert('준비중입니다.')}
									alt="회사법 Advanced"
								/>
								<area
									shape="rect"
									coords="720,668,1190,708"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-aef/view`}
									alt="[회사법] ① 주주총회 운영 실무"
								/>
								<area
									shape="rect"
									coords="720,718,1190,758"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-aee/view`}
									alt="[회사법] ② 이사회 운영 실무"
								/>
								<area
									shape="rect"
									coords="720,768,1190,808"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-aed/view`}
									alt="[회사법] ③ 상장 및 공시 이해"
								/>
								<area
									shape="rect"
									coords="720,818,1190,858"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-aec/view`}
									alt="[회사법] ④ 상장회사 특례"
								/>
							</map>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "IP",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area">
							<div className="guide-btn">
								<Link
									to="https://mysuni.sk.com/suni-main/lecture/category/CLG00008/channel/CHN000d7"
									className="item-button"
								>
									<img src={CourseBook} alt="" />
									과정 바로가기
								</Link>
							</div>
						</div>
						<div className="college-sub-txt">
							<strong>IP</strong>
							<div>
								<ul>
									<li>
										IP 영역에서는 신사업 추진 및 기존 사업에서의 특허경쟁력을 제고하기 위한 방안을 제시하여 Deep Change 실행력<br />
										제고를 위한 컨텐츠를 제공합니다.
									</li>
									<li>
										기본적인 지식재산의 기초 학습과 IP 실무자를 위한 특허관리와 라이센싱/소송 등의 컨텐츠를 제공하고, Global 특허분쟁<br />전문가를 양성합니다.
									</li>
								</ul>
								<p className="p_link">
									각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
								</p>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg81} alt="IP Flow" useMap="#Map" />
							<map name="Map">
								<area
									shape="rect"
									coords="465,136,945,216"
									onClick={() => alert('준비중입니다.')}
									alt="Global 특허분쟁 전문가"
								/>
								<area
									shape="rect"
									coords="634,314,777,338"
									onClick={() => alert('준비중입니다.')}
									alt="Trend"
								/>
								<area
									shape="rect"
									coords="465,357,945,397"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14i6/view`}
									alt="기업실무자입장에서 본 미국특허소송 세미나"
								/>
								<area
									shape="rect"
									coords="220,408,701,448"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14hd/view`}
									alt="사업관점에서 알아보는 중국특허제도&amp;법"
								/>
								<area
									shape="rect"
									coords="710,408,1191,448"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14hs/view`}
									alt="기술 보호 관점에서 바라보는 미국 특허제도와 법"
								/>
								<area
									shape="rect"
									coords="338,487,405,514"
									onClick={() => alert('준비중입니다.')}
									alt="특허관리"
								/>
								<area
									shape="rect"
									coords="220,532,525,592"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5h/view`}
									alt="[특허관리] ① 한국 출원제도와 법"
								/>
								<area
									shape="rect"
									coords="220,602,525,662"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5g/view`}
									alt="[특허관리] ② 한국 특허출원 실무"
								/>
								<area
									shape="rect"
									coords="220,672,525,732"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5f/view`}
									alt="[특허관리] ③ 특허활용과 매입"
								/>
								<area
									shape="rect"
									coords="220,742,525,802"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5e/view`}
									alt="[특허관리] ④ M&amp;A와 IP Transaction"
								/>
								<area
									shape="rect"
									coords="670,487,739,514"
									onClick={() => alert('준비중입니다.')}
									alt="특허분쟁"
								/>
								<area
									shape="rect"
									coords="551,602,859,662"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5d/view`}
									alt="[특허분쟁] ① 한국 특허분쟁의 이해와 전략"
								/>
								<area
									shape="rect"
									coords="551,672,859,732"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5c/view`}
									alt="[특허분쟁] ② 미국 특허분쟁 Key Points"
								/>
								<area
									shape="rect"
									coords="551,742,859,802"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5b/view`}
									alt="[특허분쟁] ③ 특허협상과 라이선스 실무"
								/>
								<area
									shape="rect"
									coords="1001,487,1074,514"
									onClick={() => alert('준비중입니다.')}
									alt="특허경영"
								/>
								<area
									shape="rect"
									coords="882,602,1189,662"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-ax7/view`}
									alt="[webinar] ML/AI를 활용한 특허 정보 분석과 실무 적용 전략 특강"
								/>
								<area
									shape="rect"
									coords="882,672,1189,732"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14hf/view`}
									alt="성공적인 사업화 Starting point: IP 계약"
								/>
								<area
									shape="rect"
									coords="882,742,1189,802"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14hj/view`}
									alt="BM혁신을 위한 특허경영"
								/>
								<area
									shape="rect"
									coords="374,871,537,896"
									href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-4e`}
									alt="IP Mind-Set Essential"
								/>
								<area
									shape="rect"
									coords="220,915,691,955"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5q/view`}
									alt="[IP Mind-Set] ① IP, 한 번에 All Kill: 지식재산권 101"
								/>
								<area
									shape="rect"
									coords="220,965,691,1005"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5p/view`}
									alt="[IP Mind-Set] ② 연구개발과 지식재산"
								/>
								<area
									shape="rect"
									coords="220,1015,691,1055"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5o/view`}
									alt="[IP Mind-Set] ③ 직무발명"
								/>
								<area
									shape="rect"
									coords="220,1065,691,1105"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5n/view`}
									alt="[IP Mind-Set] ④ AI, 특허를 만나다! MAKE AI PATENT"
								/>
								<area
									shape="rect"
									coords="220,1115,691,1155"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5m/view`}
									alt="[IP Mind-Set] ⑤ IP War! News로 이해하는 특허 분쟁"
								/>
								<area
									shape="rect"
									coords="220,1165,691,1205"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5l/view`}
									alt="[IP Mind-Set] ⑥ 분쟁대응 문서관리"
								/>
								<area
									shape="rect"
									coords="709,1065,1199,1105"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5k/view`}
									alt="[오픈소스] ① 미래를 밝히는 오픈소스 선형적 발전사"
								/>
								<area
									shape="rect"
									coords="709,1115,1199,1155"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5j/view`}
									alt="[오픈소스] ② Software, Copyright &amp; License"
								/>
								<area
									shape="rect"
									coords="709,1165,1199,1205"
									href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a5i/view`}
									alt="[오픈소스] ③ 오픈소스 라이선스"
								/>
							</map>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
];


const panesEng = [
	{
		menuItem: `About the\r\nManagement`,
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt00">
					<div className="college-cont-map mgmt">
						<div className="belt">
							<div className="guide-area">
								{/* <div className="guide-text"><p className="p_link">Click each badge and course to go to the corresponding page.</p></div> */}
								<div className="guide-btn">
									<div
										//to="#none"
										className="item-button"
									>
										<img src={CourseBook} alt="courseImage" />
										Go to Courses
									</div>
								</div>
							</div>
							<div className="belt-title">
								<strong className="tit">Management Learning Path</strong>
								<p className="sub-text">Follow the learning path, stage by stage, for each function to learn the basic knowledge necessary for each function,<br />the content that the working-level staff must know, and the certification to become a function specialist.</p>
							</div>
						</div>
						<div className="belt">
							<img src={manageImg01Eng} alt="Management Learning Path" />
						</div>
					</div>
					<div className="college-cont-map mgmt">
						<div className="belt">
							<div className="map-area">
								<img src={manageImg02Eng} alt="Management Badge System" />
							</div>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),

	}, {
		menuItem: `Strategic /\r\nOrganizational Design`,
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area"/>
						<div className="college-sub-txt">
							<strong>Strategic/<br />Organizational<br />Design</strong>
							<div>
								<ul>
									<li>
										“Strategic/Organizational Design” offers learning content for strategy implementation competency<br />
										enhancement for working-level strategists and unit organization leaders.
									</li>
									<li>
										To reinforce the strategy staff and unit organization leader’s “Strategy implementation competency,” it provides<br />
										key concepts, principles, and methodologies for strategic and organizational design, while searching for ways to<br />
										link the key context of  Deep change, performance management, and organizational design together.
									</li>
								</ul>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg21Eng} className="manage_cate" alt="Strategy/Organizational Structure Flow" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),

	}, {
		menuItem: "Financing",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area"/>
						<div className="college-sub-txt">
							<strong>Financing</strong>
							<div>
								<ul>
									<li>
										It offers content on basic skills required in all areas of finance, including financial planning and investment,<br />
										fund and finance, financial accounting, and tax accounting and advanced content that focus on practice to<br />
										build the foundation for the implementation of the financial story and actual performance creation.

									</li>
									<li>
										It is composed of a curriculum for basic courses, advanced job-intensive courses, and professional courses by<br />
										job and stage.  In addition, even those who did not major in this field or beginners can learn the basics of<br />
										accounting through the basic accounting course.
									</li>
								</ul>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg31Eng} alt="Finance Flow" />
						</div>
					</div>
				</div>

			</Tab.Pane>
		),
	}, {
		menuItem: "Marketing",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area"/>
						<div className="college-sub-txt">
							<strong>Marketing</strong>
							<div>
								<ul>
									<li>
										It offers a perspective on job-related problem solving by systematically teaching various knowledge and<br />
										frameworks related to customer value creation, delivery, and communication.
									</li>
									<li>
										The “Data Marketing” course for the advancement of B2C marketing and the “B2B Pipeline Mgmt” practice<br />
										course for the enhancement of overall value chain-related understanding and executive ability focus on up-<br />
										and re-skilling the marketers in SK.
									</li>
								</ul>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg41Eng} alt="마케팅 Flow" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	}, {
		menuItem: "HR",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area"/>
						<div className="college-sub-txt">
							<strong>HR</strong>
							<div>
								<ul>
									<li>
										It cultivates basic knowledge for each job unit in HR and provides future trends in HR and insights, focusing<br />
										on the understanding of HR from the aspects of conversion of awareness, change of system, and utilization<br />
										of technology
									</li>
									<li>
										It offers <strong>(1) basic understanding, methodology, and practices that are based on real HR works and<br />
											(2) a systematic content to expand and enhance HR workers’ capabilities and insights.</strong>
									</li>
								</ul>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg51Eng} useMap='#Map' alt="HR Flow" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),

	}, {
		menuItem: "SCM/Operation",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area"/>
						<div className="college-sub-txt">
							<strong>SCM/Operation</strong>
							<div>
								<ul>
									<li>
										It offers the employees whose work regards SCM and operation with content on “supply chain management”<br />
										to supply differentiated products and services to customers at an appropriate price.
									</li>
									<li>
										Based on the basic knowledge of SCM and basic concepts and methodologies on purchasing, it delivers key<br />
										tips to the working-level SCM and purchasing staff through a workshop.
									</li>
								</ul>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg61Eng} alt="SCM/Operation Flow" />
						</div>
					</div>
				</div>

			</Tab.Pane>
		),

	}, {
		menuItem: "Legal",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area"/>
						<div className="college-sub-txt">
							<strong>Legal</strong>
							<div>
								<ul>
									<li>
										The legal function offers courses on the prevention of legal risks and resolution methods for actual risks.
									</li>
									<li>
										It reviews the main content of the Fair Trade Act and the Corporate Act and the implication of the revisions to<br />
										cover legal issues and countermeasures.
									</li>
								</ul>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg71Eng} alt="Legal Flow" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),

	}, {
		menuItem: "IP",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area"/>
						<div className="college-sub-txt">
							<strong>IP</strong>
							<div>
								<ul>
									<li>
										The IP function suggests ways to enhance competitiveness advantage with patents in new and existing<br />
										businesses and provides content that will improve the deep change execution ability.1
									</li>
									<li>
										It offers basic lessons on intellectual property and content on patent management, licensing, and litigation for<br />
										working-level staff in IP to foster patent dispute specialists.
									</li>
								</ul>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg81Eng} alt="IP Flow" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),

	}
];

const panesChn = [
	{
		menuItem: "Management 介绍", //소개
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt00">
					<div className="college-cont-map mgmt">
						<div className="belt">
							<div className="guide-area">
								{/* <div className="guide-text"><p className="p_link">각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.</p></div> */}
								<div className="guide-btn">
									<div
										//to="https://mysuni.sk.com/suni-main/lecture/category/CLG00008/channels/pages/2"
										className="item-button"
									>
										<img src={CourseBook} alt="courseImage" />
										直接进入课程
									</div>
								</div>
							</div>
							<div className="belt-title">
								<strong className="tit">Management Learning Path</strong>
								<p className="sub-text">请按照各个Function阶段的Learning Path学习从各个Function所需的基础知识到实务工作者需要具备的知识，以及各个职能的Specialist认证。</p>
							</div>
						</div>
						<div className="belt">
							<img src={manageImg01Chn} alt="Management Learning Path" />
						</div>

					</div>
					<div className="college-cont-map mgmt">
						<div className="belt">
							<div className="map-area">
								<img src={manageImg02Chn} alt="Management Badge 체계" />
							</div>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),

	}, {
		menuItem: "战略/组织设计", //전략/조직 설계
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area">
							<div className="guide-btn">
								<div
									//to="https://mysuni.sk.com/suni-main/lecture/category/CLG00008/channel/CHN00014"
									className="item-button"
								>
									<img src={CourseBook} alt="" />
									直接进入课程
								</div>
							</div>
						</div>

						<div className="college-sub-txt">
							<strong>战略/组织设计</strong>
							<div>
								<ul>
									<li>
										在“战略/组织设计”中, 面向各个战略实务工作者和各单位组织的领导者, 提供帮助其提高战略执行能力的 <br />学习内容。
									</li>
									<li>
										为加强战略Staff和单位组织领导者的“战略执行能力”, 提供战略和组织设计的核心概念/原则方法论,<br />摸索Deep Change的主要Context和成果管理及组织设计之间的连接方案。
									</li>
								</ul>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg21Chn} className="manage_cate" alt="战略/组织设计 Flow" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),

	}, {
		menuItem: "财务", //재무
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area">
							<div className="guide-btn">
								<div
									//to="https://mysuni.sk.com/suni-main/lecture/category/CLG00008/channel/CHN0005w"
									className="item-button"
								>
									<img src={CourseBook} alt="" />
									直接进入课程
								</div>
							</div>
						</div>
						<div className="college-sub-txt">
							<strong>财务</strong>
							<div>
								<ul>
									<li>
										提供财务策划/投资, 资金/金融, 财务会计, 税务会计等整个财务领域所需的基础知识和以Practice为中心的实务深<br />化学习内容, 为实行Financial Story和创造出实际成果奠定基础。
									</li>
									<li>
										为财务工作者准备的基础课程 - Adv.职务深化课程 - 以专家课程等具体的各个职务/阶段的课程构成。<br />并且非专业/初学者也可以通过基础会计课程学习会计基础知识。
									</li>
								</ul>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg31Chn} alt="Finance Flow" />
						</div>
					</div>
				</div>

			</Tab.Pane>
		),
	}, {
		menuItem: "营销", //마케팅
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area">
							<div className="guide-btn">
								<div
									//to="https://mysuni.sk.com/suni-main/lecture/category/CLG00008/channel/CHN00018"
									className="item-button"
								>
									<img src={CourseBook} alt="" />
									直接进入课程
								</div>
							</div>
						</div>
						<div className="college-sub-txt">
							<strong>营销</strong>
							<div>
								<ul>
									<li>
										系统化学习有关创造/传递/沟通Customer Value的各种知识和Framework, 为解决实操问题提供Perspective。
									</li>
									<li>
										通过为加强B2C营销业务的“Data营销”课程, 提升Value Chain整体理解和实行力的“B2B Pipeline Mgmt.”<br />
										实习课程等, 聚焦SK营销人的Up/Re-skilling。
									</li>
								</ul>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg41Chn} alt="마케팅 Flow" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	}, {
		menuItem: "HR",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area">
							<div className="guide-btn">
								<div
									//to="https://mysuni.sk.com/suni-main/lecture/category/CLG00008/channel/CHN00013"
									className="item-button"
								>
									<img src={CourseBook} alt="" />
									直接进入课程
								</div>
							</div>
						</div>
						<div className="college-sub-txt">
							<strong>HR</strong>
							<div>
								<ul>
									<li>
										学习HR各个职务基础知识, 通过未来HR变化趋势和通查, 聚焦思维转换, 制度变化, 技术应用层面理解HR。
									</li>
									<li>
										<strong>(1) 基于HR实务的基础理解及方法论, Practice (2) 着眼应对未来HR的变化提供系统化内容, 旨在提高HR负责人的<br />
											业务执行力与获得Insight。</strong>
									</li>
								</ul>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg51Chn} alt="HR Flow" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),

	}, {
		menuItem: "SCM/Operation",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area">
							<div className="guide-btn">
								<div
									//to="https://mysuni.sk.com/suni-main/lecture/category/CLG00008/channel/CHN0007m"
									className="item-button"
								>
									<img src={CourseBook} alt="" />
									直接进入课程
								</div>
							</div>
						</div>
						<div className="college-sub-txt">
							<strong>SCM/Operation</strong>
							<div>
								<ul>
									<li>
										面向SCM/Operation相关成员, 提供“供应链管理”相关内容, 旨在能够适时以适合的价格为客户提供差异化的<br />产品/服务。
									</li>
									<li>
										基于SCM基础知识和采购的基础概念和方法论, 通过Workshop, 为SCM/采购负责人提供核心Tip。
									</li>
								</ul>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg61Chn} alt="SCM/Operation Flow" />
						</div>
					</div>
				</div>

			</Tab.Pane>
		),

	}, {
		menuItem: "法务", //법무
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area">
							<div className="guide-btn">
								<div
									to="https://mysuni.sk.com/suni-main/lecture/category/CLG00008/channel/CHN0007l"
									className="item-button"
								>
									<img src={CourseBook} alt="" />
									直接进入课程
								</div>
							</div>
						</div>
						<div className="college-sub-txt">
							<strong>法务</strong>
							<div>
								<ul>
									<li>
										在法务领域, 提供Legal Risk预防和发生实际Risk时的解决方案相关课程。
									</li>
									<li>
										了解《公平交易法》和《公司法》的主要内容和修订案所带来的启示, 提出法律纠纷和相关对策。
									</li>
								</ul>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg71Chn} alt="法务 Flow" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),

	}, {
		menuItem: "IP",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="college-cont-wrap mgmt">
					<div className="belt">
						<div className="guide-area">
							<div className="guide-btn">
								<div
									//to="https://mysuni.sk.com/suni-main/lecture/category/CLG00008/channel/CHN000d7"
									className="item-button"
								>
									<img src={CourseBook} alt="" />
									直接进入课程
								</div>
							</div>
						</div>
						<div className="college-sub-txt">
							<strong>IP</strong>
							<div>
								<ul>
									<li>
										在IP领域, 提出推进新业务和提升原有业务专利竞争力的方案, 提供可提升Deep Change执行力的相关内容。
									</li>
									<li>
										为进行知识产权基础学习和IP实务工作者提供专利管理, 特许/诉讼等内容, 培养Global专利纠纷专家。
									</li>
								</ul>
							</div>
						</div>
						<div className="map-area">
							<img src={manageImg81Chn} alt="IP Flow" />
						</div>
					</div>

				</div>

			</Tab.Pane>
		),

	}
]

const 	TabMenuInnerSubMgmt = () => (
	<Tab
		menu={{ attached: false, tabular: false }}
		panes={panes}
		className="sub-tab-menu mgmt"
	/>
);
//영문
const TabMenuInnerSubMgmtEng = () => (
	<Tab menu={{ attached: false, tabular: false }}
		panes={panesEng}
		className="sub-tab-menu mgmt"
	/>

);
//중문
const TabMenuInnerSubMgmtChn = () => (
	<Tab menu={{ attached: false, tabular: false }}
		panes={panesChn}
		className="sub-tab-menu mgmt"
	/>

);

export { TabMenuInnerSubMgmt, TabMenuInnerSubMgmtEng, TabMenuInnerSubMgmtChn };
