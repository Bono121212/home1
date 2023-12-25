import React from "react";
import { Image, Tab } from "semantic-ui-react";
import {
	TabMenuInnerSubSKAcademy
} from "../../../CategoryIntroductionV2/components";
import { TabMenuInnerSubAiChn } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubAi";
import { TabMenuInnerSubDtChn } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubDt";
import { TabMenuInnerSubHappinessChn } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubHappiness";
import { TabMenuInnerSubSVChn } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubSV";
import { TabMenuInnerSubDesignChn } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubDesign";
import { TabMenuInnerSubGlobalChn } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubGlobal";
import { TabMenuInnerSubLeadershipChn } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubLeadership";
import { TabMenuInnerSubMgmtChn } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubMgmt";
import { TabMenuInnerSubSemicondChn } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubSemicond";
import { TabMenuInnerSubGreenChn } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubGreen";
import { TabMenuInnerSubBMChn } from "../../../CategoryIntroductionV2/components/TabMenuInnerSubBM";
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
								<strong>从AI外行(Outsider) 到AI内行(Insider)。</strong>
							</div>
							<div className="normal">
								<p>
									帮助所有SK成员夯实AI基础知识 <br />
									培养在各个产业和职务中运用AI的能力<br />
									提供大家成长为AI技术专家的机会。
								</p>
							</div>
							<div className="panopto sub">
								<img src={AiBanner} alt="" />
							</div>
						</div>
					</div>

					<div className="college-free3 sub">
						<div className="tab-menu-wrap">
							<TabMenuInnerSubAiChn />
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
							<div className="strong"><strong>“小组的Deep Change在我们手中!”</strong></div>
							<div className="normal">
								<p>
									Digital Transformation会演变为Deep Change。<br />
									<br />
									想要引领SK的Deep Change的成员们 <br />
									就需要充分理解客户和业务, 并具备Digital Skill。  <br />
									为此, 我们准备了本学习课程。
								</p>
							</div>
							<div className="panopto sub">
								<img src={DtBanner} alt="" />
							</div>
						</div>
					</div>

					<div className="college-free3 sub">
						<div className="tab-menu-wrap">
							<TabMenuInnerSubDtChn />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "幸福",
		render: () => (
			<Tab.Pane>
				<div
					className="ui attached tab full segment active"
					data-tab="colleges3"
				>
					<div className="college-cont-title happiness">
						<div className="belt sub">
							<h1 className="title">幸福</h1>
							<div className="strong"><strong>为了SK全体成员的幸福!</strong></div>
							<div className="normal">
								<p>
									基于对幸福的基本概念和SK经营哲学的理解, 培养和实践包括工作在内的全部人生<br />中增进幸福的力量, 把投身SK全体成员的幸福追求为目标。
								</p>
							</div>
							<div className="panopto sub">
								<img src={HappyBanner} alt="" />
							</div>
						</div>
					</div>

					<TabMenuInnerSubHappinessChn />
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
							这里是培养未来[Tomorrow + My Work]的SV, ESG和<br/>
							确保企业, 社会可持续发展的摇篮！
							</strong>
						</div>
						<div className="normal">
							<p>
							指出Deep Change方向的“社会价值”<br/>
							共同培养可深度了解和解决利害各方Paintpoint的能力！
							</p>
						</div>
						<ul className="tag-wrap">
							<li># 可持续发展</li>
							<li># 社会问题</li>
							<li># 利害各方</li>
							<li># ESG</li>
							<li># SV BM</li>
							<li># SV 测定</li>
						</ul>
						<div className="panopto sub">
							<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/img-sv-v2.png" alt="SV·ESG Banner" />
						</div>
						</div>
					</div>

					<TabMenuInnerSubSVChn />
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "创新设计",
		render: () => (
			<Tab.Pane>
				<div
					className="ui attached tab full segment active"
					data-tab="colleges5"
				>
					<div className="college-cont-title design">
						<div className="belt sub">
							<h1 className="title">创新设计</h1>
							<div className="strong"><strong>以客户为中心创新Biz.和用户体验！</strong></div>
							<div className="normal">
								<p>
									VUCA时代, 基于对客户的理解和共鸣, 重新定义问题(以客户为中心)<br />
									通过平衡逻辑性∙创意性思维, 寻找问题的根本原因，提出解决方案(解决问题)<br />
									理解成员和组织可以快速执行(工作方式的创新)的流程, 并努力将其内在化。
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

					<TabMenuInnerSubDesignChn />
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
							<strong>基于Globalization的新开始</strong>
						</div>
						<div className="normal">
							<p>
							旨在培养能够解读全球商业格局的“Global Perspective”, 培养能够在不同的<br/>
							Global(或Local)环境下取得成果的“Global Manager”。<br/>
							以此培养SK集团在Globalization时所需的Human Capital。
							</p>
						</div>
						<ul className="tag-wrap">
							<li># 地缘政治学的变化与对策</li>
							<li># Global Story Designer</li>
							<li># 全球经济</li>
							<li># 地区专家 </li>
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
					<TabMenuInnerSubGlobalChn />
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
							<div className="strong"><strong>成长为Deep Change Leader！</strong></div>
							<div className="normal">
								<p>
									支持个人领导能力诊断和定制型力量开发指南, 提供最新内容和有效的学习环境，<br />帮助所有成员自我成长, 带动变化他人, 改革公司(BM, 组织)的Deep Change<br />Leader。
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

					<TabMenuInnerSubLeadershipChn />
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
								<strong>为实现Deep Change，如何改变工作方式呢？<br />如何才能成长呢？</strong>
							</div>
							<div className="normal">
								<p>
									Management 为实现Deep Change，提高Biz.执行能力，<br />
									涵盖7个Function Group，1个Competency领域的职务能力学习内容。<br />
									除了各个Function Group的知识/专业性，还可帮助成员提升Critical Skill，<br />
									以真正获取Biz.能力。
								</p>
							</div>
							<div className="panopto sub">
								<img src={MgmtBanner} alt='' />
							</div>
						</div>
					</div>

					<div className="college-free3 sub">
						<div className="tab-menu-wrap">
							<TabMenuInnerSubMgmtChn />
						</div>
					</div>
				</div>
			</Tab.Pane>
		),
	},
	{
		menuItem: "未来半导体",
		render: () => (
			<Tab.Pane>
				<div
					className="ui attached tab full segment active"
					data-tab="colleges9"
				>
					<div className="college-cont-title semicond">
						<div className="belt sub">
						<h1 className="title">未来半导体</h1>
						<div className="strong">
							<strong>半导体，开始展望未来。</strong>
						</div>
						<div className="normal">
							<p>
							不仅能提高SK所有成员的半导体水平，还能了解半导体产业的本质， 并展<br />
							望由未来技术开启的世界。
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
							<li># 半导体历史</li>
							<li># 半导体产业展望</li>
							<li># 半导体术语</li>
							<li># 半导体技术理论</li>
							<li># 半导体种类</li>
							<br />
							<li># 未来技术</li>
							<li># 半导体Ecosystem</li>
						</ul>
						</div>
					</div>
					<TabMenuInnerSubSemicondChn />
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
						<h1 className="title">Green</h1>
						<div className="strong">
							<strong>从能源解决方案Category进化的 “Green Category”</strong>
						</div>
						<div className="normal">
							<p>
							环境事业创造的全新世界，提高环境重要性的认知，学习碳中和、氢气、资源循
							<br />
							环、能源解决方案等所需专业知识，一步步走向Green Deep Change。
							<br />
							为在环境事业中获得成功我们要做的挑战——Green Start！
							</p>
						</div>
						<div className="panopto sub">
							<Image src={energySolution} />
						</div>
						</div>
					</div>

					<TabMenuInnerSubGreenChn />
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
									积极进行BM Design专家培养及Biz Financial Story Design/Telling能力提升,<br />
									为集团/相关公司创造Deep Change成果做出贡献。
								</p>
							</div>
							<ul className="tag-wrap">
								<li># BM创新</li>
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

					<TabMenuInnerSubBMChn />
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
		<Tab panes={panes} defaultActiveIndex={0} className="tab-menu-inner sub China" />
	)
}
export default TabMenuInner;