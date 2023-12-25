import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from "semantic-ui-react";
import CubeDetailHeader from "../_Components/CubeDetailHeader";
import OverviewDownloadKeyword from "../_Components/OverviewDownloadKeyword";
import OverviewCommunity from "../_Components/OverviewCommunity";
import OverviewTeacher from "../_Components/OverviewTeacher";
import OverviewRelation from "../_Components/OverviewRelation";
// import OverviewCurriculumSingleAlways from "../_Components/OverviewCurriculumSingleAlways";
// import OverviewInquery from "../_Components/OverviewInquery";
import CubeComment from '../_Components/CubeComment';
import CubeDetailMenu from '../_Components/CubeDetailMenu';
import WebLearningContainer from './components/WebLearningContainer';
import GuideContainer from './components/GuideContainer';

const SingleLive = () => {
	// Tabmenu
	const [selectedIdx, setSelectedIdx] = useState(1);
    const [stickyValue, setStickyValue] = useState(0);

    // Layout
	const [scrollValue, setScrollValue] = useState(0);
	// const [scrollBottomValue, setScrollBottomValue] = useState(0);

	useEffect(() => {
        const onInit = () => {
            setStickyValue(document.querySelector('.cube-detail-menu-wrap').getBoundingClientRect().top + window.pageYOffset);
        }
		const onScroll = () => {
			setScrollValue(window.scrollY);
			// setScrollBottomValue(0);
		};
		window.addEventListener('scroll', onScroll);
		window.addEventListener('resize', onScroll);
		onInit();
		onScroll();

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		}
	}, []);

	return (
		<section className='content lms'>
			<div className="cube-info-detail type-ov type-cube">
				{/* Cube Detail Header */}
				<CubeDetailHeader
					backgroundImage="http://placeimg.com/1920/260/nature" backgroundColor="rgba(62, 176, 218, 0.9)"
                    title="[이천포럼 2022] Mining Our Happiness - '나(SK)'의 행복 일지" type="Basic" time="16h 10m" value="145명 이수" name="김써니"
                    hasBookmark="true" hasPlaylist="true" hasNote="true" hasShare="true"
                >
					<div className="header-action">
						<Button className="btn-cube-learn">학습하기</Button>
					</div>
				</CubeDetailHeader>

				{/* Cube Detail Container */}
				<div className="cube-detail-body">
					{/* 큐브 영역 */}
					<WebLearningContainer title/>

					{/* Cube Detail Menu */}
					<CubeDetailMenu scrollValue={scrollValue} stickyValue={stickyValue}>
						<Link className={selectedIdx === 1 ? "lms-act" : ""} onClick={()=>setSelectedIdx(1)}>과정소개</Link>
						<Link className={selectedIdx === 2 ? "lms-act" : ""} onClick={()=>setSelectedIdx(2)}>코멘트<em className='count'>20</em></Link>
					</CubeDetailMenu>

					{selectedIdx === 1 &&
						<>
							{/* 과정안내 영역 */}
							<GuideContainer />

							{/* 참고자료/키워드 영역 */}
							<OverviewDownloadKeyword download="true" keyword="true" />

							{/* 강사 영역 */}
							<OverviewTeacher />

							{/* 커뮤니티 영역 */}
							<OverviewCommunity />

							{/* 관련 과정/배지 영역 */}
							<OverviewRelation learn="true" badge="true" />
						</>
					}
					{selectedIdx === 2 &&
						<>
							{/* 큐브 코멘트 영역 */}
							<CubeComment pin="true" />
						</>
					}
				</div>
				{/* 과정정보 학습하기 플로팅 영역 */}
				{/* <OverviewCurriculumSingleAlways scroll={scrollValue} scrollBottom={scrollBottomValue} /> */}

				{/* 문의하기 플로팅 영역 */}
				{/* <OverviewInquery scrollBottom={scrollBottomValue} /> */}
			</div>
		</section>
	)
};
export default SingleLive;
