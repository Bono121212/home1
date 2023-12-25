 import React,{useState, useEffect} from 'react';
// import { Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import CubeInfoList from "../_Components/CubeInfoList";
import CubeDetailHeader from "../_Components/CubeDetailHeader";
import CubeDetailMenu from "../_Components/CubeDetailMenu";
import OverviewDescription from "../_Components/OverviewDescription";
import OverviewCurriculumPreiod from "../_Components/OverviewCurriculumPreiod";
import OverviewSeriese from "../_Components/OverviewSeriese";
import OverviewReview from "../_Components/OverviewReview";
import OverviewRelation from "../_Components/OverviewRelation";
import OverviewCurriculumSinglePreiod from "../_Components/OverviewCurriculumSinglePreiod";
// import OverviewInquery from "../_Components/OverviewInquery";
import OverviewTeacher from '../_Components/OverviewTeacher';
import OverviewCommunity from '../_Components/OverviewCommunity';
import CubeDetailSec from '../_Components/CubeDetailSec';
import LinkContainer from '../CubeClass/components/LinkContainer';

const CardOverviewPreiod03 = () => {
	// Tabmenu
	const [selectedIdx, setSelectedIdx] = useState(1);
    const [stickyValue, setStickyValue] = useState(0);

	// Layout
	const [scrollValue, setScrollValue] = useState(0);
	const [scrollBottomValue, setScrollBottomValue] = useState(0);
	const [isFold, setIsFold] = useState(true);

	const FoldToggle = (state) => {
		setIsFold(state);
	}
	useEffect(() => {
		// 스크롤링 이벤트
		const onScroll = () => {
			setStickyValue(document.querySelector('.cube-detail-menu-wrap').getBoundingClientRect().top + window.pageYOffset);
			setScrollValue(window.scrollY);
			setScrollBottomValue(0);
		};
		window.addEventListener('scroll', onScroll);
		window.addEventListener('resize', onScroll);
		onScroll();

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		}
	}, []);
	return (
		<section className={scrollValue > 113 ? 'content lms lms-lnb-fixed ' + (isFold ? 'v-wide' : '') : 'content lms lms-lnb-static ' + (isFold ? 'v-wide' : '')}>
			<CubeInfoList scrollBottom={scrollBottomValue} propFunction={FoldToggle} isWait />

			<div className="cube-info-detail type-ov type-only">
				{/* Cube Detail Header */}
				<CubeDetailHeader
					backgroundImage="http://placeimg.com/1920/260/nature" backgroundColor="#ff9600"
					title="반도체 클라쓰 - Keyword로 알아보는 반도체의 품격" type="Basic" time="16h 10m" value="145명 이수" name="김써니"
					hasBookmark="true" hasPlaylist="true" hasNote="false" hasShare="true"
				>
					{/* <div className="header-action">
						<Button className="btn-cube-learn">수강 신청하기</Button>
					</div> */}
				</CubeDetailHeader>

				{/* Cube Detail Container */}
				<div className="cube-detail-body">
					{/* 커리큘럼 영역 */}
					<OverviewCurriculumPreiod />

                    <CubeDetailSec className="cube-sec">
                        <div className="detail-sec-head type-cube-info">
                            <h2 className="detail-sec-title">웹 3.0, 커뮤니티 크리에이터의 시대가 온다.</h2>
                            <div className="detail-sec-info">
                                <span className="ui label text">Class</span>
                                <span className="ui label text">1h 40m</span>
                                {/* 학습중일때 primary*/}
                                <span className="ui label text primary">학습중</span>
                            </div>
                        </div>
                        <div className="detail-sec-body">
                            <LinkContainer />
                            <div className="learning-state-info">
                                <div className="inner">
                                    <ul>
                                        <li className="on">
                                            <div className="item">
                                                <p className="item-title"><span>승인대기</span></p>
                                                <div className="item-desc">
                                                    <dl><dd><span>현재 '승인대기'상태입니다.</span></dd></dl>
                                                    <dl>
                                                        <dt><strong>승인자</strong></dt>
                                                        <dd><span>최선희</span><Link to="/" className="link"><span>문의하기</span></Link></dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </CubeDetailSec>

					{/* Cube Detail Menu */}
					<CubeDetailMenu scrollValue={scrollValue} stickyValue={stickyValue}>
						<Link to="#lms-overview" className={selectedIdx === 1 ? "lms-act" : ""} onClick={()=>setSelectedIdx(1)}>과정소개</Link>
						<Link to="#lms-seriese" className={selectedIdx === 2 ? "lms-act" : ""} onClick={()=>setSelectedIdx(2)}>차수정보</Link>
						<Link to="#lms-review" className={selectedIdx === 3 ? "lms-act" : ""} onClick={()=>setSelectedIdx(3)}>후기</Link>
						<Link to="#lms-relation" className={selectedIdx === 4 ? "lms-act" : ""} onClick={()=>setSelectedIdx(4)}>뱃지</Link>
					</CubeDetailMenu>

					{/* 큐브소개 영역 */}
					<OverviewDescription />

					{/* 차수정보 */}
					<OverviewSeriese />

					{/* 강사 영역 */}
					<OverviewTeacher />

					{/* 리뷰 영역 */}
					<OverviewReview />

					{/* 커뮤니티 영역 */}
					<OverviewCommunity />

					{/* 관련 과정/배지 영역 */}
					<OverviewRelation learn="true" badge="false" />
				</div>

				{/* 과정정보 학습하기 플로팅 영역 */}
				<OverviewCurriculumSinglePreiod scroll={scrollValue} scrollBottom={scrollBottomValue} />

				{/* 문의하기 플로팅 영역 */}
				{/* <OverviewInquery scrollBottom={scrollBottomValue} /> */}
			</div>
		</section>
	)
};
export default CardOverviewPreiod03;