import React from "react";
import { Tab } from "semantic-ui-react";
import {
	TabMenuInnerSubSKAcademy
} from "../../../CategoryIntroductionV2/components";
import { TabMenuInnerSubAiEng } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubAi";
import { TabMenuInnerSubDtEng } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubDt";
import { TabMenuInnerSubHappinessEng } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubHappiness";
import { TabMenuInnerSubSVEng } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubSV";
import { TabMenuInnerSubDesignEng } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubDesign";
import { TabMenuInnerSubGlobalEng } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubGlobal";
import { TabMenuInnerSubLeadershipEng } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubLeadership";
import { TabMenuInnerSubMgmtEng } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubMgmt";
import { TabMenuInnerSubSemicondEng } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubSemicond";
import { TabMenuInnerSubGreenEng } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubGreen";
import { TabMenuInnerSubBMEng } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubBM";
//import { TabMenuInnerSubSKAcademy } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubSKAcademy";

import AiBanner from "../../../../../images/all/ai-banner-v-2.png";
import DtBanner from "../../../../../images/all/Dt-banner.png";
import HappyBanner from "../../../../../images/all/happy-banner-v-2.png";
//import SvBanner from "../../../../../images/all/sv-banner.png";
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
								<strong>From an AI outcast to an AI trend-setter!</strong>
							</div>
							<div className="normal">
								<p>
									It provides an opportunity to become an expert in AI technology through<br />
									obtaining basic skills and knowledge in AI that every SK member must know<br />
									and developing the ability to utilize AI in the industry and for the job.
								</p>
							</div>
							<div className="panopto sub">
								<img src={AiBanner} alt="" />
							</div>
						</div>
					</div>

					<div className="college-free3 sub">
						<div className="tab-menu-wrap">
							<TabMenuInnerSubAiEng />
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
							<div className="strong"><strong>"The group's deep change comes from our hands!"</strong></div>
							<div className="normal">
								<p>
									Digital transformation leads to deep change.<br /><br />
									The members who will pioneer SK's deep change in the frontline must be equipped<br />
									with  an understanding of customers and business as well as digital skills.<br />
									This is a learning course for such members.
								</p>
							</div>
							<div className="panopto sub">
								<img src={DtBanner} alt="" />
							</div>
						</div>
					</div>

					<div className="college-free3 sub">
						<div className="tab-menu-wrap">
							<TabMenuInnerSubDtEng />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "Happiness",
		render: () => (
			<Tab.Pane>
				<div
					className="ui attached tab full segment active"
					data-tab="colleges3"
				>
					<div className="college-cont-title happiness">
						<div className="belt sub">
							<h1 className="title">Happiness</h1>
							<div className="strong"><strong>For the happiness of all SK members!</strong></div>
							<div className="normal">
								<p>
									Happiness Category aims to contribute substantially to the pursuit of happiness of<br />
									all SK members by cultivating and putting into practice the capacity to promote<br />
									happiness throughout life, including the workplace, on the basis of understanding<br />
									the foundational concept of happiness and the SK management philosophy.
								</p>
							</div>
							<div className="panopto sub">
								<img src={HappyBanner} alt="" />
							</div>
						</div>
					</div>

					<TabMenuInnerSubHappinessEng />
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
							<strong>
							A place to develop necessary competency for the future and<br/>
							your work - SV and ESG - and sustainable business and society.
							</strong>
						</div>
						<div className="normal">
							<p>
							“Social value” that indicates the direction for deep change<br/>
							Develop the ability to empathize with and solve the pain points of the stakeholders together!
							</p>
						</div>
						<ul className="tag-wrap">
							<li># Sustainability</li>
							<li># SocialProblem</li>
							<li># Stakeholder</li>
							<li># ESG</li>
							<li># SV BM</li>
							<li># SVMeasurement</li>
						</ul>
						<div className="panopto sub">
							<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/img-sv-v2.png" alt="SV·ESG Banner" />
						</div>
						</div>
					</div>

					<TabMenuInnerSubSVEng />
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "Innovation & Design",
		render: () => (
			<Tab.Pane>
				<div
					className="ui attached tab full segment active"
					data-tab="colleges5"
				>
					<div className="college-cont-title design">
						<div className="belt sub">
						<h1 className="title">Innovation &amp; Design</h1>
						<div className="strong">
							<strong>Customer-centered Biz and Experience Innovation</strong>
						</div>
						<div className="normal">
							<p>
							Understand and internalize the process that enables the
							employees and the organization to
							<br />
							redefine the problem based on the customer understanding and
							empathy (customer-centered),
							<br />
							derive a solution by identifying the root cause of the problem
							through a balanced, logical,
							<br />
							creative thinking (problem solving), and execute quickly
							(innovation of the WoW) in the era of
							<br />
							VUCA.
							</p>
						</div>
						<div className="panopto sub">
							<iframe
							title="audio type"
							src="https://sku.ap.panopto.com/Panopto/Pages/BrowserNotSupported.aspx?continue=true&ReturnUrl=%2FPanopto%2FPages%2FEmbed.aspx%3Fid%3D7658f240-2fd6-4f09-97fe-ab43006f0655"
							width="436"
							height="245"
							style={{ padding: '0px', border: '0px' }}
							frameBorder="0"
							allowFullScreen
							allow="autoplay"
							/>
						</div>
						</div>
					</div>

					<TabMenuInnerSubDesignEng />
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
						<div className="strong">
							<strong>A New Start for Globalization</strong>
						</div>
						<div className="normal">
							<p>
							Global Category aims to foster "Global Story Designers" who can develop a "Global<br/>
							Perspective" that can read the trends of global (or local) businesses and produce<br/>
							results even under changing environments. The college also hopes to train the<br/>
							human capital that is required for the globalization of the SK Group.
							</p>
						</div>
						<ul className="tag-wrap">
							<li># Geopolitical Change And Response </li>
							<li># Global Story Designer</li>
							<li># Global Economy </li>
							<li># Regional Expert </li>
						</ul>
						<div className="panopto sub">
							<iframe
							title="audio type"
							src="https://sku.ap.panopto.com/Panopto/Pages/BrowserNotSupported.aspx?continue=true&amp;ReturnUrl=%2FPanopto%2FPages%2FEmbed.aspx%3Fid%3D80b7b6d1-c2e6-41c0-9d93-ab42005d5dbf%26offerviewer%3Dfalse%26showtitle%3Dfalse%26interactivity%3Dnone%26showbrand%3Dfalse"
							width="436"
							height="245"
							allow="autoplay"
							style={{ padding: '0px', border: '0px' }}
							frameBorder="0"
							allowFullScreen
							></iframe>
						</div>
						</div>
					</div>

					<TabMenuInnerSubGlobalEng />
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
							<div className="strong"><strong>Grow into a Deep Change leader!</strong></div>
							<div className="normal">
								<p>
									Leadership Category helps all members grow into Deep Change leaders who can<br />
									self-grow, promote change in others, and innovate the company (BM, an<br />
									organization) by providing individual leadership diagnoses, customized capacity<br />
									development guides, the latest content, and an effective learning environment.
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

					<TabMenuInnerSubLeadershipEng />
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
								<strong>How Should I Change My Work for Deep Change ?<br />How Can I Improve Myself ?</strong>
							</div>
							<div className="normal">
								<p>
									Management offers professional lessons in 7 function groups and 1 competency area to<br />
									enhance the learners’ business executive ability to achieve deep change.<br />
									In addition to the knowledge and expertise for each function group, it supports the<br />
									development of critical skills
								</p>
							</div>
							<div className="panopto sub">
								<img src={MgmtBanner} alt='' />
							</div>
						</div>
					</div>

					<div className="college-free3 sub">
						<div className="tab-menu-wrap">
							<TabMenuInnerSubMgmtEng />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "Future Semiconductors",
		render: () => (
			<Tab.Pane>

				<div
					className="ui attached tab full segment active"
					data-tab="colleges9"
				>
					<div className="college-cont-title semicond">
						<div className="belt sub">
						<h1 className="title">Future Semiconductor</h1>
						<div className="strong">
							<strong>Semiconductors, opening eyes that see the future.</strong>
						</div>
						<div className="normal">
							<p>
							The category helps all SK members not only enhance their knowledge of semicon-<br/>
							ductors that will be helpful to themselves, but also assess the nature of the semi- <br />
							conductor industry and predict the world that future technologies will open up.
							</p>
						</div>
						<div className="panopto sub">
							<iframe
							title="audio type"
							src="https://sku.ap.panopto.com/Panopto/Pages/BrowserNotSupported.aspx?continue=true&ReturnUrl=%2FPanopto%2FPages%2FEmbed.aspx%3Fid%3Dfbe4050a-7d9d-40bb-a819-ab89007cb3cd%26offerviewer%3Dfalse%26showtitle%3Dfalse%26interactivity%3Dnone%26showbrand%3Dfalse"
							width="436"
							height="245"
							style={{ padding: '0px', border: '0px' }}
							frameBorder="0"
							allowFullScreen
							allow="autoplay"
							/>
						</div>
						<ul className="tag-wrap">
							<li># Semiconductor History</li>
							<li># Prospect of the Semiconductor Industry</li>
							<li># Semiconductor Terminology</li>
							<li># Semiconductor Technology Theories</li>
							<li># Semiconductor Types</li>
							<li># Future Technology</li>
							<li># Semiconductor Ecosystem</li>
						</ul>
						</div>
					</div>

					<TabMenuInnerSubSemicondEng />
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
					<div className="college-cont-title green">
						<div className="belt sub">
						<h1 className="title">Green</h1>
						<div className="strong">
							<strong>The “Green Category”, the evolved version of Energy Solution Category</strong>
						</div>
						<div className="normal">
							<p>
								The aim is to raise awareness of the importance of the environment and of the new<br />
								world the environment businesses make and equip learners with professional<br />
								knowledge essential to carbon neutrality, resource circulation, energy solution, etc.<br />
								It also aims to take a step one by one towards the “Green Deep Change.”<br />
								We challenge ourselves to the success of environmental businesses - Green Start!
							</p>
						</div>
						<div className="panopto sub">
							<img
								src={energySolution}
								alt=""
							/>
						</div>
						</div>
					</div>

					<TabMenuInnerSubGreenEng />
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
									We are committed to actively support the cause of raising BM design experts<br />
									and enhancing BM design and storytelling capacities in business and finance.<br />
									By doing so, we hope to contribute to bringing about the Deep Change<br />
									outcomes in our group and subsidiaries.
								</p>
							</div>
							<ul className="tag-wrap">
								<li># BM Innovation</li>
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

					<TabMenuInnerSubBMEng />
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "SK Academy",
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
		<Tab panes={panes} defaultActiveIndex={0} className="tab-menu-inner sub English" />
	)
}
export default TabMenuInner;