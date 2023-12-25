import React from "react";
import { Image, Tab } from "semantic-ui-react";
import { TabMenuInnerSubSKAcademy } from "..";
import { TabMenuInnerSubAi } from "../TabMenuInnerSubAi";
import { TabMenuInnerSubDt } from "../TabMenuInnerSubDt";
import { TabMenuInnerSubHappiness } from "../TabMenuInnerSubHappiness";
import { TabMenuInnerSubSV } from "../TabMenuInnerSubSV";
import { TabMenuInnerSubDesign } from "../TabMenuInnerSubDesign";
import { TabMenuInnerSubLeadership } from "../TabMenuInnerSubLeadership";
import { TabMenuInnerSubGlobal } from "../TabMenuInnerSubGlobal";
import { TabMenuInnerSubMgmt } from "../TabMenuInnerSubMgmt";
import { TabMenuInnerSubSemicond } from "../TabMenuInnerSubSemicond";
import { TabMenuInnerSubGreen } from "../TabMenuInnerSubGreen";
import { TabMenuInnerSubBM } from "../TabMenuInnerSubBM";
//import { TabMenuInnerSubSKAcademy } from "../TabMenuInnerSubSKAcademy";

import AiBanner from "../../../../../images/all/ai-banner-v-2.png";
import DtBanner from "../../../../../images/all/Dt-banner-v-2.png";
import HappyBanner from "../../../../../images/all/happy-banner-v-2.png";
import SvBanner from "../../../../../images/all/img-sv-v2.png";
import MgmtBanner from "../../../../../images/all/mgmt-banner-v-2.png";
import LeaderBanner from "../../../../../images/all/leadership-banner-v-2.png";
//import BmdBanner from "../../../../../images/all/img-co-11-ttl.png";
import SkBanner from "../../../../../images/all/sk-banner.png";
import energySolution from "../../../../../images/all/energy.png";


const panes = [
	{
		menuItem: "AI",
		render: () => (
			<Tab.Pane>
				<div
					className="ui attached tab full segment active"
					data-tab="colleges1"
				>
					<div className="college-cont-title ai">
						<div className="belt sub">
							<h1 className="title">AI</h1>
							<div className="strong">
								<strong>AI 아싸(Outsider)에서 AI 핵인싸(Insider)로!</strong>
							</div>
							<div className="normal">
								<p>
									SK 구성원이라면 갖춰야 할 AI 지식으로 기본기를 다지고 <br />
									각 산업과 직무에서 AI를 활용하는 역량을 키운 다음<br />
									AI 기술 전문가로 성장할 기회를 제공합니다.
								</p>
							</div>
							<div className="panopto sub">
								<img src={AiBanner} alt="" />
							</div>
						</div>
					</div>

					<div className="college-free3 sub">
						<div className="tab-menu-wrap">
							<TabMenuInnerSubAi />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "DT",
		render: () => (
			<Tab.Pane>
				<div
					className="ui attached tab full segment active"
					data-tab="colleges2"
				>
					<div className="college-cont-title dt">
						<div className="belt sub">
							<h1 className="title">DT</h1>
							<div className="strong"><strong>'그룹의 Deep Change는 우리 손으로!’</strong></div>
							<div className="normal">
								<p>
									Digital Transformation은 Deep Change로 이어진다.<br />
									<br />
									SK의 Deep Change를 이끌어 나갈 구성원들이라면 <br />
									고객과 업에 대한 이해와 Digital Skill을 함께 갖춰야겠죠.  <br />
									그들을 위한 학습과정을 여기 마련했습니다.
								</p>
							</div>
							<div className="panopto sub">
								<img src={DtBanner} alt="" />
							</div>
						</div>
					</div>

					<div className="college-free3 sub">
						<div className="tab-menu-wrap">
							<TabMenuInnerSubDt />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "행복",
		render: () => (
			<Tab.Pane>
				<div
					className="ui attached tab full segment active"
					data-tab="colleges3"
				>
					<div className="college-cont-title happiness">
						<div className="belt sub">
							<h1 className="title">행복</h1>
							<div className="strong"><strong>SK 구성원 전체의 행복을 키워갑니다.</strong></div>
							<div className="normal">
								<p>
									행복에 대한 기본 개념과 SK경영철학의 이해를 기반으로 직장생활을 포함한 삶 전반에서<br />
									행복을 증진할 수 있는 역량을 배양하고 실천함으로써, 나의 행복과 SK 구성원 전체의 행복<br />
									을 실질적으로 만들어나가는 것을 목표로 합니다
								</p>
							</div>
							<div className="panopto sub">
								<img src={HappyBanner} alt="" />
							</div>
						</div>
					</div>

					<TabMenuInnerSubHappiness />
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "SV·ESG",
		render: () => (
			<Tab.Pane>
				<div
					className="ui attached tab full segment active"
					data-tab="colleges4"
				>
					<div className="college-cont-title sv">
						<div className="belt sub">
							<h1 className="title">SV·ESG</h1>
							<div className="strong">
								<strong>내일[Tomorrow+My Work]을 위한 SV, <br />
									기업과 사회의 지속가능성을 위한 필수 역량을 키우는 곳!</strong>
							</div>
							<div className="normal">
								<p>
									Deep Change의 방향을 제시하는 ‘사회적 가치’ <br />
									이해관계자들의 Painpoint를 공감하고 해결하는 역량을 함께
									키워봅시다!
								</p>
							</div>
							<ul className="tag-wrap">
								<li># 지속가능성</li>
								<li># 사회문제</li>
								<li># 이해관계자</li>
								<li># ESG</li>
								<li># SV BM</li>
								<li># SV 측정</li>
							</ul>
							<div className="panopto sub">
								<img src={SvBanner} alt="" />
							</div>
						</div>
					</div>

					<TabMenuInnerSubSV />
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "혁신디자인",
		render: () => (
			<Tab.Pane>
				<div
					className="ui attached tab full segment active"
					data-tab="colleges5"
				>
					<div className="college-cont-title design">
						<div className="belt sub">
							<h1 className="title">혁신디자인</h1>
							<div className="strong"><strong>고객 중심으로 Biz.와 경험을 혁신!</strong></div>
							<div className="normal">
								<p>
									VUCA 시대, 고객에 대한 이해와 공감을 바탕으로 문제를 재정의하고 (고객 중심) <br />
									논리적∙창의적 사고의 균형을 통해 문제의 근본 원인을 파악하여 솔루션을 도출하며 (문제 해결)<br />
									구성원과 조직이 빠른 실행(일하는 방법의 혁신)을 할 수 있는 프로세스를 이해하고 <br />
									내재화하도록 함께합니다.
								</p>
							</div>
							<div className="panopto sub">
								<iframe
									title="audio type"
									src="https://sku.ap.panopto.com/Panopto/Pages/BrowserNotSupported.aspx?continue=true&ReturnUrl=%2FPanopto%2FPages%2FEmbed.aspx%3Fid%3D7658f240-2fd6-4f09-97fe-ab43006f0655"
									width="436"
									height="245"
									style={{ padding: "0px", border: "0px" }}
									frameBorder="0"
									allowFullScreen
									allow="autoplay"
								/>
							</div>
						</div>
					</div>

					<TabMenuInnerSubDesign />
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "Global",
		render: () => (
			<Tab.Pane>
				<div
					className="ui attached tab full segment active"
					data-tab="colleges6"
				>
					<div className="college-cont-title global">

						<div className="belt sub">
							<h1 className="title">Global</h1>
							<div className="strong"><strong>Globalization을 위한 새로운 시작</strong></div>
							<div className="normal">
								<p>
									글로벌 비즈니스의 판을 읽는 'Global Perspective'를 키우고 글로벌 (혹은 Local ) 상황에<br />
									맞는 Globalization을 추진할 수 있는 ‘Global Story Designer’를 키우는 것을 목표로 합니다.<br />
									이를 통해 SK그룹의 Globalization에 필요한 Human Capital들을 길러내고자 합니다.
								</p>
							</div>
							<ul className="tag-wrap">
								<li># 지정학적변화와 대응</li>
								<li># Global Story Designer</li>
								<li># 글로벌 경제</li>
								<li># 지역 전문가</li>
							</ul>
							<div className="panopto sub">
								<iframe
									title="audio type"
									src="https://sku.ap.panopto.com/Panopto/Pages/BrowserNotSupported.aspx?continue=true&ReturnUrl=%2FPanopto%2FPages%2FEmbed.aspx%3Fid%3D80b7b6d1-c2e6-41c0-9d93-ab42005d5dbf"
									width="436"
									height="245"
									style={{ padding: "0px", border: "0px" }}
									frameBorder="0"
									allowFullScreen
									offerviewer={false}
								// allow="autoplay"
								/>
							</div>
						</div>
					</div>
					<TabMenuInnerSubGlobal />
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "Leadership",
		render: () => (
			<Tab.Pane>
				<div
					className="ui attached tab full segment active"
					data-tab="colleges7"
				>
					<div className="college-cont-title leadership">
						<div className="belt sub">
							<h1 className="title">Leadership</h1>
							<div className="strong"><strong>Deep Change Leader로 성장!</strong></div>
							<div className="normal">
								<p>
									개인별 리더십 진단과 맞춤형 역량 개발 가이드를 지원하고 <br />
									최신 컨텐츠와 효과적인 학습 환경을 제공하여, 모든 구성원이 스스로를 성장시키고, <br />
									다른 사람의 변화를 촉진하며, 회사(BM,조직)를 혁신하는 <br />
									Deep Change Leader로 성장하도록 돕습니다.
								</p>
							</div>
							<ul className="tag-wrap">
								<li># Leading self</li>
								<li># Leading People</li>
								<li># Leading Orgnization&amp;Biz</li>
								<li># Leading Change</li>
							</ul>

							<div className="panopto sub">
								<img src={LeaderBanner} alt="" />
							</div>
						</div>
					</div>
					<TabMenuInnerSubLeadership />
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "Management",
		render: () => (
			<Tab.Pane>
				<div
					className="ui attached tab full segment active"
					data-tab="colleges8"
				>
					<div className="college-cont-title management">
						<div className="belt sub">
							<h1 className="title">Management</h1>
							<div className="strong">
								<strong>Deep Change를 위해 내가 하는 일은 어떻게 바뀌어야 할까요?<br />어떻게 성장할 수 있을까요?</strong>
							</div>
							<div className="normal">
								<p>
									Management는 Deep Change를 위한 Biz. 실행 역량 제고를 위해 7개 Function Group,<br />
									1개 Competency 영역의 직무 역량 학습을 제공합니다. Function Group별 지식/전문성 뿐 아니라<br />실질적 Biz. 성과와 연계된 Critical Skill 역량도 확보할 수 있도록 지원합니다.
								</p>
							</div>
							<div className="panopto sub">
								<img src={MgmtBanner} alt='' />
							</div>
						</div>
					</div>

					<div className="college-free3 sub">
						<div className="tab-menu-wrap">
							<TabMenuInnerSubMgmt />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "미래반도체",
		render: () => (
			<Tab.Pane>

				<div
					className="ui attached tab full segment active"
					data-tab="colleges9"
				>
					<div className="college-cont-title semicond">
						<div className="belt sub">
							<h1 className="title">미래 반도체</h1>
							<div className="strong"><strong>반도체, 미래를 보는 눈을 뜨다.</strong></div>
							<div className="normal">
								<p>
									SK 구성원 누구에게나 도움이 될 반도체 소양을 높여줄 뿐 아니라
									<br />
									반도체 산업의 본질을 파악하고, 미래의 기술이 열어갈 세상을 전망
									할 수 <br />
									있도록 도와드립니다.
								</p>
							</div>
							<div className="panopto sub">
								<iframe
									title="audio type"
									src="https://sku.ap.panopto.com/Panopto/Pages/BrowserNotSupported.aspx?continue=true&ReturnUrl=%2FPanopto%2FPages%2FEmbed.aspx%3Fid%3Db1ebc675-879d-4a0c-a336-ab43009f4752"
									width="436"
									height="245"
									style={{ padding: "0px", border: "0px" }}
									frameBorder="0"
									allowFullScreen
									allow="autoplay"
								/>
							</div>
							<ul className="tag-wrap">
								<li># 반도체 역사</li>
								<li># 반도체 산업 전망</li>
								<li># 반도체 용어</li>
								<li># 반도체 기술 이론</li>
								<li># 반도체 종류</li><br />
								<li># 미래 기술</li>
								<li># 반도체 Ecosystem</li>
							</ul>
						</div>
					</div>

					<TabMenuInnerSubSemicond />
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "Green",
		render: () => (
			<Tab.Pane>
				<div
					className="ui attached tab full segment active"
					data-tab="colleges11"
				>
					<div className="college-cont-title energy">
						<div className="belt sub">
							<div className="panopto sub">
								<Image src={energySolution} />
							</div>
							<h1 className="title">Green</h1>
							<div className="strong">
								<strong>에너지솔루션 Category에서 진화한 “Green Category”</strong>
							</div>
							<div className="normal">
								<p>
									환경 사업이 만드는 새로운 세상! Net Zero와 Green Biz.의 중요성을 인식하고,<br />
									탈탄소, 수소, 순환경제, 에너지솔루션 등에 필요한 전문지식을 학습하여,<br />
									Green Deep Change에 한걸음 한걸음 나아가는 것을 목표로 하고 있습니다.<br />
									환경 사업의 성공을 위한 우리의 도전, Green Start!
								</p>
							</div>
						</div>
					</div>
					<TabMenuInnerSubGreen />
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "BM Design & Storytelling",
		render: () => (
			<Tab.Pane>
				<div
					className="ui attached tab full segment active"
					data-tab="colleges8"
				>
					<div className="college-cont-title BM">
						<div className="belt sub">
							<h1 className="title">BM Design &#38; Storytelling</h1>
							<div className="strong"><strong>Ideate and Accelerate Deep Change!</strong></div>
							<div className="normal">
								<p>
									BM Design 전문가 양성 및 Financial Story Design/ Telling 역량 강화를 적극 지원함<br />으로써 그룹/관계사 Deep Change 성과 창출에 기여하겠습니다.
								</p>
							</div>
							<ul className="tag-wrap">
								<li># BM혁신</li>
								<li># Sustainable BM</li>
								<li># BM Design</li>
								<li># Portfolio Management</li>
								<li># Financial Story</li>
								<li># Storytelling</li>
								<li># Stakeholder</li>
							</ul>
							<div className="panopto sub">
								<iframe
									title="audio type"
									src="https://sku.ap.panopto.com/Panopto/Pages/BrowserNotSupported.aspx?continue=true&ReturnUrl=%2FPanopto%2FPages%2FEmbed.aspx%3Fid%3Dca99cc78-c6fd-4829-8bea-ae39001f10ff"
									width="436"
									height="245"
									style={{ padding: "0px", border: "0px" }}
									frameBorder="0"
									allowFullScreen
									offerviewer={false}
								// allow="autoplay"
								/>
								{/* <img src={BmdBanner} alt="" /> */}
							</div>
						</div>
					</div>

					<TabMenuInnerSubBM />
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "SK아카데미",
		render: () => (
			<Tab.Pane>
				<div
					className="ui attached tab full segment active"
					data-tab="colleges10"
				>
					<div className="college-cont-title skacademy">
						<div className="belt">
							<div className="img">
								<img src={SkBanner} alt="" />
							</div>
							<h1 className="title">SK아카데미</h1>
							<div className="strong">
								<strong>“나무를 키우듯, 인재를 키워온 SK인재육성의 산실”</strong>
							</div>
							<div className="normal">
								<p>
									SK아카데미는 SKMS/Values 전파를 통해 SK 기업문화의 토대를
									강화하고, <br />
									체계적인 육성 Pipeline에 따라 미래 경영자와 Biz. 전문가를
									육성합니다.
								</p>
							</div>
							<ul className="tag-wrap">
								<li># 신입사원</li>
								<li># 영입구성원</li>
								<li># 신임팀장</li>
								<li># 신임임원</li>
								<li># 영입임원</li>
								<li># HLP</li>
								<li># 여성리더</li>
								<li># 역량 School</li>
								<li># HR Conference</li>
								<li># Global HR Seminar</li>
							</ul>
						</div>
					</div>
					<TabMenuInnerSubSKAcademy />
				</div>
			</Tab.Pane>
		),
	},
];
const TabMenuInner = () => {
	return (
		<Tab panes={panes} defaultActiveIndex={0} className="tab-menu-inner sub" />
	)
}
export default TabMenuInner;