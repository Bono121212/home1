import React from "react";
import { Tab, Popup, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CourseBook from "../../../../../images/all/icon-course-book.png";

import Aisub0102_Badge01 from "../../../../../images/all/ai-con-01-2-badge1-v-2.png";
import Aisub0102_Badge02 from "../../../../../images/all/ai-con-01-2-badge2-v-2.png";


import Aisub0101 from "../../../../../images/all/ai-con-01-1-v-2.png";
import Aisub0102 from "../../../../../images/all/ai-con-01-2-v-2.png";
import Aisub0201 from "../../../../../images/all/ai-con-02-1-v-2.png";
import Aisub0301 from "../../../../../images/all/ai-con-03-1-v-2.png"; 
import Aisub0401 from "../../../../../images/all/ai-con-04-1-v-2.png";
import Aisub0101Eng from "../../../../../images/all/ai-con-01-1-eng-v-2.png";
import Aisub0102Eng from "../../../../../images/all/ai-con-01-2-eng-v-2.png";
import Aisub0201Eng from "../../../../../images/all/ai-con-02-1-eng-v-2.png";
import Aisub0301Eng from "../../../../../images/all/ai-con-03-1-eng-v-2.png";
import Aisub0401Eng from "../../../../../images/all/ai-con-04-1-eng-v-2.png";
import Aisub0101Chn from "../../../../../images/all/ai-con-01-1-chn-v-2.png";
import Aisub0102Chn from "../../../../../images/all/ai-con-01-2-chn-v-2.png";
import Aisub0201Chn from "../../../../../images/all/ai-con-02-1-chn-v-2.png";
import Aisub0301Chn from "../../../../../images/all/ai-con-03-1-chn-v-2.png";
import Aisub0401Chn from "../../../../../images/all/ai-con-04-1-chn-v-2.png";

import './style.css';

const panes = [
	{
		menuItem: "AI Category 소개",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area">
						<div className="guide-btn">
							<Link
								to="https://mysuni.sk.com/suni-main/lecture/category/CLG00001/channels/pages/1"
								className="item-button"
							>
								<img src={CourseBook} alt="CourseBook" />
								과정 바로가기
							</Link>
						</div>
					</div>
				</div>

				<div className="belt">
					<div className="ai-con-text">
						<p>
							이제 AI는 우리가 인지하지 못할 정도로 Seamless하게 일상 속에 자리잡고 있듯이,<br />
							우리 SK가 추구하는 Deep Change 또한 모든 비즈니스 영역에서 AI가 접목된 변화를 필요로 하고 있습니다.
						</p>
						<p>
							AI Category에서는 이러한 AI 기반의 Deep Change 실행 역량과 Align된 Learning Experience를 제공하고 있습니다. <br />
							비즈니스 현장의 기술 인력들에게 요구되는 다양한 전문 AI 기술 습득은 물론, SK 구성원이라면 누구나 알아야 할 기본적인 AI 지식에
							이르기까지<br />
							일상의 업무에 폭넓게 AI를 활용할 수 있는 역량을 갖출 수 있도록 지원하고 있습니다.
						</p>
					</div>
					<img src={Aisub0101} alt="채널소개" />
				</div>

				<div className="college-cont-map sub ai">
					<div className="belt">
						<div className="map-area">
							<img src={Aisub0102} alt="전체 커리큘럼" />
							<Popup position='top right' className="p-badge" trigger={<Button className="badge" style={{ 'position': 'absolute', 'left': '1121px', 'top': '91px', 'width': '50px', 'height': '25px' }}>Badge</Button>}>
								<img src={Aisub0102_Badge01} alt="ML Engineer Track Badge" />
							</Popup>
							<Popup position='top right' className="p-badge" trigger={<Button className='badge' style={{ 'position': 'absolute', 'left': '1124px', 'top': '494px', 'width': '50px', 'height': '25px' }}>Badge</Button>}>
								<img src={Aisub0102_Badge02} alt="Executive AI/DT Badge" />
							</Popup>
							<Popup position='top right' className="p-badge" trigger={<Button className='badge' style={{ 'position': 'absolute', 'left': '589px', 'top': '494px', 'width': '50px', 'height': '25px' }}>Badge</Button>}>
								<img src={Aisub0102_Badge02} alt="AI/DT Literacy Badge" />
							</Popup>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "AI/DT Literacy",
		render: () => <Tab.Pane attached={false}></Tab.Pane>,
		// https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-2t
	},
	{
		menuItem: "Executive AI/DT",
		render: () => <Tab.Pane attached={false}></Tab.Pane>,
		// 추가된 메뉴입니다. 페이지이동 링크처리 요청합니다.
		// https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-4w
	},
	{
		menuItem: "AI Technologies",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area">
						<div className="guide-btn">
							<Link
								to="https://mysuni.sk.com/suni-main/lecture/category/CLG00001/channel/CHN00003"
								className="item-button"
							>
								<img src={CourseBook} alt="CourseBook" />
								과정 바로가기
							</Link>
						</div>
					</div>
				</div>
				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>AI Technologies</strong>
					<div>
						<ul>
							<li>
								AI 영역의 다양한 Technology를 소개하는 채널입니다. <br />
								AI 기본 개념부터, 수학적 기초, Machine Learning과 Deep Learning의 기본 지식을 학습하실 수 있습니다.
							</li>
						</ul>
						<p className="p_link ai">
							각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
						</p>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Aisub0201} useMap="#Map2" alt="AI Technologies" />
							<map name="Map2">
								<area shape="rect" coords="235,66,705,126" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14r3/view`} alt="[Guided Project] SKT CCTV 이미지 분류 모델 개발" />
								<area shape="rect" coords="715,66,1185,126" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14r2/view`} alt="[Guided Project] SKC 공정 이미지 불량 탐지 모델 개발" />
								<area shape="rect" coords="235,136,705,196" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14qz/view`} alt="[Guided Project] SKI 운전 데이터를 활용한 물성 예측 모델 개발" />
								<area shape="rect" coords="715,136,1185,196" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14q9/view`} alt="[Guided Project] SKB Btv 시청데이터를 활용한 추천 모델 개발" />
								<area shape="rect" coords="235,316,705,376" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-5m/Course/C-LECTURE-3s`} alt="머신러닝 이해와 실습 上" />
								<area shape="rect" coords="715,317,1185,377" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-5l/Course/C-LECTURE-3r`} alt="머신러닝 이해와 실습 下" />
								<area shape="rect" coords="235,387,705,447" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-5n/Course/C-LECTURE-3t`} alt="AI Expert with Meta Learner 입문(Online)" />
								<area shape="rect" coords="715,387,1185,447" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-19b/Course/C-LECTURE-13s`} alt="Meta Learner 입문" />
								<area shape="rect" coords="235,568,705,628" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-5r/Course/C-LECTURE-3x`} alt="AI 101" />
								<area shape="rect" coords="715,568,1185,628" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-64/Course/C-LECTURE-4i`} alt="비전공자를 위한 머신러닝" />
								<area shape="rect" coords="235,638,705,698" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-yt/Course/C-LECTURE-ue`} alt="[AI수학 #1] 선형대수 기초" />
								<area shape="rect" coords="715,638,1185,698" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-yu/Course/C-LECTURE-uf`} alt="[AI수학 #2] 확률통계 기초" />
							</map>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "AI Trend Watch",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area">
						<div className="guide-btn">
							<Link
								to="https://mysuni.sk.com/suni-main/lecture/category/CLG00001/channel/CHN0006i"
								className="item-button"
							>
								<img src={CourseBook} alt="CourseBook" />
								과정 바로가기
							</Link>
						</div>

					</div>
				</div>

				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>AI Trend Watch</strong>
					<div>
						<ul>
							<li>
								SK 구성원에게 AI 분야의 최신 정보와 Trend를 주기적으로 제공하는 ‘구독형 채널’입니다. <br />
								AI 관련한 그룹 안팎의 Conference, 최신 논문, 기술전문잡지의 아티클 등을 통해 AI 기술 동향을 파악할 수 있습니다. <br />
								관심 채널로 등록하면 개인 메일을 통해 신규 콘텐츠 업로드 정보를 받아볼 수 있습니다.
							</li>
						</ul>
						<p className="p_link ai">
							각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
						</p>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Aisub0301} useMap="#Map3" alt="AI Trend Watch" />
							<map name="Map3">
								<area shape="rect" coords="235,66,705,126" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/cube/CUBE-c88/lecture-card/LECTURE-CARD-9qj`} alt="[꼼꼼한 논문 읽기] Batch Normalization (속도, 성능 개선)" />
								<area shape="rect" coords="715,66,1185,126" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/cube/CUBE-b6t/lecture-card/LECTURE-CARD-8tt`} alt="[꼼꼼한 논문 읽기] TextFooler (자연어처리 공격기법)" />
								<area shape="rect" coords="235,136,705,196" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/cube/CUBE-9sd/lecture-card/LECTURE-CARD-7gt`} alt="[AI최신기술동향] DDSP Differentiable Digital Signal Processing" />
								<area shape="rect" coords="715,136,1185,196" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/cube/CUBE-8t0/lecture-card/LECTURE-CARD-6it`} alt="[AI최신기술동향]Revisiting the Sibling Head in Object Detector" />
								<area shape="rect" coords="235,317,705,377" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14tr/view`} alt="[Step into AI] 인간의 편향에서 벗어난 AI로 가는 길" />
								<area shape="rect" coords="715,317,1185,377" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14tb/view`} alt="[Step into AI] ESG 경영을 위한 AI문화의 확산" />
								<area shape="rect" coords="235,387,705,447" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14gi/view`} alt="[ICML] 세상의 모든 것을 번역하다" />
								<area shape="rect" coords="715,387,1185,447" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12r5/view`} alt="[AI 컨퍼런스] EmTech Digital - Ep#1. 어떻게 AI에 접근할 것인가?" />
								<area shape="rect" coords="235,568,705,628" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14hg/view`} alt="[ai.x2021] AI for everyone" />
								<area shape="rect" coords="715,568,1185,628" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14hh/view`} alt="[ai.x2021] AI for X" />
								<area shape="rect" coords="235,749,705,809" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-19p/Course/C-LECTURE-141`} alt="[SK ICT Tech Summit] Industrial AI" />
								<area shape="rect" coords="235,819,705,879" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-19s/Course/C-LECTURE-13z`} alt="[SK ICT Tech Summit] AI 응용 기술 &#38; 솔루션" />
								<area shape="rect" coords="715,749,1185,809" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-19q/Course/C-LECTURE-140`} alt="[SK ICT Tech Summit] AI 적용 Platform" />
							</map>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "AI Biz Implementation",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area">
						<div className="guide-btn">
							<Link
								to="https://mysuni.sk.com/suni-main/lecture/category/CLG00001/channel/CHN00002"
								className="item-button"
							>
								<img src={CourseBook} alt="CourseBook" />
								과정 바로가기
							</Link>
						</div>
					</div>
				</div>

				<div className="college-sub-txt">
					<strong>
						AI Biz<br />
						Implementation
					</strong>
					<div>
						<ul>
							<li>
								AI 기술을 활용하여 Business와 사업 운영 프로세스를 변화시킨 SK 안팎의 사례를 학습하는 채널입니다.  <br />
								실무 현장에 AI를 적용하는 방법을 고민하는 구성원들에게 도움을 드립니다.
							</li>
						</ul>
						<p className="p_link ai">
							각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
						</p>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Aisub0401} useMap="#Map4" alt="AI Biz. Implementation" />
							<map name="Map4">
								<area shape="rect" coords="235,66,705,126" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-wf/Course/C-LECTURE-sd`} alt="AI Biz Case : 환경" />
								<area shape="rect" coords="715,66,1185,126" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-vq/Course/C-LECTURE-rn`} alt="AI Biz Case : 마케팅" />
								<area shape="rect" coords="235,136,705,196" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-vm/Course/C-LECTURE-rj`} alt="AI Biz Case : 에너지/화학" />
								<area shape="rect" coords="715,136,1185,196" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-tz/Course/C-LECTURE-q6`} alt="AI Biz Case : 생산/공정" />
								<area shape="rect" coords="235,206,705,266" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-tu/Course/C-LECTURE-q2`} alt="AI Biz Case : 바이오/헬스" />
								<area shape="rect" coords="715,205,1185,265" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-au1/view`} alt="&#91;정재승의 Tech &amp; Biz Talk&#93; 비즈니스를 바꾸는 AI 기술의 시크릿 코드, 80 to 95" />
								<area shape="rect" coords="235,276,705,336" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14go/view`} alt="&#91;정재승의 Tech &amp; Biz Talk&#93; AI Agent의 미래 :<br/> Agent 2.0 진화에 필요한 네 가지 포인트" />

								<area shape="rect" coords="235,457,705,517" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-84c/view`} alt="SK텔레콤의 AI업무 적용 사례 및 Lessons Learned" />
								<area shape="rect" coords="715,457,1185,517" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-118/Course/C-LECTURE-wq`} alt="SK 관계사의 AI도입/적용 Pain Points와 그룹차원의 협력방안" />
								<area shape="rect" coords="235,527,705,587" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-117/Course/C-LECTURE-wp`} alt="SK관계사의 Industrial AI도입 사례 및 Lessons Learned" />
								<area shape="rect" coords="715,527,1185,587" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/cube/CUBE-865/lecture-card/LECTURE-CARD-5yk`} alt="[AI Biz Insight] 딥러닝을 활용한 Sales QA 자동화" />
								<area shape="rect" coords="235,597,705,657" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/cube/CUBE-7j9/lecture-card/LECTURE-CARD-5gf`} alt="[AI Biz Insight] RPA를 활용한 SK텔레콤의 업무 효율화 사례" />
								<area shape="rect" coords="715,597,1185,657" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/cube/CUBE-2ix/lecture-card/LECTURE-CARD-1tf`} alt="[AI Biz Insight] 사무실 책상 위 AI, AI Assistant와 RDA" />
								<area shape="rect" coords="235,667,705,727" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/cube/CUBE-10n/lecture-card/LECTURE-CARD-1g`} alt="[AI Biz Insight] 딥러닝을 활용한 Film Defect 자동유형분류" />

								<area shape="rect" coords="235,848,705,908" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-xb/Course/C-LECTURE-t3`} alt="The Road to AI – AI Biz 적용 프로세스" />
								<area shape="rect" coords="715,847,1185,907" href={`https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00001/course-plan/COURSE-PLAN-gk/Course/C-LECTURE-do`} alt="Industrial AI솔루션 동향과 도입 방안" />
								<area shape="rect" coords="235,918,705,978" href={`https://mysuni.sk.com/suni-main/search?query=AI%EC%84%9C%EB%B9%84%EC%8A%A4%20%EA%B8%B0%ED%9A%8D/%EA%B0%9C%EB%B0%9C%20%EA%B8%B0%EC%B4%88`} alt="AI서비스 기획 개발 (입문/기획/기초)" />
								<area shape="rect" coords="715,918,1185,978" href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12ya/view`} alt="AI가 알려주는 비즈니스 전략" />
							</map>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},

	{
		menuItem: "ML Engineer Track",
		render: () => <Tab.Pane attached={false}></Tab.Pane>,
		// https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-3i
	},
];

const panesEng = [
	{
		menuItem: "Introduction of AI Category",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
					<div className="ai-con-text">
						<p>
							Just as how AI has seamlessly become a part of our everyday life even without us realizing it, <br />
							deep change that SK pursues is requires changes to be made by grating all business areas with AI.
						</p>
						<p>
							AI Category provides learning experiences that are aligned with the AI-based Deep Change performance capability.<br />
							Learners can acquire various professional AI skills required in technology employees working in businesses and basic AI knowledge that is<br />
							a must-know for SK members. Various supports are being made to enable them to mix AI in their daily works extensively.
						</p>
						<p>
							By starting from the basic course that falls under literacy, you will be able to systematically take the specialty course that helps you grow<br />
							in the role and job of your choice. In addition, you can also learn the core AI technologies such as machine learning and deep learning and<br />
							various business cases that applied such technologies, granting you a more detailed picture of how AI will bring new opportunities.
						</p>
					</div>
					<img src={Aisub0101Eng} alt="Channel Introduction" />
				</div>

				<div className="college-cont-map sub ai">
					<div className="belt">
						<div className="map-area">
							<img src={Aisub0102Eng} alt="전체 커리큘럼" />
							<Popup position='top right' className="p-badge" trigger={<Button className="badge" style={{ 'position': 'absolute', 'left': '1121px', 'top': '91px', 'width': '50px', 'height': '25px' }}>Badge</Button>}>
								<img src={Aisub0102_Badge01} alt="ML Engineer Track Badge" />
							</Popup>
							<Popup position='top right' className="p-badge" trigger={<Button className='badge' style={{ 'position': 'absolute', 'left': '1124px', 'top': '494px', 'width': '50px', 'height': '25px' }}>Badge</Button>}>
								<img src={Aisub0102_Badge02} alt="Executive AI/DT Badge" />
							</Popup>
							<Popup position='top right' className="p-badge" trigger={<Button className='badge' style={{ 'position': 'absolute', 'left': '589px', 'top': '494px', 'width': '50px', 'height': '25px' }}>Badge</Button>}>
								<img src={Aisub0102_Badge02} alt="AI/DT Literacy Badge" />
							</Popup>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "AI/DT Literacy",
		render: () => <Tab.Pane attached={false}></Tab.Pane>,
	},
	{
		menuItem: "Executive AI/DT",
		render: () => <Tab.Pane attached={false}></Tab.Pane>,
	},
	{
		menuItem: "AI Technologies",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
				</div>
				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>AI Technologies</strong>
					<div>
						<ul>
							<li>
								It is a channel that introduces various technologies in the field of AI.<br />
								You can learn from the basic concept of AI to basic math, machine learning, and deep learning.
							</li>
						</ul>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Aisub0201Eng} alt="AI Technologies" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "AI Trend Watch",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
				</div>
				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>AI Trend Watch</strong>
					<div>
						<ul>
							<li>
								It is a channel that regularly provides subscribers with the latest trends in the field of AI.<br />
								You can grasp recent technological trends introduced in internal/external conferences, the latest research<br />
								papers, and articles from tech magazines on AI. Add the channel to your favorite to receive e-mails on newly<br />
								uploaded content.
							</li>
						</ul>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Aisub0301Eng} alt="AI Trend Watch" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "AI Biz Implementation",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
				</div>
				<div className="college-sub-txt">
					<strong>
						AI Biz<br />
						Implementation
					</strong>
					<div>
						<ul>
							<li>
								It is a channel where you will learn about internal and external cases of using AI technologies to change the<br />
								business and the business operation process. It helps the members who are seeking to learn how to apply<br />
								AI to their work.
							</li>
						</ul>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Aisub0401Eng} alt="AI Biz. Implementation" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},

	{
		menuItem: "ML Engineer Track",
		render: () => <Tab.Pane attached={false}></Tab.Pane>,
	},
];

const panesChn = [
	{
		menuItem: "AI Category 介绍",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
					<div className="ai-con-text">
						<p>
							AI在不知不觉中, 就非常Seamless地渗透到了我们的日常生活当中, SK所追求的Deep Change也需要在所有商业领域融合AI。
						</p>
						<p>
							AI Category培养以AI为基础的Deep Change执行能力, 提供Align的学习经验。 <br />
							不仅可以学习商业技术实操人员所需的各种专业AI技术, 还包括全体SK成员都应了解的基本AI知识<br />
							为培养在日常工作中广泛使用AI的能力提供支持。
						</p>
						<p>
							以基础课程, 比如Literacy为起点, 我们系统地提供着符合个人成长需求和职务的Specialty课程。<br />
							可以学习机器学习, 深度学习等AI核心技术, 通过应用这些技术的各种Biz Case, 具体描绘出AI会带来的新的机遇。
						</p>
					</div>
					<img src={Aisub0101Chn} alt="채널소개" />
				</div>

				<div className="college-cont-map sub ai">
					<div className="belt">
						<div className="map-area">
							<img src={Aisub0102Chn} alt="전체 커리큘럼" />
							<Popup position='top right' className="p-badge" trigger={<Button className="badge" style={{ 'position': 'absolute', 'left': '1121px', 'top': '91px', 'width': '50px', 'height': '25px' }}>Badge</Button>}>
								<img src={Aisub0102_Badge01} alt="ML Engineer Track Badge" />
							</Popup>
							<Popup position='top right' className="p-badge" trigger={<Button className='badge' style={{ 'position': 'absolute', 'left': '1124px', 'top': '494px', 'width': '50px', 'height': '25px' }}>Badge</Button>}>
								<img src={Aisub0102_Badge02} alt="Executive AI/DT Badge" />
							</Popup>
							<Popup position='top right' className="p-badge" trigger={<Button className='badge' style={{ 'position': 'absolute', 'left': '589px', 'top': '494px', 'width': '50px', 'height': '25px' }}>Badge</Button>}>
								<img src={Aisub0102_Badge02} alt="AI/DT Literacy Badge" />
							</Popup>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "AI/DT Literacy",
		render: () => <Tab.Pane attached={false}></Tab.Pane>,
	},
	{
		menuItem: "Executive AI/DT",
		render: () => <Tab.Pane attached={false}></Tab.Pane>,
	},
	{
		menuItem: "AI Technologies",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
				</div>
				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>AI Technologies</strong>
					<div>
						<ul>
							<li>
								该频道中介绍AI领域的各种Technology。<br />
								可以学习从AI基础概念到数学基础, Machine Learning, Deep Learning的基础知识。
							</li>
						</ul>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Aisub0201Chn} alt="AI Technologies" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "AI Trend Watch",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
				</div>

				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>AI Trend Watch</strong>
					<div>
						<ul>
							<li>
								为SK成员提供AI领域最新趋势快讯的“订阅型频道”。<br />
								通过集团内外有关AI的会议, 最新论文, 技术专业杂志文章等掌握AI技术动向。关注频道便可通过个人邮箱收取新<br />
								内容更新信息。
							</li>
						</ul>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Aisub0301Chn} alt="AI Trend Watch" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "AI Biz Implementation",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
				</div>

				<div className="college-sub-txt">
					<strong>
						AI Biz<br />
						Implementation
					</strong>
					<div>
						<ul>
							<li>
								学习利用AI技术, 改变Business和业务运营流程的SK内外案例的频道。{` `}<br />
								对正在思考如何在实际工作中应用AI的成员们会有帮助。
							</li>
						</ul>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Aisub0401Chn} alt="AI Biz. Implementation" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},

	{
		menuItem: "ML Engineer Track",
		render: () => <Tab.Pane attached={false}></Tab.Pane>,
	},
];

const TabMenuInnerSubAi = () => {
	return (
		<Tab
			menu={{ attached: false, tabular: false }}
			panes={panes}
			className="sub-tab-menu ai"
		/>
	)
};

const TabMenuInnerSubAiEng = () => {
	return (
		<Tab
			menu={{ attached: false, tabular: false }}
			panes={panesEng}
			className="sub-tab-menu ai"
		/>
	)
}

const TabMenuInnerSubAiChn = () => {
	return (
		<Tab
			menu={{ attached: false, tabular: false }}
			panes={panesChn}
			className="sub-tab-menu ai"
		/>
	)
}

export { TabMenuInnerSubAi, TabMenuInnerSubAiEng, TabMenuInnerSubAiChn };
