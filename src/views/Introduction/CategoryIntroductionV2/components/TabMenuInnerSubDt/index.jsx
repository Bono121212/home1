import React from "react";
import { Tab, Popup, Button } from "semantic-ui-react";
import CourseBook from "../../../../../images/all/icon-course-book.png";

import Dtsub0102_Badge01 from "../../../../../images/all/dt-con-01-2-badge1-v-2.png";
import Dtsub0102_Badge02 from "../../../../../images/all/ai-con-01-2-badge2-v-2.png";

import Dtsub0101 from "../../../../../images/all/dt-con-01-1-v-2.png";
import Dtsub0102 from "../../../../../images/all/dt-con-01-2-v-2.png";
import Dtsub0201 from "../../../../../images/all/dt-con-02-v-2.png";
import Dtsub0301 from "../../../../../images/all/dt-con-03-v-2.png";
import Dtsub0401 from "../../../../../images/all/dt-con-04-v-2.png";
import Dtsub0501 from "../../../../../images/all/dt-con-05-v-2.png";
import Dtsub0601 from "../../../../../images/all/dt-con-06-v-2.png";
import Dtsub0101Eng from "../../../../../images/all/dt-con-01-1-eng-v-2.png";
import Dtsub0102Eng from "../../../../../images/all/dt-con-01-2-eng-v-2.png";
import Dtsub0201Eng from "../../../../../images/all/dt-con-02-1-eng-v-2.png";
import Dtsub0301Eng from "../../../../../images/all/dt-con-03-eng-v-2.png";
import Dtsub0401Eng from "../../../../../images/all/dt-con-04-eng-v-2.png";
import Dtsub0501Eng from "../../../../../images/all/dt-con-05-eng-v-2.png";
import Dtsub0601Eng from "../../../../../images/all/dt-con-06-eng-v-2.png";
import Dtsub0101Chn from "../../../../../images/all/dt-con-01-1-chn-v-2.png";
import Dtsub0102Chn from "../../../../../images/all/dt-con-01-2-chn-v-2.png";
import Dtsub0201Chn from "../../../../../images/all/dt-con-02-chn-v-2.png";
import Dtsub0301Chn from "../../../../../images/all/dt-con-03-chn-v-2.png";
import Dtsub0401Chn from "../../../../../images/all/dt-con-04-chn-v-2.png";
import Dtsub0501Chn from "../../../../../images/all/dt-con-05-chn-v-2.png";
import Dtsub0601Chn from "../../../../../images/all/dt-con-06-chn-v-2.png";
import { Link } from "react-router-dom";
import './style.css';

const panes = [
	{
		menuItem: "DT Category 소개",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area">
						<div className="guide-btn">
							<Link
								to="https://mysuni.sk.com/suni-main/lecture/category/CLG00002/channels/pages/1"
								className="item-button"
							>
								<img src={CourseBook} alt="" />
								과정 바로가기
							</Link>
						</div>

					</div>
				</div>
				<div className="belt">
					<div className="ai-con-text">
						<p>
							Digital Transformation이란 고객에서 출발하여 Digital 기술을 활용, 기존의 운영 프로세스와 Business Model, 나아가서는 문화/일하는 방식까지도<br />바꾸는 포괄적 활동이며, 우리 SK가 추구하는 Deep Change 실행의 핵심 요소로 자리매김하고 있습니다.
						</p>
						<p>
							DT Category에서는 이러한 DT 추진의 근간이라 할 수 있는 Data/Cloud를 중심으로 한 Digital 요소 기술을 학습할 수 있는 기회를 제공함은 물론,<br />
							새로운 고객 경험의 창출, BM/운영 프로세스의 혁신 및 일하는 방식의 변화를 이루어낸 다양한 국내외 Business Case들을 폭넓게 학습할 수 있습니다.<br />
							아울러 주요 Digital 기술에 대해서는 시장에서 인정받는 Certificate 취득을 지원할 수 있는 상시적인 프로그램들이 활발하게 제공되고 있습니다.
						</p>
					</div>
					<img src={Dtsub0101} alt="채널소개" />
				</div>

				<div className="college-cont-map sub pbtom">
					<div className="belt">
						<div className="map-area">
							<img src={Dtsub0102} alt="전체 커리큘럼" />
							<Popup position="top right" className="p-badge" trigger={<Button className="badge" style={{ 'position': 'absolute', 'left': '854px', 'top': '91px', 'width': '50px', 'height': '25px' }}>Badge</Button>}>
								<img src={Dtsub0102_Badge01} alt="ML Engineer Track Badge" />
							</Popup>
							<Popup position="top right" className="p-badge" trigger={<Button className='badge' style={{ 'position': 'absolute', 'left': '589px', 'bottom': '102px', 'width': '50px', 'height': '25px' }}>Badge</Button>}>
								<img src={Dtsub0102_Badge02} alt="Executive AI/DT Badge" />
							</Popup>
							<Popup position="top right" className="p-badge" trigger={<Button className='badge' style={{ 'position': 'absolute', 'left': '1124px', 'bottom': '102px', 'width': '50px', 'height': '25px' }}>Badge</Button>}>
								<img src={Dtsub0102_Badge02} alt="AI/DT Literacy Badge" />
							</Popup>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "DT Technologies",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area">
						<div className="guide-btn">
							<Link
								to="https://mysuni.sk.com/suni-main/lecture/category/CLG00002/channel/CHN0000d"
								className="item-button"
							>
								<img src={CourseBook} alt="" />
								과정 바로가기
							</Link>
						</div>
					</div>
				</div>

				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>DT Technologies</strong>
					<div>
						<ul>
							<li>
								프로그래밍 언어, Cloud Computing, Blockchain, IoT, Big Data 등 DT 실행에 요구되는 주요 기술들에 대해 <br />
								학습하는 채널입니다. Global Tech. Event에 관한 학습콘텐츠도 제공하고 있습니다.
							</li>
						</ul>
						<p className="p_link dt">
							각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
						</p>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Dtsub0201} alt="DT Technologies" useMap="#Map2" />
							<map name="Map2">
								<area shape="rect" coords="235,66,705,126" href="https://mysuni.sk.com/suni-main/search?query=%EB%8F%84%EB%A0%88%EB%AF%B8" alt="도레미 파이썬  Vol. 1~2" />
								<area shape="rect" coords="715,66,1185,126" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-67/Course/C-LECTURE-4g" alt="R 프로그래밍 기초" />
								<area shape="rect" coords="235,246,705,307" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-13j/Course/C-LECTURE-yf" alt="엣지 컴퓨팅, 클라우드 컴퓨팅의 대체재인가?" />
								<area shape="rect" coords="715,247,1185,307" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-195/Course/C-LECTURE-13h" alt="클라우드 컴퓨팅이 가져온 비즈니스 혁신과 기술의 미래" />
								<area shape="rect" coords="235,317,705,377" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/cube/CUBE-bu5/lecture-card/LECTURE-CARD-9hj" alt="[정재승 교수와 함께하는 Tech &#38; Biz Talk] IoT는 세상을 어떻게 바꾸고 있는가?" />
								<area shape="rect" coords="715,317,1185,377" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-jd/Course/C-LECTURE-gg" alt="[코세라] Introduction to Big Data" />
								<area shape="rect" coords="235,498,705,558" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-14ys/view" alt="월간 테크브리핑 시리즈" />
								<area shape="rect" coords="715,498,1185,558" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-14pu/view" alt="'혁신 촉진가' 최형욱이 본 CES 2022 Insight" />
								<area shape="rect" coords="235,568,705,628" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-14oy/view" alt="현지연결! CES2022 Live Talk (VOD 다시 보기)" />
								<area shape="rect" coords="715,568,1185,628" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-1ac/Course/C-LECTURE-14l" alt="DT 트렌드 능력평가: CES 2021 이 정도는 알아야..." />
							</map>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "DT Biz Implementation",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area">
						<div className="guide-btn">
							<Link
								to="https://mysuni.sk.com/suni-main/lecture/category/CLG00002/channel/CHN0006o"
								className="item-button"
							>
								<img src={CourseBook} alt="" />
								과정 바로가기
							</Link>
						</div>

					</div>
				</div>

				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>
						DT Biz<br />
						Implementation
					</strong>
					<div>
						<ul>
							<li>
								고객 경험과 BM, 운영 프로세스의 변화를 가져 온 SK 안팎의 다양한 DT 사례와 실행 방안<br />
								그리고, 최신 ICT 트렌드에 대해 학습할 수 있는 채널입니다.
							</li>
						</ul>
						<p className="p_link dt">
							각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
						</p>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Dtsub0301} alt="DT Biz Implementation" useMap="#Map3" />
							<map name="Map3">
								<area shape="rect" coords="235,66,705,126" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-14wn/view" alt="대체단백질, 왜 이렇게 뜰까? " />
								<area shape="rect" coords="715,66,1185,126" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-14nf/view" alt="인터넷 생태계의 핫 키워드, Creator Economy" />
								<area shape="rect" coords="235,136,705,196" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-1384/view" alt="핵심만 콕! 빅테크 규제 논의 동향" />
								<area shape="rect" coords="715,136,1185,196" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/cube/CUBE-aws/lecture-card/LECTURE-CARD-8l2" alt="고객을 사로잡는 법, 구독" />
								<area shape="rect" coords="235,206,705,266" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-12yc/view" alt="빅데이터, 사람을 읽다" />
								<area shape="rect" coords="715,206,1185,266" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-kt/Course/C-LECTURE-ho" alt="테슬라를 통해 본 전기차 비즈니스 스토리" />
								<area shape="rect" coords="235,387,705,447" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-13yf/view" alt="[이천포럼 2021 다시보기] ICT big paradigm, 메타버스의 비즈니스 기회" />
								<area shape="rect" coords="715,387,1185,447" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-13z6/view" alt="[이천포럼 2021 다시보기] DT 시대의 함께 일하는 문화" />
								<area shape="rect" coords="235,457,705,517" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-13s9/view" alt="SK C&amp;C RPA 사례 및 DWP 소개" />
								<area shape="rect" coords="715,457,1185,517" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-13ui/view" alt="SK Hynix RPA _ RPAgo Story" />
								<area shape="rect" coords="235,527,705,587" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-136/Course/C-LECTURE-y2" alt="[이천포럼 2020] SK, Platform-driven BM혁신을 말하다" />
								<area shape="rect" coords="715,527,1185,587" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-9nz/view" alt="[SK ICT Tech Summit 2020] Big Data" />
								<area shape="rect" coords="233,707,706,768" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-14go/view" alt="[정재승의 Tech &amp; Biz Talk] AI Agent의 미래" />
								<area shape="rect" coords="715,706,1185,769" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-1488/view" alt="ESG 임팩트 렌즈로 만드는 새로운 사업의 기회들" />
								<area shape="rect" coords="235,778,705,838" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-ad7/view" alt="블록체인의 Biz. 활용 현황 및 Lessons Learned" />
								<area shape="rect" coords="715,778,1185,838" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-8f4/view" alt="엣지 컴퓨팅, 클라우드 컴퓨팅의 대체재인가?" />
							</map>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "CDS Track",
		render: () => <Tab.Pane attached={false}></Tab.Pane>,
	},

	{
		menuItem: "Data Analyst Track",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area">
						<div className="guide-btn">
							<Link
								to="https://mysuni.sk.com/suni-main/lecture/category/CLG00002/channel/CHN00008"
								className="item-button"
							>
								<img src={CourseBook} alt="" />
								과정 바로가기
							</Link>
						</div>
					</div>
				</div>
				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>
						Data Analyst <br />
						Track
					</strong>
					<div>
						<ul>
							<li>
								Data Analyst로 성장하는데 필요한 기초 Programming, 기초 통계/분석 지식과 전문적 분석 기술을 종합적으로<br />
								학습할 수 있는 채널입니다.
							</li>
						</ul>
						<p className="p_link dt">
							각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
						</p>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Dtsub0401} alt="Data Engineer Track" useMap="#Map4" />
							<map name="Map4">
								<area shape="rect" coords="235,66,705,126" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-g0/Course/C-LECTURE-d2" alt="[코세라] Data Visualization" />
								<area shape="rect" coords="715,66,1185,126" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-ji/Course/C-LECTURE-gc" alt="[코세라] Graph Analytics for Big Data" />
								<area shape="rect" coords="235,247,705,307" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-h9/Course/C-LECTURE-e8" alt="[코세라] Using Database with Python" />
								<area shape="rect" coords="715,247,1186,307" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-h7/Course/C-LECTURE-e7" alt="코세라] Using Python to Access Web Data" />
								<area shape="rect" coords="235,317,705,377" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-hc/Course/C-LECTURE-ea" alt="[코세라] Database and SQL for Data Science" />
								<area shape="rect" coords="715,317,1185,377" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-h8/Course/C-LECTURE-e6" alt="[코세라] Python Data Structures" />
								<area shape="rect" coords="235,498,705,558" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-ag/Course/C-LECTURE-82" alt="1. Why Python, Variables &#38; Data Types, String Methods, Math Functions" />
								<area shape="rect" coords="715,498,1185,558" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-af/Course/C-LECTURE-81" alt="2. Python Functions, Decision Making, Repeating Code, Iteration" />
								<area shape="rect" coords="235,568,705,628" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-ae/Course/C-LECTURE-80" alt="3. Collections Data Type - List/Tuple/Set/Dictionary" />
								<area shape="rect" coords="715,568,1185,628" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-ad/Course/C-LECTURE-7z" alt="4. Advanced Python Function, Exception Handling, Classes and Objects" />
							</map>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "Data Engineer Track",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area">
						<div className="guide-btn">
							<Link
								to="https://mysuni.sk.com/suni-main/lecture/category/CLG00002/channel/CHN00009"
								className="item-button"
							>
								<img src={CourseBook} alt="" />
								과정 바로가기
							</Link>
						</div>
					</div>
				</div>

				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>
						Data Engineer <br />
						Track
					</strong>
					<div>
						<ul>
							<li>
								구성원 여러분이 Data Engineer로 성장하도록 도움을 주는 채널입니다. <br />
								Database 기초 지식부터 Big Data 처리에 필요한 Engineering skill까지 학습할 수 있습니다.
							</li>
						</ul>
						<p className="p_link dt">
							각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
						</p>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Dtsub0501} alt="Data Engineer Track" useMap="#Map5" />
							<map name="Map5">
								<area shape="rect" coords="235,66,705,126" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-12rh/view" alt="Apache Kafka의 이해와 활용" />
								<area shape="rect" coords="715,66,1185,126" href="https://mysuni.sk.com/suni-main/lecture/card/CARD-12vu/view" alt="Prometheus &amp; Grafana 이해와 활용" />
								<area shape="rect" coords="232,136,705,197" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-a9/Course/C-LECTURE-7w" alt="Hadoop 이해와 활용" />
								<area shape="rect" coords="235,317,705,377" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-9z/Course/C-LECTURE-7n" alt="SQL 기초" />
								<area shape="rect" coords="715,317,1185,377" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-ll/Course/C-LECTURE-ia" alt="NoSQL 이해와 활용" />
								<area shape="rect" coords="235,387,705,447" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-191/Course/C-LECTURE-13o" alt="Scala 이해와 활용" />
							</map>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "Cloud Engineer Track",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area">
						<div className="guide-btn">
							<Link
								to="https://mysuni.sk.com/suni-main/lecture/category/CLG00002/channel/CHN0000a"
								className="item-button"
							>
								<img src={CourseBook} alt="" />
								과정 바로가기
							</Link>
						</div>
					</div>
				</div>

				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>
						Cloud Engineer <br />
						Track
					</strong>
					<div>
						<ul>
							<li>
								Cloud Engineer로 성장하는 데 필요한 클라우드 전환 및 운영에 관한 기본 지식과 다양한 스킬을 학습하는 채널입니다. <br />
								Market 인증 Certificate 취득을 위한 학습 콘텐츠도 함께 제공하고 있습니다.
							</li>
						</ul>
						<p className="p_link dt">
							각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
						</p>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Dtsub0601} alt="Data Engineer Track" useMap="#Map6" />
							<map name="Map6">
								<area shape="rect" coords="235,66,705,126" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-jj/Course/C-LECTURE-gb" alt="[코세라] Cloud Computing Concepts, Part 1 (UIUC)" />
								<area shape="rect" coords="715,66,1185,126" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-jk/Course/C-LECTURE-ga" alt="[코세라] Cloud Computing Concepts: Part 2 (UIUC)" />
								<area shape="rect" coords="235,136,705,196" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-g7/Course/C-LECTURE-db" alt="1: Azure 둘러보기, 가상서버 만들기" />
								<area shape="rect" coords="714,136,1185,196" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-g8/Course/C-LECTURE-da" alt="2: Azure Functions 이해, Azure 스토리지 활용 및 데이터 백업/마이그레이션 방법" />
								<area shape="rect" coords="235,317,705,377" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-a1/Course/C-LECTURE-7p" alt="Git을 사용한 버전 관리" />
								<area shape="rect" coords="715,317,1185,377" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-a0/Course/C-LECTURE-7o" alt="Spring 프레임워크 입문" />
								<area shape="rect" coords="235,387,705,447" href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/category/CLG00002/course-plan/COURSE-PLAN-9y/Course/C-LECTURE-7m" alt="리눅스 기초" />
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
		menuItem: `Introduction of\r\nDT Category`,
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
					<div className="ai-con-text">
						<p>
							Digital Transformation refers to the comprehensive activity that starts from the customers and uses digital technologies to transform<br />
							the existing operating process, the business model, and the work culture.<br />
							It has become the core component in practicing Deep Change we SK families strive to achieve.
						</p>
						<p>
							DT Category offers opportunities to learn major digital technologies such as data and cloud, which are the foundations of the DT drive.<br />
							Not only that, it allows learners to be exposed to international and domestic business cases that have brought new experiences<br />
							with the customers, innovated the BM and operations process, and changed the way of work.<br />
							In addition, programs that allow them to acquire digital technology certificates approved by the market are available all the time.
						</p>
					</div>
					<img src={Dtsub0101Eng} alt="Channel Introduction" />
				</div>

				<div className="college-cont-map sub pbtom">
					<div className="belt">
						<div className="map-area">
							<img src={Dtsub0102Eng} alt="Full Curriculum" />
							<Popup position="top right" className="p-badge" trigger={<Button className="badge" style={{ 'position': 'absolute', 'left': '854px', 'top': '91px', 'width': '50px', 'height': '25px' }}>Badge</Button>}>
								<img src={Dtsub0102_Badge01} alt="ML Engineer Track Badge" />
							</Popup>
							<Popup position="top right" className="p-badge" trigger={<Button className='badge' style={{ 'position': 'absolute', 'left': '589px', 'bottom': '102px', 'width': '50px', 'height': '25px' }}>Badge</Button>}>
								<img src={Dtsub0102_Badge02} alt="Executive AI/DT Badge" />
							</Popup>
							<Popup position="top right" className="p-badge" trigger={<Button className='badge' style={{ 'position': 'absolute', 'left': '1124px', 'bottom': '102px', 'width': '50px', 'height': '25px' }}>Badge</Button>}>
								<img src={Dtsub0102_Badge02} alt="AI/DT Literacy Badge" />
							</Popup>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "DT Technologies",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
				</div>

				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>DT Technologies</strong>
					<div>
						<ul>
							<li>
								It is a channel that offers various main core skills required in DT, such as programming language, cloud<br />
								computing, blockchain, IoT, big data, etc. Global Tech. Event-related learning content is provided as well.
							</li>
						</ul>
						{/* <p className="p_link dt">
							Click each badge and course to go to the corresponding page.
						</p> */}
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Dtsub0201Eng} alt="DT Technologies" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "DT Biz Implementation",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
				</div>
				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>
						DT Biz<br />
						Implementation
					</strong>
					<div>
						<ul>
							<li>
								This channel offers learners multiple cases inside and outside the company, wherein the usage of DT led to<br />
								the change in dealing with customers, in their BM, and the operations processes. The learners will also learn<br />
								the latest ICT trends.
							</li>
						</ul>
						{/* <p className="p_link dt">
							Click each badge and course to go to the corresponding page.
						</p> */}
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Dtsub0301Eng} alt="DT Biz Implementation" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "CDS Track",
		render: () => <Tab.Pane attached={false}></Tab.Pane>,
	},

	{
		menuItem: "Data Analyst Track",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
				</div>
				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>
						Data Analyst <br />
						Track
					</strong>
					<div>
						<ul>
							<li>
								It is a channel that provides learners with basic programming, statistics and analysis knowledge,<br />
								and professional analytical skills, essential to the growth as a data analyst.
							</li>
						</ul>
						{/* <p className="p_link dt">
							Click each badge and course to go to the corresponding page.
						</p> */}
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Dtsub0401Eng} alt="Data Engineer Track" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "Data Engineer Track",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
				</div>

				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>
						Data Engineer <br />
						Track
					</strong>
					<div>
						<ul>
							<li>
								It is a channel that helps the SK members to grow into a data engineer. The members can learn everything<br />
								from the basic knowledge on database to engineering skills required for big data processing.
							</li>
						</ul>
						{/* <p className="p_link dt">
							Click each badge and course to go to the corresponding page.
						</p> */}
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Dtsub0501Eng} alt="Data Engineer Track" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "Cloud Engineer Track",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
				</div>

				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>
						Cloud Engineer <br />
						Track
					</strong>
					<div>
						<ul>
							<li>
								It is a channel that provides learners with basic knowledge and basic skills in transforming and operating<br />
								the cloud, which is essential in the growth as a cloud engineer. It also offers learning content that are<br />
								necessary for getting certificated approved by the market.
							</li>
						</ul>
						{/* <p className="p_link dt">
							Click each badge and course to go to the corresponding page.
						</p> */}
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Dtsub0601Eng} alt="Data Engineer Track" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},

];
const panesChn = [
	{
		menuItem: "DT Category 介绍",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
					<div className="ai-con-text">
						<p>
							Digital Transformation是从客户角度出发, 利用Digital技术, 改变原有的运营流程, Business Model, 乃至公司文化/工作方式的综合性活动，<br /> 它是SK集团所追求的Deep Change的核心因素。
						</p>
						<p>
							DT Category不仅为成员提供可以学习促进DT的根本, 即Data/Cloud的Digital技术，<br />
							还可以学习国内外实现了创造新的用户体验, BM/运营流程创新, 改变工作方式等的Business Case。 <br />
							长期为在报考市场中公认的主要Digital技术Certificate时提供支持的项目。
						</p>
					</div>
					<img src={Dtsub0101Chn} alt="DT Category 介绍" />
				</div>

				<div className="college-cont-map sub pbtom">
					<div className="belt">
						<div className="map-area">
							<img src={Dtsub0102Chn} alt="" />
							<Popup position="top right" className="p-badge" trigger={<Button className="badge" style={{ 'position': 'absolute', 'left': '854px', 'top': '91px', 'width': '50px', 'height': '25px' }}>Badge</Button>}>
								<img src={Dtsub0102_Badge01} alt="ML Engineer Track Badge" />
							</Popup>
							<Popup position="top right" className="p-badge" trigger={<Button className='badge' style={{ 'position': 'absolute', 'left': '589px', 'bottom': '102px', 'width': '50px', 'height': '25px' }}>Badge</Button>}>
								<img src={Dtsub0102_Badge02} alt="Executive AI/DT Badge" />
							</Popup>
							<Popup position="top right" className="p-badge" trigger={<Button className='badge' style={{ 'position': 'absolute', 'left': '1124px', 'bottom': '102px', 'width': '50px', 'height': '25px' }}>Badge</Button>}>
								<img src={Dtsub0102_Badge02} alt="AI/DT Literacy Badge" />
							</Popup>
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "DT Technologies",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
				</div>

				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>DT Technologies</strong>
					<div>
						<ul>
							<li>
								可学习编程语言, Cloud Computing, Blockchain, IoT, Big Data等DT实行中所需的主要核心技术的频道。<br />
								还提供Global Tech.Event相关学习内容。
							</li>
						</ul>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Dtsub0201Chn} alt="DT Technologies" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "DT Biz Implementation",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
				</div>

				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>
						DT Biz<br />
						Implementation
					</strong>
					<div>
						<ul>
							<li>
								可学习为客户体验, BM, 运营流程带来变化的SK内外部各种DT案例和执行方案<br />以及最新的ICT趋势的频道。
							</li>
						</ul>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Dtsub0301Chn} alt="DT Biz Implementation" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "CDS Track",
		render: () => <Tab.Pane attached={false}></Tab.Pane>,
	},

	{
		menuItem: "Data Analyst Track",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
				</div>
				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>
						Data Analyst <br />
						Track
					</strong>
					<div>
						<ul>
							<li>
								可综合学习成为Data Analyst所需的基础Programming、统计/分析知识和专业分析技术的频道。
							</li>
						</ul>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Dtsub0401Chn} alt="Data Engineer Track" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "Data Engineer Track",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
				</div>

				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>
						Data Engineer <br />
						Track
					</strong>
					<div>
						<ul>
							<li>
								可帮助成员们成长为Data Engineer的频道。<br />可学习从数据库基础知识到大数据处理所需Engineering Skill的频道。
							</li>
						</ul>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Dtsub0501Chn} alt="Data Engineer Track" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "Cloud Engineer Track",
		render: () => (
			<Tab.Pane attached={false}>
				<div className="belt">
					<div className="guide-area" />
				</div>

				{/* 컬리지 텍스트 */}
				<div className="college-sub-txt">
					<strong>
						Cloud Engineer <br />
						Track
					</strong>
					<div>
						<ul>
							<li>
								可以学习想成为Could Engineer所需的Cloud转换与运营相关基础知识和各种技巧的频道。<br />并且还涵盖了Market认证Certificate申请方式教学内容。
							</li>
						</ul>
					</div>
				</div>

				<div className="college-link-box">
					<div className="belt">
						<div className="map-area">
							<img src={Dtsub0601Chn} alt="Data Engineer Track" />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
];

const TabMenuInnerSubDt = () => (
	<Tab
		menu={{ attached: false, tabular: false }}
		panes={panes}
		className="sub-tab-menu dt"
	/>
);

const TabMenuInnerSubDtEng = () => (
	<Tab
		menu={{ attached: false, tabular: false }}
		panes={panesEng}
		className="sub-tab-menu dt"
	/>
)

const TabMenuInnerSubDtChn = () => (
	<Tab
		menu={{ attached: false, tabular: false }}
		panes={panesChn}
		className="sub-tab-menu dt"
	/>
)

export { TabMenuInnerSubDt, TabMenuInnerSubDtEng, TabMenuInnerSubDtChn };
